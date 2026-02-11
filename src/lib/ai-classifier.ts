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
import { isBlocklistedArtist } from "./ai-blocklist";
import { fetchMetadata, hexToBase62 } from "./metadata-utils";

const CORS_PROXY = "https://cors-proxy.spicetify.app";

let audioCtx: AudioContext | null = null;

function getAudioCtx(): AudioContext {
  if (!audioCtx || audioCtx.state === "closed")
    audioCtx = new AudioContext({ sampleRate: SAMPLE_RATE });
  return audioCtx;
}

async function getTrackArtistIds(trackUri: string): Promise<string[]> {
  try {
    // Check currently playing track first (free, no API call)
    const currentTrack = Spicetify.Player.data?.item;
    if (currentTrack && currentTrack.uri === trackUri && currentTrack.artists) {
      const ids: string[] = [];
      for (const artist of currentTrack.artists) {
        const artistId = (artist as any).uri?.split(":")[2];
        if (artistId) ids.push(artistId);
      }
      if (ids.length > 0) return ids;
    }

    // Fallback: internal spclient metadata API
    const trackId = trackUri.split(":")[2];
    if (!trackId) return [];
    const data = await fetchMetadata("track", trackId);
    const ids: string[] = [];
    if (Array.isArray(data.artist)) {
      for (const a of data.artist) {
        if (a.gid) ids.push(hexToBase62(a.gid));
      }
    }
    return ids;
  } catch {
    return [];
  }
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

function splitIntoChunks(
  waveform: Float32Array,
  chunkLength: number,
): Float32Array[] {
  const chunks: Float32Array[] = [];
  const fullChunkCount = Math.floor(waveform.length / chunkLength);

  for (let i = 0; i < fullChunkCount; i++) {
    const start = i * chunkLength;
    chunks.push(waveform.slice(start, start + chunkLength));
  }

  // Include remainder if at least 50% of a chunk
  const remainder = waveform.length % chunkLength;
  if (remainder > 0 && remainder >= chunkLength / 2) {
    const padded = new Float32Array(chunkLength);
    padded.set(waveform.slice(fullChunkCount * chunkLength));
    chunks.push(padded);
  }

  // Edge case: waveform shorter than one chunk
  if (chunks.length === 0) {
    const padded = new Float32Array(chunkLength);
    padded.set(waveform, Math.floor((chunkLength - waveform.length) / 2));
    chunks.push(padded);
  }

  return chunks;
}

export async function classifyTrack(trackUri: string): Promise<number | null> {
  // Primary: SoulOverAI blocklist check
  const artistIds = await getTrackArtistIds(trackUri);
  for (const artistId of artistIds) {
    if (isBlocklistedArtist(artistId)) {
      return 1.0;
    }
  }

  // Backup: ONNX ML inference with chunked averaging
  if (!activeModelId) return null;

  const previewUrl = await fetchPreviewUrl(trackUri);
  if (!previewUrl) return null;

  const model = MODELS[activeModelId];
  const waveform = await fetchAudioWaveform(previewUrl);
  const chunks = splitIntoChunks(waveform, model.inputLength);

  const probabilities: number[] = [];
  for (const chunk of chunks) {
    // Yield to main thread between chunks
    await new Promise((r) => setTimeout(r, 0));
    const prob = await queueInference(chunk);
    if (prob !== null) probabilities.push(prob);
  }

  if (probabilities.length === 0) return null;

  let sum = 0;
  for (const p of probabilities) sum += p;
  return sum / probabilities.length;
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
