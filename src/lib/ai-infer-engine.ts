import * as ort from "onnxruntime-web";
import type { ModelConfig } from "./ai-model-config";

let session: ort.InferenceSession | null = null;
let activeConfig: ModelConfig | null = null;
let inferenceQueue = Promise.resolve<number | null>(null);

export function getActiveConfig(): ModelConfig | null {
  return activeConfig;
}

export async function initEngine(
  modelBuffer: ArrayBuffer,
  wasmBuffer: ArrayBuffer,
  config: ModelConfig,
): Promise<boolean> {
  try {
    console.log(
      `[trashbin+ AI] initEngine: model=${config.id} (${modelBuffer.byteLength}B), wasm=${wasmBuffer.byteLength}B`,
    );
    ort.env.wasm.numThreads = 1;
    (ort.env.wasm as any).wasmBinary = wasmBuffer;

    console.log("[trashbin+ AI] Creating inference session...");
    session = await ort.InferenceSession.create(modelBuffer, {
      executionProviders: ["wasm"],
    });
    activeConfig = config;

    console.log("[trashbin+ AI] Inference engine initialized");
    return true;
  } catch (error) {
    console.error("[trashbin+ AI] Failed to init engine:", error);
    return false;
  }
}

async function infer(data: Float32Array): Promise<number | null> {
  if (!session || !activeConfig) return null;

  try {
    const tensor = new ort.Tensor("float32", data, [1, data.length]);
    const results = await session.run({
      [activeConfig.inputName]: tensor,
    });
    const outputData = results[activeConfig.outputName].data as Float32Array;
    return outputData[0];
  } catch (error) {
    console.error("[trashbin+ AI] Inference error:", error);
    return null;
  }
}

export function queueInference(data: Float32Array): Promise<number | null> {
  const promise = inferenceQueue.then(
    () => infer(data),
    () => infer(data),
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
  activeConfig = null;
  inferenceQueue = Promise.resolve(null);
  console.log("[trashbin+ AI] Engine disposed");
}
