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
const CACHE_MAX = 1000;
const MAX_CONCURRENT = 3;

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

async function fetchPreviewUrls(
  trackUris: string[],
): Promise<Map<string, string>> {
  const result = new Map<string, string>();
  await Promise.all(
    trackUris.map(async (uri) => {
      const url = await fetchPreviewUrl(uri);
      if (url) result.set(uri, url);
    }),
  );
  return result;
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

// --- Cache & Classification ---

const resultCache = new Map<string, number>();
const processingTracks = new Set<string>();
let batchInFlight = false;

export function getCachedResult(trackUri: string): number | undefined {
  return resultCache.get(trackUri);
}

export function isProcessing(trackUri: string): boolean {
  return processingTracks.has(trackUri);
}

async function classify(
  trackUri: string,
  previewUrl: string,
): Promise<number | null> {
  const modelId = getActiveModelId();
  if (!modelId) return null;

  const model = MODELS[modelId];
  const waveform = await fetchAudioWaveform(previewUrl);
  const input = extractMiddleChunk(waveform, model.inputLength);
  const probability = await queueInference(input);

  if (probability !== null) {
    if (resultCache.size >= CACHE_MAX)
      resultCache.delete(resultCache.keys().next().value!);
    resultCache.set(trackUri, probability);
  }
  return probability;
}

export async function classifyTrack(trackUri: string): Promise<number | null> {
  const cached = resultCache.get(trackUri);
  if (cached !== undefined) return cached;
  if (processingTracks.has(trackUri)) return null;

  processingTracks.add(trackUri);
  try {
    const previewUrl = await fetchPreviewUrl(trackUri);
    if (!previewUrl) return null;
    return await classify(trackUri, previewUrl);
  } catch (error) {
    console.error(`[trashbin+ AI] Failed to classify ${trackUri}:`, error);
    return null;
  } finally {
    processingTracks.delete(trackUri);
  }
}

export async function classifyTracks(
  trackUris: string[],
  onResult?: (trackUri: string, probability: number) => void,
): Promise<void> {
  if (batchInFlight) return;

  const toProcess = trackUris.filter(
    (uri) => resultCache.get(uri) === undefined && !processingTracks.has(uri),
  );
  if (toProcess.length === 0) return;

  batchInFlight = true;
  for (const uri of toProcess) processingTracks.add(uri);

  try {
    const previewUrls = await fetchPreviewUrls(toProcess);
    const withPreview = toProcess.filter((uri) => previewUrls.has(uri));

    const executing = new Set<Promise<void>>();
    for (const uri of withPreview) {
      const p = classify(uri, previewUrls.get(uri)!)
        .then((prob) => {
          if (prob !== null) onResult?.(uri, prob);
        })
        .catch(() => {})
        .finally(() => executing.delete(p));
      executing.add(p);
      if (executing.size >= MAX_CONCURRENT) await Promise.race(executing);
    }
    await Promise.all(executing);
  } finally {
    for (const uri of toProcess) processingTracks.delete(uri);
    batchInFlight = false;
  }
}

// --- Lifecycle ---

export async function initializeAiDetection(
  modelId: ModelId,
  onProgress?: (message: string) => void,
): Promise<boolean> {
  try {
    onProgress?.("Checking assets...");
    const ready = await ensureAssets(modelId, onProgress);
    if (!ready) return false;

    onProgress?.(`Initializing ${MODELS[modelId].label}...`);
    const initialized = await initEngine(modelId);
    if (initialized) onProgress?.("Ready");
    return initialized;
  } catch (error) {
    console.error("[trashbin+ AI] Initialization failed:", error);
    return false;
  }
}

export function cleanupAiDetection(): void {
  disposeEngine();
  if (audioCtx && audioCtx.state !== "closed") {
    audioCtx.close();
    audioCtx = null;
  }
  resultCache.clear();
  processingTracks.clear();
  batchInFlight = false;
}
