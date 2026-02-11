import { useTrashbinStore } from "../store/trashbin-store";
import {
  type ModelId,
  MODELS,
  SAMPLE_RATE,
  activeModelId,
  disposeEngine,
  ensureAssets,
  initEngine,
  queueInference,
} from "./ai-engine";
import { AI_INDICATOR_CLASS } from "./constants";

const CORS_PROXY = "https://cors-proxy.spicetify.app";
const LS_KEY_PREFIX = "trashbin-ai-results:";
const POLL_INTERVAL = 500;
export const AI_TRASH_THRESHOLD = 0.8;

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

let lsKey: string | null = null;

function getStoredResults(): Record<string, number> {
  if (!lsKey) return {};
  try {
    const raw = Spicetify.LocalStorage.get(lsKey);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function setStoredResult(trackUri: string, probability: number): void {
  if (!lsKey) return;
  const results = getStoredResults();
  results[trackUri] = probability;
  Spicetify.LocalStorage.set(lsKey, JSON.stringify(results));
}

export function getStoredResult(trackUri: string): number | undefined {
  return getStoredResults()[trackUri];
}

export function getAiStorageSize(): number {
  return Object.keys(getStoredResults()).length;
}

export function clearAiStorage(): void {
  if (!lsKey) return;
  Spicetify.LocalStorage.remove(lsKey);
  queue.clear();
  document
    .querySelectorAll(`.${AI_INDICATOR_CLASS}`)
    .forEach((el) => el.remove());
}

export function autoTrashIfNeeded(uri: string, probability: number): void {
  const state = useTrashbinStore.getState();
  if (
    state.trashAiSongs &&
    probability >= AI_TRASH_THRESHOLD &&
    !state.trashSongList[uri]
  ) {
    state.toggleSongTrash(uri, false);
  }
}

const queue = new Set<string>();
let processing = false;
let intervalId: ReturnType<typeof setInterval> | null = null;
type ResultListener = (uri: string, probability: number) => void;
const listeners = new Set<ResultListener>();

export function enqueue(trackUri: string): void {
  if (getStoredResult(trackUri) !== undefined) return;
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

  if (getStoredResult(uri) !== undefined) return;

  processing = true;
  try {
    if (!activeModelId) return;

    const previewUrl = await fetchPreviewUrl(uri);
    if (!previewUrl) return;

    const model = MODELS[activeModelId];
    const waveform = await fetchAudioWaveform(previewUrl);
    const input = extractMiddleChunk(waveform, model.inputLength);
    const probability = await queueInference(input);

    if (probability !== null) {
      setStoredResult(uri, probability);
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

export async function initializeAiDetection(
  modelId: ModelId,
  onProgress?: (message: string) => void,
): Promise<boolean> {
  try {
    lsKey = `${LS_KEY_PREFIX}${modelId}`;

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
  lsKey = null;
}
