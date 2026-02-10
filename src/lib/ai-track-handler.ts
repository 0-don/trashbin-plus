import { ASSET_NAMES, ensureAssets, getAsset } from "./ai-asset-manager";
import {
  closeAudioContext,
  extractMiddleChunk,
  fetchAudioWaveform,
  getPreviewUrl,
} from "./ai-audio-fetcher";
import { disposeEngine, initEngine, queueInference } from "./ai-infer-engine";

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
    if (!previewUrl) {
      return null;
    }

    const waveform = await fetchAudioWaveform(previewUrl);
    const chunk = extractMiddleChunk(waveform);
    const probability = await queueInference(chunk);

    if (probability !== null) {
      resultCache.set(trackUri, probability);
    }

    return probability;
  } catch (error) {
    console.error(
      `[trashbin+ AI] Failed to classify ${trackUri}:`,
      error,
    );
    return null;
  } finally {
    processingTracks.delete(trackUri);
  }
}

export async function initializeAiDetection(
  onProgress?: (message: string) => void,
): Promise<boolean> {
  try {
    onProgress?.("Checking assets...");
    const assetsReady = await ensureAssets(onProgress);
    if (!assetsReady) return false;

    onProgress?.("Loading WASM runtime...");
    const wasmBuffer = await getAsset(ASSET_NAMES.WASM);
    if (!wasmBuffer) return false;

    onProgress?.("Loading AI model...");
    const modelBuffer = await getAsset(ASSET_NAMES.MODEL);
    if (!modelBuffer) return false;

    onProgress?.("Initializing engine...");
    const initialized = await initEngine(modelBuffer, wasmBuffer);

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
}
