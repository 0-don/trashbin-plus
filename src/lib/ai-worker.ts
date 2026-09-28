import type * as Ort from "onnxruntime-web";
import { CQT_CNN_MODEL, FAKEPRINT_MODEL } from "virtual:ai-models";
import { scoreWaveform } from "./ai-score";

declare const ort: typeof Ort;

export type WorkerRequest =
  | { type: "init"; wasm: ArrayBuffer }
  | { type: "classify"; id: number; waveform: Float32Array; label: string }
  | { type: "dispose" };

export type WorkerResponse =
  | { type: "init-done" }
  | { type: "init-error"; error: string }
  | { type: "classify-done"; id: number; prob: number | null };

let fakeprintSession: Ort.InferenceSession | null = null;
let cnnSession: Ort.InferenceSession | null = null;

const reply = (msg: WorkerResponse) => self.postMessage(msg);
const decode = (b64: string) => Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));

async function init(wasm: ArrayBuffer) {
  ort.env.wasm.numThreads = 1;
  ort.env.wasm.wasmBinary = wasm;
  [fakeprintSession, cnnSession] = await Promise.all([
    ort.InferenceSession.create(decode(FAKEPRINT_MODEL)),
    ort.InferenceSession.create(decode(CQT_CNN_MODEL)),
  ]);
}

async function classify(waveform: Float32Array, label: string): Promise<number> {
  if (!fakeprintSession || !cnnSession) throw new Error("not initialized");
  const t0 = performance.now();
  const score = await scoreWaveform(ort, fakeprintSession, cnnSession, waveform);
  console.log(
    `[trashbin+] ${label}: ${(performance.now() - t0).toFixed(0)}ms, fakeprint=${score.fakeprint.toFixed(4)}, cnn=${score.cnn.toFixed(4)}, prob=${score.prob.toFixed(4)}`,
  );
  return score.prob;
}

self.onmessage = async (e: MessageEvent<WorkerRequest>) => {
  const msg = e.data;
  if (msg.type === "init") {
    try {
      await init(msg.wasm);
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
    fakeprintSession?.release();
    cnnSession?.release();
    self.close();
  }
};
