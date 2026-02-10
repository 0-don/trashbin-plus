const CORS_PROXY = "https://cors-proxy.spicetify.app";

let audioContext: AudioContext | null = null;
let currentSampleRate = 44100;

function getAudioContext(sampleRate: number): AudioContext {
  if (
    !audioContext ||
    audioContext.state === "closed" ||
    currentSampleRate !== sampleRate
  ) {
    if (audioContext && audioContext.state !== "closed") {
      audioContext.close();
    }
    audioContext = new AudioContext({
      latencyHint: "playback",
      sampleRate,
    });
    currentSampleRate = sampleRate;
  }
  return audioContext;
}

async function fetchEmbedPreviewUrl(id: string): Promise<string | null> {
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

export async function getPreviewUrl(
  trackUri: string,
): Promise<string | null> {
  const id = trackUri.split(":")[2];
  if (!id) return null;
  return fetchEmbedPreviewUrl(id);
}

export async function getPreviewUrls(
  trackUris: string[],
): Promise<Map<string, string>> {
  const result = new Map<string, string>();
  try {
    const promises = trackUris.map(async (uri) => {
      const id = uri.split(":")[2];
      if (!id) return;

      const previewUrl = await fetchEmbedPreviewUrl(id);
      if (previewUrl) {
        result.set(uri, previewUrl);
      }
    });

    await Promise.all(promises);

    console.log(
      `[trashbin+ AI] Got ${result.size}/${trackUris.length} preview URLs`,
    );
  } catch (error) {
    console.error("[trashbin+ AI] Failed to get preview URLs:", error);
  }
  return result;
}

export async function fetchAudioWaveform(
  url: string,
  sampleRate: number,
): Promise<Float32Array> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch audio: ${response.status}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  const ctx = getAudioContext(sampleRate);
  const decodedBuffer = await ctx.decodeAudioData(arrayBuffer);

  return decodedBuffer.getChannelData(0);
}

export function extractMiddleChunk(
  waveform: Float32Array,
  targetLength: number,
): Float32Array {
  if (waveform.length <= targetLength) {
    const padded = new Float32Array(targetLength);
    const offset = Math.floor((targetLength - waveform.length) / 2);
    padded.set(waveform, offset);
    return padded;
  }

  const start =
    Math.floor(waveform.length / 2) - Math.floor(targetLength / 2);
  const end = start + targetLength;
  return waveform.slice(start, end);
}

export function closeAudioContext(): void {
  if (audioContext && audioContext.state !== "closed") {
    audioContext.close();
    audioContext = null;
  }
}
