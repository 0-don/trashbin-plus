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

const CORS_PROXY = "https://cors-proxy.spicetify.app";

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

export async function classifyTrack(trackUri: string): Promise<number | null> {
  if (!activeModelId) return null;

  const previewUrl = await fetchPreviewUrl(trackUri);
  if (!previewUrl) return null;

  const model = MODELS[activeModelId];
  const waveform = await fetchAudioWaveform(previewUrl);
  const input = extractMiddleChunk(waveform, model.inputLength);
  return queueInference(input);
}

export async function initClassifier(
  modelId: ModelId,
  onProgress?: (message: string) => void,
): Promise<boolean> {
  onProgress?.("Checking assets...");
  const ready = await ensureAssets(modelId, onProgress);
  if (!ready) return false;

  onProgress?.(`Initializing ${MODELS[modelId].label}...`);
  return initEngine(modelId);
}

export function disposeClassifier(): void {
  disposeEngine();
  if (audioCtx && audioCtx.state !== "closed") {
    audioCtx.close();
    audioCtx = null;
  }
}
