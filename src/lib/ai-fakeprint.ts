import { computePowerSpectrum, N_FFT, SPECTRUM_SIZE } from "./ai-fft";

const SAMPLE_RATE = 16000;
const HOP_SIZE = N_FFT / 2; // 4096
const FREQ_MIN = 1000;
const FREQ_MAX = 8000;
const HULL_AREA = 10;
const MAX_DB = 5;
const MIN_DB = -45;

// Pre-compute frequency bin indices for the 1000-8000 Hz range
// freq[k] = k * SAMPLE_RATE / N_FFT
// bin for 1000 Hz: 1000 / (16000/8192) = 512
// bin for 8000 Hz: 8000 / (16000/8192) = 4096
const BIN_START = Math.ceil((FREQ_MIN * N_FFT) / SAMPLE_RATE); // 512
const BIN_END = Math.floor((FREQ_MAX * N_FFT) / SAMPLE_RATE); // 4096
const FAKEPRINT_SIZE = BIN_END - BIN_START + 1; // 3585

/**
 * Extract a "fakeprint" feature vector from audio samples at 16kHz.
 * Matches the Python reference: average power spectrum → dB → freq filter → hull subtraction → normalize.
 */
export function extractFakeprint(samples: Float32Array): Float32Array {
  // 1. Compute average power spectrum across all frames
  const avgSpectrum = computeAveragePowerSpectrum(samples);

  // 2. Convert to dB scale
  const spectrumDb = new Float32Array(SPECTRUM_SIZE);
  for (let i = 0; i < SPECTRUM_SIZE; i++) {
    spectrumDb[i] = 10 * Math.log10(Math.max(avgSpectrum[i], 1e-10));
  }

  // 3. Filter to frequency range (1000-8000 Hz)
  const filtered = spectrumDb.slice(BIN_START, BIN_END + 1);

  // 4. Compute lower hull (sliding window minimum)
  const hull = minimumFilter1d(filtered, HULL_AREA);

  // 5. Clip hull to min_db
  for (let i = 0; i < hull.length; i++) {
    hull[i] = Math.max(hull[i], MIN_DB);
  }

  // 6. Subtract hull and clip residue
  const residue = new Float32Array(FAKEPRINT_SIZE);
  for (let i = 0; i < FAKEPRINT_SIZE; i++) {
    residue[i] = Math.min(Math.max(filtered[i] - hull[i], 0), MAX_DB);
  }

  // 7. Normalize to [0, 1]
  let maxVal = 0;
  for (let i = 0; i < FAKEPRINT_SIZE; i++) {
    if (residue[i] > maxVal) maxVal = residue[i];
  }
  maxVal += 1e-6; // avoid division by zero

  const fakeprint = new Float32Array(FAKEPRINT_SIZE);
  for (let i = 0; i < FAKEPRINT_SIZE; i++) {
    fakeprint[i] = residue[i] / maxVal;
  }

  return fakeprint;
}

/**
 * Compute the average power spectrum across all STFT frames.
 */
function computeAveragePowerSpectrum(
  samples: Float32Array,
): Float32Array {
  const avgSpectrum = new Float32Array(SPECTRUM_SIZE);
  let frameCount = 0;

  const frame = new Float32Array(N_FFT);

  for (let start = 0; start + N_FFT <= samples.length; start += HOP_SIZE) {
    // Copy frame from samples
    frame.set(samples.subarray(start, start + N_FFT));

    // Compute power spectrum (Hann windowing is applied inside computePowerSpectrum)
    const power = computePowerSpectrum(frame);

    // Accumulate
    for (let k = 0; k < SPECTRUM_SIZE; k++) {
      avgSpectrum[k] += power[k];
    }
    frameCount++;
  }

  // Average
  if (frameCount > 0) {
    for (let k = 0; k < SPECTRUM_SIZE; k++) {
      avgSpectrum[k] /= frameCount;
    }
  }

  return avgSpectrum;
}

/**
 * Sliding window minimum filter matching scipy.ndimage.minimum_filter1d with mode='nearest'.
 */
function minimumFilter1d(data: Float32Array, size: number): Float32Array {
  const result = new Float32Array(data.length);
  const halfSize = Math.floor(size / 2);

  for (let i = 0; i < data.length; i++) {
    let min = Infinity;
    const lo = Math.max(0, i - halfSize);
    const hi = Math.min(data.length - 1, i + halfSize);
    for (let j = lo; j <= hi; j++) {
      if (data[j] < min) min = data[j];
    }
    result[i] = min;
  }

  return result;
}

export { FAKEPRINT_SIZE };
