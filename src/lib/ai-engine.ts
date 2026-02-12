import { ORT_CODE } from "virtual:ort-worker-ort";

export type ModelId = "sonics-5s" | "sonics-120s";
export const DEFAULT_MODEL: ModelId = "sonics-5s";
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

    let remoteVersion: string | null = null;
    try {
      const versionRes = await fetch(`${HF_BASE}/version.json`);
      if (versionRes.ok) {
        remoteVersion = (await versionRes.json()).version;
      }
    } catch {
      // version check failed, will try local assets
    }

    const localVersion = Spicetify.LocalStorage.get(VERSION_KEY);
    const versionMatch = remoteVersion !== null && localVersion === remoteVersion;

    const [wasmExists, modelExists] = await Promise.all([
      idbGet(WASM_NAME),
      idbGet(model.assetName),
    ]);

    if (versionMatch && wasmExists && modelExists) {
      onProgress?.("Assets up to date");
      return true;
    }

    // If version check failed but local assets exist, use them offline
    if (remoteVersion === null && wasmExists && modelExists) {
      onProgress?.("Using cached assets (offline)");
      return true;
    }

    // Cannot download without version info
    if (remoteVersion === null) return false;

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
    console.error("[trashbin+] ensureAssets failed:", error);
    return false;
  }
}

// ── Worker management ──────────────────────────────────────────────

const WORKER_LOGIC = `
var STORE_NAME = "assets";
var dbPromise = null;

function getDB() {
  if (!dbPromise) {
    dbPromise = new Promise(function(resolve, reject) {
      var req = indexedDB.open("trashbin-ai", 1);
      req.onupgradeneeded = function() {
        if (!req.result.objectStoreNames.contains(STORE_NAME))
          req.result.createObjectStore(STORE_NAME, { keyPath: "name" });
      };
      req.onsuccess = function() { resolve(req.result); };
      req.onerror = function() { reject(req.error); };
    });
  }
  return dbPromise;
}

function idbGet(name) {
  return getDB().then(function(db) {
    return new Promise(function(resolve, reject) {
      var req = db.transaction(STORE_NAME, "readonly").objectStore(STORE_NAME).get(name);
      req.onsuccess = function() { resolve(req.result ? req.result.data : null); };
      req.onerror = function() { reject(req.error); };
    });
  });
}

function splitChunks(waveform, chunkLen) {
  var chunks = [];
  var full = Math.floor(waveform.length / chunkLen);
  for (var i = 0; i < full; i++) chunks.push(waveform.slice(i * chunkLen, (i + 1) * chunkLen));
  var rem = waveform.length % chunkLen;
  if (rem > 0 && rem >= chunkLen / 2) {
    var padded = new Float32Array(chunkLen);
    padded.set(waveform.slice(full * chunkLen));
    chunks.push(padded);
  }
  if (chunks.length === 0) {
    var p = new Float32Array(chunkLen);
    p.set(waveform, Math.floor((chunkLen - waveform.length) / 2));
    chunks.push(p);
  }
  return chunks;
}

var session = null;
var inputLength = 0;

self.onmessage = function(e) {
  var msg = e.data;

  if (msg.type === "init") {
    inputLength = msg.inputLength;
    Promise.all([idbGet(msg.modelAssetName), idbGet(msg.wasmName)])
      .then(function(buffers) {
        if (!buffers[0] || !buffers[1]) {
          self.postMessage({ type: "init-error", error: "Assets not found in IndexedDB" });
          return;
        }
        ort.env.wasm.numThreads = 1;
        ort.env.wasm.wasmBinary = buffers[1];
        return ort.InferenceSession.create(buffers[0], {
          executionProviders: ["wasm"],
        }).then(function(s) {
          session = s;
          console.log("[trashbin+] worker: ready");
          self.postMessage({ type: "init-done" });
        });
      })
      .catch(function(err) {
        console.error("[trashbin+] worker: init failed:", err);
        self.postMessage({ type: "init-error", error: String(err) });
      });
  }

  else if (msg.type === "classify") {
    if (!session) {
      self.postMessage({ type: "classify-done", id: msg.id, prob: null });
      return;
    }
    var t0 = performance.now();
    var chunks = splitChunks(msg.waveform, inputLength);
    var chain = Promise.resolve();
    var probs = [];
    chunks.forEach(function(chunk) {
      chain = chain.then(function() {
        var tensor = new ort.Tensor("float32", chunk, [1, chunk.length]);
        return session.run({ audio: tensor }).then(function(r) {
          probs.push(r["prob"].data[0]);
        });
      });
    });
    chain.then(function() {
      if (probs.length === 0) return null;
      var sum = 0;
      for (var i = 0; i < probs.length; i++) sum += probs[i];
      return sum / probs.length;
    })
    .then(function(prob) {
      var ms = (performance.now() - t0).toFixed(0);
      console.log("[trashbin+] " + (msg.trackId || "?") + ": " + chunks.length + " chunks, " + ms + "ms, prob=" + (prob !== null ? prob.toFixed(4) : "null"));
      self.postMessage({ type: "classify-done", id: msg.id, prob: prob });
    })
    .catch(function() {
      self.postMessage({ type: "classify-done", id: msg.id, prob: null });
    });
  }

  else if (msg.type === "dispose") {
    if (session) { session.release(); session = null; }
    self.close();
  }
};
`;

let worker: Worker | null = null;
let workerBlobUrl: string | null = null;
export let activeModelId: ModelId | null = null;
let nextId = 0;
const pending = new Map<number, (prob: number | null) => void>();

window.addEventListener("beforeunload", () => disposeEngine());

export async function initEngine(modelId: ModelId): Promise<boolean> {
  try {
    const model = MODELS[modelId];

    const [modelExists, wasmExists] = await Promise.all([
      idbGet(model.assetName),
      idbGet(WASM_NAME),
    ]);
    if (!modelExists || !wasmExists) return false;

    const script = ORT_CODE + "\n" + WORKER_LOGIC;
    const blob = new Blob([script], { type: "application/javascript" });
    workerBlobUrl = URL.createObjectURL(blob);
    worker = new Worker(workerBlobUrl);

    worker.onmessage = (e: MessageEvent) => {
      const msg = e.data;
      if (msg.type === "classify-done") {
        const resolve = pending.get(msg.id);
        if (resolve) {
          pending.delete(msg.id);
          resolve(msg.prob);
        }
      }
    };
    worker.onerror = () => {
      for (const resolve of pending.values()) resolve(null);
      pending.clear();
    };

    const initResult = await new Promise<boolean>((resolve) => {
      const handler = (e: MessageEvent) => {
        if (e.data.type === "init-done") {
          worker!.removeEventListener("message", handler);
          resolve(true);
        } else if (e.data.type === "init-error") {
          worker!.removeEventListener("message", handler);
          resolve(false);
        }
      };
      worker!.addEventListener("message", handler);
      worker!.postMessage({
        type: "init",
        modelAssetName: model.assetName,
        wasmName: WASM_NAME,
        inputLength: model.inputLength,
      });
    });

    if (initResult) {
      activeModelId = modelId;
      return true;
    }

    disposeEngine();
    return false;
  } catch (error) {
    console.error("[trashbin+] initEngine failed:", error);
    disposeEngine();
    return false;
  }
}

export function classifyAudio(waveform: Float32Array, trackId?: string): Promise<number | null> {
  if (!worker || !activeModelId) return Promise.resolve(null);
  const id = nextId++;
  const copy = new Float32Array(waveform);
  return new Promise<number | null>((resolve) => {
    pending.set(id, resolve);
    worker!.postMessage({ type: "classify", id, waveform: copy, trackId }, [copy.buffer]);
  });
}

export function disposeEngine(): void {
  if (worker) {
    worker.postMessage({ type: "dispose" });
    worker.terminate();
    worker = null;
  }
  if (workerBlobUrl) {
    URL.revokeObjectURL(workerBlobUrl);
    workerBlobUrl = null;
  }
  activeModelId = null;
  for (const resolve of pending.values()) resolve(null);
  pending.clear();
  nextId = 0;
}
