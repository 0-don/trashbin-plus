import { ASSET_NAMES, ensureAssets, getAsset } from "./ai-asset-manager";
import {
  closeAudioContext,
  extractMiddleChunk,
  fetchAudioWaveform,
  getPreviewUrl,
  getPreviewUrls,
} from "./ai-audio-fetcher";
import {
  disposeEngine,
  getActiveConfig,
  initEngine,
  queueInference,
} from "./ai-infer-engine";
import { type ModelId, MODELS } from "./ai-model-config";

class LimitedMap<K, V> {
  private map: Map<K, V>;
  private maxLength: number;

  constructor(maxLength: number) {
    this.map = new Map();
    this.maxLength = maxLength;
  }

  set(key: K, value: V): void {
    if (this.map.size >= this.maxLength) {
      const firstKey = this.map.keys().next().value!;
      this.map.delete(firstKey);
    }
    this.map.set(key, value);
  }

  get(key: K): V | undefined {
    return this.map.get(key);
  }

  clear(): void {
    this.map.clear();
  }
}

const resultCache = new LimitedMap<string, number>(1000);
const processingTracks = new Set<string>();

export function getCachedResult(trackUri: string): number | undefined {
  return resultCache.get(trackUri);
}

export function isProcessing(trackUri: string): boolean {
  return processingTracks.has(trackUri);
}

export async function classifyTrack(
  trackUri: string,
): Promise<number | null> {
  const cached = resultCache.get(trackUri);
  if (cached !== undefined) return cached;

  if (processingTracks.has(trackUri)) return null;

  processingTracks.add(trackUri);

  try {
    const previewUrl = await getPreviewUrl(trackUri);
    if (!previewUrl) return null;

    return await classifyWithPreviewUrl(trackUri, previewUrl);
  } catch (error) {
    console.error(`[trashbin+ AI] Failed to classify ${trackUri}:`, error);
    return null;
  } finally {
    processingTracks.delete(trackUri);
  }
}

async function classifyWithPreviewUrl(
  trackUri: string,
  previewUrl: string,
): Promise<number | null> {
  const config = getActiveConfig();
  if (!config) return null;

  const waveform = await fetchAudioWaveform(previewUrl, config.sampleRate);
  const inputData = extractMiddleChunk(waveform, config.inputLength);
  const probability = await queueInference(inputData);

  if (probability !== null) {
    resultCache.set(trackUri, probability);
  }

  return probability;
}

const MAX_CONCURRENT = 3;
let batchInFlight = false;

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
    const previewUrls = await getPreviewUrls(toProcess);
    console.log(
      `[trashbin+ AI] Got ${previewUrls.size}/${toProcess.length} preview URLs`,
    );

    const withPreview = toProcess.filter((uri) => previewUrls.has(uri));
    let active = 0;
    let idx = 0;

    await new Promise<void>((resolve) => {
      if (withPreview.length === 0) {
        resolve();
        return;
      }

      const next = () => {
        while (active < MAX_CONCURRENT && idx < withPreview.length) {
          const uri = withPreview[idx++];
          active++;
          classifyWithPreviewUrl(uri, previewUrls.get(uri)!)
            .then((prob) => {
              if (prob !== null) onResult?.(uri, prob);
            })
            .catch(() => {})
            .finally(() => {
              active--;
              if (idx >= withPreview.length && active === 0) resolve();
              else next();
            });
        }
      };
      next();
    });
  } finally {
    for (const uri of toProcess) processingTracks.delete(uri);
    batchInFlight = false;
  }
}

export async function initializeAiDetection(
  modelId: ModelId,
  onProgress?: (message: string) => void,
): Promise<boolean> {
  try {
    const config = MODELS[modelId];
    if (!config) {
      console.error(`[trashbin+ AI] Unknown model: ${modelId}`);
      return false;
    }

    onProgress?.("Checking assets...");
    const assetsReady = await ensureAssets(modelId, onProgress);
    if (!assetsReady) return false;

    onProgress?.("Loading WASM runtime...");
    const wasmBuffer = await getAsset(ASSET_NAMES.WASM);
    if (!wasmBuffer) return false;

    onProgress?.(`Loading ${config.label} model...`);
    const modelBuffer = await getAsset(config.assetName);
    if (!modelBuffer) return false;

    onProgress?.("Initializing engine...");
    const initialized = await initEngine(modelBuffer, wasmBuffer, config);

    if (initialized) {
      onProgress?.("Ready");
    }

    return initialized;
  } catch (error) {
    console.error("[trashbin+ AI] Initialization failed:", error);
    return false;
  }
}

export function cleanupAiDetection(): void {
  disposeEngine();
  closeAudioContext();
  resultCache.clear();
  processingTracks.clear();
  batchInFlight = false;
}
