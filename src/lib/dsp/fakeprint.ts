import { fft } from "./fft";

const SAMPLE_RATE = 16000;
const N_FFT = 8192;
const HOP = N_FFT / 2;
const FREQ_MIN = 1000;
const FREQ_MAX = 8000;
const HULL_AREA = 10;
const MIN_DB = -45;
const MAX_DB = 5;

export const FAKEPRINT_LENGTH =
  Math.floor((FREQ_MAX * N_FFT) / SAMPLE_RATE) -
  Math.ceil((FREQ_MIN * N_FFT) / SAMPLE_RATE) +
  1;

// Matches torchaudio Spectrogram(n_fft=8192, power=2): periodic Hann, centered frames, reflect padding
function meanPowerDb(audio: Float32Array): Float64Array {
  const pad = N_FFT / 2;
  const n = audio.length;
  const at = (i: number) => {
    if (i < 0) i = -i;
    if (i >= n) i = 2 * (n - 1) - i;
    return audio[i];
  };
  const window = new Float64Array(N_FFT);
  for (let i = 0; i < N_FFT; i++)
    window[i] = 0.5 * (1 - Math.cos((2 * Math.PI * i) / N_FFT));

  const bins = N_FFT / 2 + 1;
  const sum = new Float64Array(bins);
  const frames = 1 + Math.floor(n / HOP);
  const re = new Float64Array(N_FFT);
  const im = new Float64Array(N_FFT);
  for (let f = 0; f < frames; f++) {
    const start = f * HOP - pad;
    for (let i = 0; i < N_FFT; i++) {
      re[i] = at(start + i) * window[i];
      im[i] = 0;
    }
    fft(re, im);
    for (let k = 0; k < bins; k++) {
      const power = Math.min(Math.max(re[k] * re[k] + im[k] * im[k], 1e-10), 1e6);
      sum[k] += 10 * Math.log10(power);
    }
  }
  for (let k = 0; k < bins; k++) sum[k] /= frames;
  return sum;
}

export function extractFakeprint(audio: Float32Array): Float32Array {
  const db = meanPowerDb(audio);
  const lo = Math.ceil((FREQ_MIN * N_FFT) / SAMPLE_RATE);
  const spectrum = db.subarray(lo, lo + FAKEPRINT_LENGTH);
  const len = spectrum.length;

  // scipy minimum_filter1d(size=10, mode="nearest") covers i-5..i+4
  const out = new Float32Array(len);
  let max = 0;
  for (let i = 0; i < len; i++) {
    let hull = Infinity;
    for (let j = i - HULL_AREA / 2; j < i + HULL_AREA / 2; j++)
      hull = Math.min(hull, spectrum[Math.min(Math.max(j, 0), len - 1)]);
    const residue = Math.min(
      Math.max(spectrum[i] - Math.max(hull, MIN_DB), 0),
      MAX_DB,
    );
    out[i] = residue;
    max = Math.max(max, residue);
  }
  for (let i = 0; i < len; i++) out[i] /= max + 1e-6;
  return out;
}
