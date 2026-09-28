import type * as Ort from "onnxruntime-web";
import { extractCepstra, N_COEFFS } from "./dsp/cqt-cepstrum";
import { extractFakeprint, FAKEPRINT_LENGTH } from "./dsp/fakeprint";

export interface AiScore {
  fakeprint: number;
  cnn: number;
  prob: number;
}

const MAX_LOGIT = Math.log((1 - 1e-6) / 1e-6);
const clampLogit = (l: number) => Math.min(Math.max(l, -MAX_LOGIT), MAX_LOGIT);
const toLogit = (p: number) => clampLogit(Math.log(p / (1 - p)));
const sigmoid = (l: number) => 1 / (1 + Math.exp(-l));

// waveform: mono 16kHz. Mean of the two logits: agreement pushes toward 0 or 1, a split verdict lands near 0.5
export async function scoreWaveform(
  ort: typeof Ort,
  fakeprintSession: Ort.InferenceSession,
  cnnSession: Ort.InferenceSession,
  waveform: Float32Array,
): Promise<AiScore> {
  const fpOut = await fakeprintSession.run({
    fakeprint: new ort.Tensor("float32", extractFakeprint(waveform), [
      1,
      FAKEPRINT_LENGTH,
    ]),
  });
  const fakeprint = Number(fpOut.ai_probability.data[0]);

  const ceps = extractCepstra(waveform);
  const cnnOut = await cnnSession.run({
    cepstrum: new ort.Tensor("float32", ceps.data, [
      ceps.segments,
      1,
      N_COEFFS,
      ceps.frames,
    ]),
  });
  const logits = Array.from(cnnOut.logit.data, Number).sort((a, b) => a - b);
  const cnnLogit = clampLogit(logits[logits.length >> 1]);

  return {
    fakeprint,
    cnn: sigmoid(cnnLogit),
    prob: sigmoid((toLogit(fakeprint) + cnnLogit) / 2),
  };
}
