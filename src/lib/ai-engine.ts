import * as ort from "onnxruntime-web";

export type ModelId = "sonics-5s" | "sonics-120s";
export const DEFAULT_MODEL: ModelId = "sonics-5s";
export const SAMPLE_RATE = 44100;

export const MODELS = {
  "sonics-5s": {
    label: "SONICS SpecTTTra 5s",
    assetName: "sonics_5s.onnx",
    inputLength: 220500,
  },
  "sonics-120s": {
    label: "SONICS SpecTTTra 120s",
    assetName: "sonics_120s.onnx",
    inputLength: 5292000,
  },
};

const WASM_NAME = "ort-wasm-simd-threaded.wasm";
const STORE_NAME = "assets";
const VERSION_KEY = "trashbin-ai-assets-version";
const HF_BASE = "https://huggingface.co/0don/trashbin-plus-ai/resolve/main";

let dbPromise: Promise<IDBDatabase> | null = null;

function getDB(): Promise<IDBDatabase> {
  if (!dbPromise) {
    dbPromise = new Promise((resolve, reject) => {
      const req = indexedDB.open("trashbin-ai", 1);
      req.onupgradeneeded = () => {
        if (!req.result.objectStoreNames.contains(STORE_NAME))
          req.result.createObjectStore(STORE_NAME, { keyPath: "name" });
      };
      req.onsuccess = () => {
        req.result.onversionchange = () => {
          req.result.close();
          dbPromise = null;
        };
        resolve(req.result);
      };
      req.onerror = () => reject(req.error);
    });
  }
  return dbPromise;
}

async function idbGet(name: string): Promise<ArrayBuffer | null> {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const req = db
      .transaction(STORE_NAME, "readonly")
      .objectStore(STORE_NAME)
      .get(name);
    req.onsuccess = () => resolve(req.result?.data ?? null);
    req.onerror = () => reject(req.error);
  });
}

async function idbPut(name: string, data: ArrayBuffer): Promise<void> {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const req = db
      .transaction(STORE_NAME, "readwrite")
      .objectStore(STORE_NAME)
      .put({ name, data });
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

async function downloadAsset(name: string): Promise<ArrayBuffer> {
  const response = await fetch(`${HF_BASE}/${name}`);
  if (!response.ok)
    throw new Error(`Failed to download ${name}: ${response.status}`);
  return response.arrayBuffer();
}

export async function ensureAssets(
  modelId: ModelId,
  onProgress?: (message: string) => void,
): Promise<boolean> {
  try {
    const model = MODELS[modelId];

    const versionRes = await fetch(`${HF_BASE}/version.json`);
    if (!versionRes.ok) return false;
    const remoteVersion: string = (await versionRes.json()).version;

    const localVersion = Spicetify.LocalStorage.get(VERSION_KEY);
    const versionMatch = localVersion === remoteVersion;

    const [wasmExists, modelExists] = await Promise.all([
      idbGet(WASM_NAME),
      idbGet(model.assetName),
    ]);

    if (versionMatch && wasmExists && modelExists) {
      onProgress?.("Assets up to date");
      return true;
    }

    const downloads: Promise<void>[] = [];
    if (!wasmExists || !versionMatch) {
      onProgress?.("Downloading WASM runtime...");
      downloads.push(
        downloadAsset(WASM_NAME).then((d) => idbPut(WASM_NAME, d)),
      );
    }
    if (!modelExists || !versionMatch) {
      onProgress?.(`Downloading ${model.label}...`);
      downloads.push(
        downloadAsset(model.assetName).then((d) => idbPut(model.assetName, d)),
      );
    }
    await Promise.all(downloads);

    Spicetify.LocalStorage.set(VERSION_KEY, remoteVersion);
    onProgress?.("Assets ready");
    return true;
  } catch (error) {
    // asset load failed
    return false;
  }
}

let session: ort.InferenceSession | null = null;
export let activeModelId: ModelId | null = null;
let inferenceQueue = Promise.resolve<number | null>(null);

export async function initEngine(modelId: ModelId): Promise<boolean> {
  try {
    const model = MODELS[modelId];
    const [modelBuffer, wasmBuffer] = await Promise.all([
      idbGet(model.assetName),
      idbGet(WASM_NAME),
    ]);
    if (!modelBuffer || !wasmBuffer) return false;

    ort.env.wasm.numThreads = 1;
    (ort.env.wasm as any).wasmBinary = wasmBuffer;

    session = await ort.InferenceSession.create(modelBuffer, {
      executionProviders: ["wasm"],
    });
    activeModelId = modelId;
    return true;
  } catch (error) {
    // init failed
    return false;
  }
}

export function queueInference(data: Float32Array): Promise<number | null> {
  const infer = async (): Promise<number | null> => {
    if (!session || !activeModelId) return null;
    try {
      const tensor = new ort.Tensor("float32", data, [1, data.length]);
      const results = await session.run({ audio: tensor });
      return (results["prob"].data as Float32Array)[0];
    } catch (error) {
      // inference failed
      return null;
    }
  };

  const promise = inferenceQueue.then(infer, infer);
  inferenceQueue = promise.then(
    () => null,
    () => null,
  );
  return promise;
}

export function disposeEngine(): void {
  session?.release();
  session = null;
  activeModelId = null;
  inferenceQueue = Promise.resolve(null);
}
