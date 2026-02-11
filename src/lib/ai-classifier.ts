import {
  type ModelId,
  MODELS,
  SAMPLE_RATE,
  disposeEngine,
  ensureAssets,
  getActiveModelId,
  initEngine,
  queueInference,
} from "./ai-engine";

const CORS_PROXY = "https://cors-proxy.spicetify.app";
const CACHE_KEY_PREFIX = "trashbin-ai-cache:";
const POLL_INTERVAL = 2000;
export const AI_TRASH_THRESHOLD = 0.8;

// --- Audio ---

let audioCtx: AudioContext | null = null;

function getAudioCtx(): AudioContext {
  if (!audioCtx || audioCtx.state === "closed")
    audioCtx = new AudioContext({ sampleRate: SAMPLE_RATE });
  return audioCtx;
}

async function fetchPreviewUrl(trackUri: string): Promise<string | null> {
  const id = trackUri.split(":")[2];
  if (!id) return null;
  try {
    const res = await fetch(
      `${CORS_PROXY}/https://open.spotify.com/embed/track/${id}`,
    );
    if (!res.ok) return null;
    const html = await res.text();
    const match = html.match(/"audioPreview":\s*\{\s*"url":\s*"([^"]+)"/);
    return match?.[1] ?? null;
  } catch {
    return null;
  }
}

async function fetchAudioWaveform(url: string): Promise<Float32Array> {
  const response = await fetch(url);
  if (!response.ok)
    throw new Error(`Failed to fetch audio: ${response.status}`);
  const buffer = await response.arrayBuffer();
  const decoded = await getAudioCtx().decodeAudioData(buffer);
  return decoded.getChannelData(0);
}

function extractMiddleChunk(
  waveform: Float32Array,
  targetLength: number,
): Float32Array {
  if (waveform.length <= targetLength) {
    const padded = new Float32Array(targetLength);
    padded.set(waveform, Math.floor((targetLength - waveform.length) / 2));
    return padded;
  }
  const start = Math.floor(waveform.length / 2) - Math.floor(targetLength / 2);
  return waveform.slice(start, start + targetLength);
}

// --- Cache ---

let cacheKey: string | null = null;

function getCache(): Record<string, number> {
  if (!cacheKey) return {};
  try {
    const raw = Spicetify.LocalStorage.get(cacheKey);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function setCacheEntry(trackUri: string, probability: number): void {
  if (!cacheKey) return;
  const cache = getCache();
  cache[trackUri] = probability;
  Spicetify.LocalStorage.set(cacheKey, JSON.stringify(cache));
}

export function getCachedResult(trackUri: string): number | undefined {
  return getCache()[trackUri];
}

// --- Queue ---

const queue = new Set<string>();
let processing = false;
let intervalId: ReturnType<typeof setInterval> | null = null;
type ResultListener = (uri: string, probability: number) => void;
const listeners = new Set<ResultListener>();

export function enqueue(trackUri: string): void {
  if (getCachedResult(trackUri) !== undefined) return;
  queue.add(trackUri);
}

export function onResult(cb: ResultListener): () => void {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

async function processNext(): Promise<void> {
  if (processing || queue.size === 0) return;

  const uri = queue.values().next().value!;
  queue.delete(uri);

  if (getCachedResult(uri) !== undefined) return;

  processing = true;
  try {
    const modelId = getActiveModelId();
    if (!modelId) return;

    const previewUrl = await fetchPreviewUrl(uri);
    if (!previewUrl) return;

    const model = MODELS[modelId];
    const waveform = await fetchAudioWaveform(previewUrl);
    const input = extractMiddleChunk(waveform, model.inputLength);
    const probability = await queueInference(input);

    if (probability !== null) {
      setCacheEntry(uri, probability);
      listeners.forEach((cb) => cb(uri, probability));
    }
  } catch (error) {
    console.error(`[trashbin+ AI] Failed to classify ${uri}:`, error);
  } finally {
    processing = false;
  }
}

function startQueue(): void {
  if (intervalId) return;
  intervalId = setInterval(processNext, POLL_INTERVAL);
}

function stopQueue(): void {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
  queue.clear();
  processing = false;
  listeners.clear();
}

// --- Lifecycle ---

export async function initializeAiDetection(
  modelId: ModelId,
  onProgress?: (message: string) => void,
): Promise<boolean> {
  try {
    cacheKey = `${CACHE_KEY_PREFIX}${modelId}`;

    onProgress?.("Checking assets...");
    const ready = await ensureAssets(modelId, onProgress);
    if (!ready) return false;

    onProgress?.(`Initializing ${MODELS[modelId].label}...`);
    const initialized = await initEngine(modelId);
    if (initialized) {
      onProgress?.("Ready");
      startQueue();
    }
    return initialized;
  } catch (error) {
    console.error("[trashbin+ AI] Initialization failed:", error);
    return false;
  }
}

export function cleanupAiDetection(): void {
  stopQueue();
  disposeEngine();
  if (audioCtx && audioCtx.state !== "closed") {
    audioCtx.close();
    audioCtx = null;
  }
  cacheKey = null;
}
