import {
  type ModelId,
  MODELS,
  activeModelId,
  classifyAudio,
  disposeEngine,
  ensureAssets,
  initEngine,
} from "./ai-engine";
import { isBlocklistedArtist } from "./ai-blocklist";
import { fetchMetadata, hexToBase62 } from "./metadata-utils";

const CORS_PROXY = "https://cors-proxy.spicetify.app";

async function getTrackArtistIds(trackUri: string): Promise<string[]> {
  try {
    const currentTrack = Spicetify.Player.data?.item;
    if (currentTrack && currentTrack.uri === trackUri && currentTrack.artists) {
      const ids: string[] = [];
      for (const artist of currentTrack.artists) {
        const artistId = (artist as any).uri?.split(":")[2];
        if (artistId) ids.push(artistId);
      }
      if (ids.length > 0) return ids;
    }

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

export async function classifyTrack(trackUri: string): Promise<number | null> {
  // Primary: SoulOverAI blocklist check
  const artistIds = await getTrackArtistIds(trackUri);
  for (const artistId of artistIds) {
    if (isBlocklistedArtist(artistId)) return 1.0;
  }

  // Backup: ONNX ML inference (fetch + decode + infer all in worker)
  if (!activeModelId) return null;

  const previewUrl = await fetchPreviewUrl(trackUri);
  if (!previewUrl) return null;

  return classifyAudio(previewUrl);
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
}
