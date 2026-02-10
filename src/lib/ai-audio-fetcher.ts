import { SAMPLING_RATE, INPUT_LENGTH } from "./ai-infer-engine";

let audioContext: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioContext || audioContext.state === "closed") {
    audioContext = new AudioContext({
      latencyHint: "playback",
      sampleRate: SAMPLING_RATE,
    });
  }
  return audioContext;
}

export async function getPreviewUrl(
  trackUri: string,
): Promise<string | null> {
  try {
    const trackId = trackUri.split(":")[2];
    if (!trackId) return null;

    const token = (await Spicetify.Platform.AuthorizationAPI.getState()).token
      .accessToken;

    const response = await fetch(
      `https://api.spotify.com/v1/tracks/${trackId}`,
      { headers: { Authorization: `Bearer ${token}` } },
    );

    if (!response.ok) return null;

    const data = await response.json();
    return data.preview_url ?? null;
  } catch (error) {
    console.error("[trashbin+ AI] Failed to get preview URL:", error);
    return null;
  }
}

export async function fetchAudioWaveform(
  url: string,
): Promise<Float32Array> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch audio: ${response.status}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  const ctx = getAudioContext();
  const decodedBuffer = await ctx.decodeAudioData(arrayBuffer);

  return decodedBuffer.getChannelData(0);
}

export function extractMiddleChunk(
  waveform: Float32Array,
  targetLength: number = INPUT_LENGTH,
): Float32Array {
  if (waveform.length <= targetLength) {
    // Pad with zeros if too short
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
