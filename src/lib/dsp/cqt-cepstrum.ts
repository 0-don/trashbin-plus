import { fft, nextPowerOf2 } from "./fft";

const SAMPLE_RATE = 16000;
const F_MIN = 500;
const N_BINS = 48;
const BINS_PER_OCTAVE = 12;
const HOP = 512;
const SPARSITY = 0.01;
export const N_COEFFS = 24;
export const SEGMENT_SAMPLES = 10 * SAMPLE_RATE;
const SKIP_SAMPLES = 5 * SAMPLE_RATE;
const N_SEGMENTS = 5;

const r = 2 ** (1 / BINS_PER_OCTAVE);
const ALPHA = (r * r - 1) / (r * r + 1);
const FREQS = Array.from(
  { length: N_BINS },
  (_, k) => F_MIN * 2 ** (k / BINS_PER_OCTAVE),
);
const lengthAt = (sr: number, f: number) => sr / (ALPHA * f);

// ── soxr HQ 2:1 decimation filter (as used by librosa res_type="soxr_hq") ──

function besselI0(x: number): number {
  let sum = 1;
  let term = 1;
  const q = (x * x) / 4;
  for (let k = 1; k < 500; k++) {
    term *= q / (k * k);
    sum += term;
    if (term < sum * 1e-17) break;
  }
  return sum;
}

function kaiserBeta(att: number, trBw: number): number {
  const coefs = [
    [-6.784957e-10, 1.02856e-5, 0.1087556, -0.8988365 + 0.001],
    [-6.897885e-10, 1.027433e-5, 0.10876, -0.8994658 + 0.002],
    [-1.000683e-9, 1.030092e-5, 0.1087677, -0.9007898 + 0.003],
    [-3.654474e-10, 1.040631e-5, 0.1087085, -0.8977766 + 0.006],
    [8.106988e-9, 6.983091e-6, 0.1091387, -0.9172048 + 0.015],
    [9.519571e-9, 7.272678e-6, 0.1090068, -0.9140768 + 0.025],
    [-5.626821e-9, 1.342186e-5, 0.1083999, -0.9065452 + 0.05],
    [-9.965946e-8, 5.073548e-5, 0.1040967, -0.7672778 + 0.085],
    [1.604808e-7, -5.856462e-5, 0.1185998, -1.34824 + 0.1],
    [-1.511964e-7, 6.363034e-5, 0.1064627, -0.9876665 + 0.18],
  ];
  const realm = Math.log2(trBw / 0.0005);
  const clampIdx = (i: number) => Math.max(0, Math.min(i, coefs.length - 1));
  const poly = (c: number[]) => ((c[0] * att + c[1]) * att + c[2]) * att + c[3];
  const b0 = poly(coefs[clampIdx(Math.trunc(realm))]);
  const b1 = poly(coefs[clampIdx(1 + Math.trunc(realm))]);
  return b0 + (b1 - b0) * (realm - Math.trunc(realm));
}

function designDecimationFilter(): Float64Array {
  const precision = 20;
  const toDb = (x: number) => 20 * Math.log10(x);
  const rej = precision * toDb(2);
  const sinePhi = ((2.0517e-7 * rej - 1.1303e-4) * rej + 0.023154) * rej + 0.55924;
  const drop = Math.exp(-3 * Math.log(10) * 0.05);
  const s = drop > 0.5 ? 1 - drop : drop;
  const sinePow = Math.log(0.5) / Math.log(Math.sin(sinePhi * 0.5));
  let x = Math.asin(s ** (1 / sinePow)) / sinePhi;
  x = drop > 0.5 ? x : 1 - x;
  const passbandEnd = 1 - 0.05 / (1 - x);

  const att = (precision + 1) * toDb(2);
  const fp = passbandEnd * 0.5;
  const fs = 0.5;
  const trBw = Math.min(0.5 * (fs - fp), 0.5 * fs);
  const fc = fs - trBw;
  const beta = kaiserBeta(att, (trBw * 0.5) / fc);
  const attNorm =
    ((0.0007528358 - 1.577737e-5 * beta) * beta + 0.6248022) * beta + 0.06186902;
  const modulo = 4;
  let taps = Math.ceil(attNorm / trBw + 1);
  taps = Math.trunc((taps + modulo - 2) / modulo) * modulo + 1;

  const m = taps - 1;
  const h = new Float64Array(taps);
  const mult = 1 / besselI0(beta);
  const mult1 = 1 / (0.5 * m + 0.5);
  for (let i = 0; i <= m / 2; i++) {
    const z = i - 0.5 * m;
    const xz = z * Math.PI;
    const y = z * mult1;
    const sinc = xz !== 0 ? Math.sin(fc * xz) / xz : fc;
    const arg = 1 - y * y;
    h[i] = h[m - i] = sinc * (arg >= 0 ? besselI0(beta * Math.sqrt(arg)) * mult : 0);
  }
  return h;
}

let decimationFilter: Float64Array | null = null;

export function decimate2(input: Float64Array): Float64Array {
  decimationFilter ??= designDecimationFilter();
  const h = decimationFilter;
  const out = new Float64Array(Math.floor(input.length / 2));
  const delay = (h.length - 1) / 2;
  const scale = Math.SQRT2;
  for (let n = 0; n < out.length; n++) {
    const c = 2 * n + delay;
    let acc = 0;
    const jMin = Math.max(0, c - input.length + 1);
    const jMax = Math.min(h.length - 1, c);
    for (let j = jMin; j <= jMax; j++) acc += h[j] * input[c - j];
    out[n] = acc * scale;
  }
  return out;
}

// ── librosa.cqt ──

interface OctaveBasis {
  nFft: number;
  re: Float32Array[];
  im: Float32Array[];
}

function buildBasis(sr: number, freqs: number[]): OctaveBasis {
  const lengths = freqs.map((f) => lengthAt(sr, f));
  const nFft = nextPowerOf2(
    Math.max(...lengths.map((l) => Math.floor(l / 2) + Math.ceil(l / 2))),
  );
  const bins = nFft / 2 + 1;
  const scale = Math.sqrt(SAMPLE_RATE / sr);
  const re: Float32Array[] = [];
  const im: Float32Array[] = [];

  for (let k = 0; k < freqs.length; k++) {
    const len = lengths[k];
    const n = Math.floor(len / 2) + Math.ceil(len / 2);
    const start = Math.floor(-len / 2);
    const kr = new Float64Array(nFft);
    const ki = new Float64Array(nFft);
    const pad = Math.floor((nFft - n) / 2);
    let norm = 0;
    for (let i = 0; i < n; i++) {
      const w = 0.5 * (1 - Math.cos((2 * Math.PI * i) / n));
      const phase = (2 * Math.PI * freqs[k] * (start + i)) / sr;
      kr[pad + i] = w * Math.cos(phase);
      ki[pad + i] = w * Math.sin(phase);
      norm += Math.hypot(kr[pad + i], ki[pad + i]);
    }
    const fftNorm = len / nFft / norm;
    for (let i = 0; i < nFft; i++) {
      kr[i] *= fftNorm;
      ki[i] *= fftNorm;
    }
    fft(kr, ki);

    // librosa util.sparsify_rows(quantile=0.01)
    const mags = new Float64Array(bins);
    let total = 0;
    for (let i = 0; i < bins; i++) total += mags[i] = Math.hypot(kr[i], ki[i]);
    const sorted = Float64Array.from(mags).sort();
    let cum = 0;
    let threshold = sorted[0];
    for (let i = 0; i < bins; i++) {
      cum += sorted[i] / total;
      if (cum >= SPARSITY) {
        threshold = sorted[i];
        break;
      }
    }
    const rowRe = new Float32Array(bins);
    const rowIm = new Float32Array(bins);
    for (let i = 0; i < bins; i++) {
      if (mags[i] < threshold) continue;
      rowRe[i] = kr[i] * scale;
      rowIm[i] = ki[i] * scale;
    }
    re.push(rowRe);
    im.push(rowIm);
  }
  return { nFft, re, im };
}

const octaveBases: OctaveBasis[] = [];

function octaveResponse(
  audio: Float64Array,
  hop: number,
  basis: OctaveBasis,
): Float64Array[] {
  const { nFft } = basis;
  const bins = nFft / 2 + 1;
  const frames = 1 + Math.floor(audio.length / hop);
  const out = basis.re.map(() => new Float64Array(frames));
  const re = new Float64Array(nFft);
  const im = new Float64Array(nFft);
  for (let t = 0; t < frames; t++) {
    const start = t * hop - nFft / 2;
    for (let i = 0; i < nFft; i++) {
      const idx = start + i;
      re[i] = idx >= 0 && idx < audio.length ? audio[idx] : 0;
      im[i] = 0;
    }
    fft(re, im);
    for (let k = 0; k < basis.re.length; k++) {
      const br = basis.re[k];
      const bi = basis.im[k];
      let sr = 0;
      let si = 0;
      for (let f = 0; f < bins; f++) {
        if (br[f] === 0 && bi[f] === 0) continue;
        sr += br[f] * re[f] - bi[f] * im[f];
        si += br[f] * im[f] + bi[f] * re[f];
      }
      out[k][t] = Math.hypot(sr, si);
    }
  }
  return out;
}

function cqtMagnitude(segment: Float32Array): Float64Array[] {
  const nOctaves = Math.ceil(N_BINS / BINS_PER_OCTAVE);
  let audio: Float64Array = Float64Array.from(segment);
  let sr = SAMPLE_RATE;
  let hop = HOP;
  const rows: Float64Array[] = new Array(N_BINS);
  for (let o = 0; o < nOctaves; o++) {
    const hi = N_BINS - BINS_PER_OCTAVE * o;
    const lo = Math.max(0, hi - BINS_PER_OCTAVE);
    octaveBases[o] ??= buildBasis(sr, FREQS.slice(lo, hi));
    const resp = octaveResponse(audio, hop, octaveBases[o]);
    for (let k = lo; k < hi; k++) rows[k] = resp[k - lo];
    if (o < nOctaves - 1 && hop % 2 === 0) {
      hop /= 2;
      sr /= 2;
      audio = decimate2(audio);
    }
  }
  const frames = Math.min(...rows.map((row) => row.length));
  return rows.map((row, k) => {
    const scale = 1 / Math.sqrt(lengthAt(SAMPLE_RATE, FREQS[k]));
    const out = new Float64Array(frames);
    for (let t = 0; t < frames; t++) out[t] = row[t] * scale;
    return out;
  });
}

// ── cepstrum (log CQT, orthonormal DCT-II over frequency) ──

let dctMatrix: Float64Array | null = null;

function cepstrum(segment: Float32Array): Float32Array {
  const mag = cqtMagnitude(segment);
  const frames = mag[0].length;
  if (!dctMatrix) {
    dctMatrix = new Float64Array(N_COEFFS * N_BINS);
    for (let c = 0; c < N_COEFFS; c++) {
      const s = Math.sqrt((c === 0 ? 1 : 2) / N_BINS);
      for (let k = 0; k < N_BINS; k++)
        dctMatrix[c * N_BINS + k] =
          s * Math.cos((Math.PI * (2 * k + 1) * c) / (2 * N_BINS));
    }
  }
  const out = new Float32Array(N_COEFFS * frames);
  const logCol = new Float64Array(N_BINS);
  for (let t = 0; t < frames; t++) {
    for (let k = 0; k < N_BINS; k++) logCol[k] = Math.log(mag[k][t] + 1e-6);
    for (let c = 0; c < N_COEFFS; c++) {
      let acc = 0;
      for (let k = 0; k < N_BINS; k++) acc += dctMatrix[c * N_BINS + k] * logCol[k];
      out[c * frames + t] = acc;
    }
  }
  return out;
}

// Up to 5 ten second segments spread over the clip, skipping 5s intro/outro when long enough
function segmentStarts(length: number): number[] {
  const long = length > SEGMENT_SAMPLES + 2 * SKIP_SAMPLES;
  const start = long ? SKIP_SAMPLES : 0;
  const usable = (long ? length - SKIP_SAMPLES : length) - start;
  if (usable <= SEGMENT_SAMPLES)
    return [
      length <= SEGMENT_SAMPLES
        ? 0
        : Math.max(0, Math.floor(length / 2) - SEGMENT_SAMPLES / 2),
    ];
  const step = (usable - SEGMENT_SAMPLES) / (N_SEGMENTS - 1);
  return Array.from({ length: N_SEGMENTS }, (_, i) => start + Math.trunc(i * step));
}

export function extractCepstra(audio: Float32Array): {
  data: Float32Array;
  segments: number;
  frames: number;
} {
  const starts = segmentStarts(audio.length);
  const ceps = starts.map((s) => {
    const seg = new Float32Array(SEGMENT_SAMPLES);
    seg.set(audio.subarray(s, s + SEGMENT_SAMPLES));
    return cepstrum(seg);
  });
  const frames = ceps[0].length / N_COEFFS;
  const data = new Float32Array(ceps.length * ceps[0].length);
  ceps.forEach((c, i) => data.set(c, i * c.length));
  return { data, segments: ceps.length, frames };
}
