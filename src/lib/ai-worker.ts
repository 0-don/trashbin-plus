import type * as Ort from "onnxruntime-web";
import { AI_SAMPLE_RATE } from "./constants";

declare const ort: typeof Ort;

const WINDOW = 10 * AI_SAMPLE_RATE;

export type WorkerRequest =
  | { type: "init"; wasm: ArrayBuffer; model: ArrayBuffer }
  | { type: "classify"; id: number; waveform: Float32Array; label: string }
  | { type: "dispose" };

export type WorkerResponse =
  | { type: "init-done" }
  | { type: "init-error"; error: string }
  | { type: "classify-done"; id: number; prob: number | null };

let session: Ort.InferenceSession | null = null;

const reply = (msg: WorkerResponse) => self.postMessage(msg);

async function init(wasm: ArrayBuffer, model: ArrayBuffer) {
  ort.env.wasm.numThreads = 1;
  ort.env.wasm.wasmBinary = wasm;
  session = await ort.InferenceSession.create(new Uint8Array(model));
}

// same windows as ai/train/detector.py: start, middle and end 10s of the preview, logits averaged
function windows(length: number): number[] {
  if (length <= WINDOW) return [0];
  return [...new Set([0, Math.floor((length - WINDOW) / 2), length - WINDOW])];
}

async function classify(waveform: Float32Array, label: string): Promise<number> {
  if (!session) throw new Error("not initialized");
  const t0 = performance.now();
  const starts = windows(waveform.length);
  const batch = new Float32Array(starts.length * WINDOW);
  starts.forEach((start, i) =>
    batch.set(waveform.subarray(start, start + WINDOW), i * WINDOW),
  );
  const out = await session.run({
    waveform: new ort.Tensor("float32", batch, [starts.length, WINDOW]),
  });
  const logits = Array.from(out.logit.data, Number);
  const prob = 1 / (1 + Math.exp(-logits.reduce((a, b) => a + b, 0) / logits.length));
  console.log(
    `[trashbin+] ${label}: ${(performance.now() - t0).toFixed(0)}ms, prob=${prob.toFixed(4)}`,
  );
  return prob;
}

self.onmessage = async (e: MessageEvent<WorkerRequest>) => {
  const msg = e.data;
  if (msg.type === "init") {
    try {
      await init(msg.wasm, msg.model);
      reply({ type: "init-done" });
    } catch (err) {
      console.error("[trashbin+] worker: init failed:", err);
      reply({ type: "init-error", error: String(err) });
    }
  } else if (msg.type === "classify") {
    try {
      reply({
        type: "classify-done",
        id: msg.id,
        prob: await classify(msg.waveform, msg.label),
      });
    } catch (err) {
      console.error("[trashbin+] worker: classify failed:", err);
      reply({ type: "classify-done", id: msg.id, prob: null });
    }
  } else {
    session?.release();
    self.close();
  }
};
