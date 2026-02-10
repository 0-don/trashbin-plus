const N_FFT = 8192;
const HALF_FFT = N_FFT / 2;
const SPECTRUM_SIZE = HALF_FFT + 1; // 4097

// Pre-compute Hann window
const HANN = new Float32Array(N_FFT);
for (let i = 0; i < N_FFT; i++) {
  HANN[i] = 0.5 * (1 - Math.cos((2 * Math.PI * i) / (N_FFT - 1)));
}

// Pre-compute bit-reversal table for N_FFT
const BIT_REV = new Uint32Array(N_FFT);
{
  const bits = Math.log2(N_FFT);
  for (let i = 0; i < N_FFT; i++) {
    let rev = 0;
    let val = i;
    for (let b = 0; b < bits; b++) {
      rev = (rev << 1) | (val & 1);
      val >>= 1;
    }
    BIT_REV[i] = rev;
  }
}

// Pre-compute twiddle factors (cos/sin for butterfly operations)
const COS_TABLE = new Float64Array(HALF_FFT);
const SIN_TABLE = new Float64Array(HALF_FFT);
{
  for (let i = 0; i < HALF_FFT; i++) {
    const angle = (-2 * Math.PI * i) / N_FFT;
    COS_TABLE[i] = Math.cos(angle);
    SIN_TABLE[i] = Math.sin(angle);
  }
}

/**
 * Compute power spectrum of a windowed frame using radix-2 Cooley-Tukey FFT.
 * Input: raw audio frame (N_FFT samples, will be Hann-windowed internally).
 * Output: Float32Array of length 4097 (power = re^2 + im^2 for bins 0..N_FFT/2).
 */
export function computePowerSpectrum(frame: Float32Array): Float32Array {
  // Apply Hann window + bit-reversal permutation into interleaved complex array
  const re = new Float64Array(N_FFT);
  const im = new Float64Array(N_FFT);

  for (let i = 0; i < N_FFT; i++) {
    re[BIT_REV[i]] = frame[i] * HANN[i];
  }

  // Cooley-Tukey butterfly
  for (let size = 2; size <= N_FFT; size *= 2) {
    const halfSize = size / 2;
    const step = N_FFT / size;

    for (let i = 0; i < N_FFT; i += size) {
      for (let j = 0; j < halfSize; j++) {
        const twIdx = j * step;
        const cos = COS_TABLE[twIdx];
        const sin = SIN_TABLE[twIdx];

        const evenIdx = i + j;
        const oddIdx = i + j + halfSize;

        const tRe = cos * re[oddIdx] - sin * im[oddIdx];
        const tIm = sin * re[oddIdx] + cos * im[oddIdx];

        re[oddIdx] = re[evenIdx] - tRe;
        im[oddIdx] = im[evenIdx] - tIm;
        re[evenIdx] += tRe;
        im[evenIdx] += tIm;
      }
    }
  }

  // Extract power spectrum (magnitude squared) for bins 0..N_FFT/2
  const power = new Float32Array(SPECTRUM_SIZE);
  for (let k = 0; k < SPECTRUM_SIZE; k++) {
    power[k] = re[k] * re[k] + im[k] * im[k];
  }

  return power;
}

export { N_FFT, HALF_FFT, SPECTRUM_SIZE, HANN };
