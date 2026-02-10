import * as ort from "onnxruntime-web";

export const SAMPLING_RATE = 44100;
export const MAX_TIME = 5;
export const INPUT_LENGTH = SAMPLING_RATE * MAX_TIME; // 220500

let session: ort.InferenceSession | null = null;
let inferenceQueue = Promise.resolve<number | null>(null);

export async function initEngine(
  modelBuffer: ArrayBuffer,
  wasmBuffer: ArrayBuffer,
): Promise<boolean> {
  try {
    console.log(`[trashbin+ AI] initEngine: model=${modelBuffer.byteLength}B, wasm=${wasmBuffer.byteLength}B`);
    ort.env.wasm.numThreads = 1;
    (ort.env.wasm as any).wasmBinary = wasmBuffer;

    console.log("[trashbin+ AI] Creating inference session...");
    session = await ort.InferenceSession.create(modelBuffer, {
      executionProviders: ["wasm"],
    });

    console.log("[trashbin+ AI] Inference engine initialized");
    return true;
  } catch (error) {
    console.error("[trashbin+ AI] Failed to init engine:", error);
    return false;
  }
}

async function infer(audioData: Float32Array): Promise<number | null> {
  if (!session) return null;

  try {
    const tensor = new ort.Tensor("float32", audioData, [1, INPUT_LENGTH]);
    const results = await session.run({ audio: tensor });
    const outputData = results.prob.data as Float32Array;
    return Array.from(outputData)[0];
  } catch (error) {
    console.error("[trashbin+ AI] Inference error:", error);
    return null;
  }
}

export function queueInference(audioData: Float32Array): Promise<number | null> {
  const promise = inferenceQueue.then(
    () => infer(audioData),
    () => infer(audioData),
  );
  inferenceQueue = promise.then(
    () => null,
    () => null,
  );
  return promise;
}

export function disposeEngine(): void {
  if (session) {
    session.release();
    session = null;
  }
  inferenceQueue = Promise.resolve(null);
  console.log("[trashbin+ AI] Engine disposed");
}
