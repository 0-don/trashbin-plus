import { ORT_WASM_CODE } from "virtual:ort-worker-wasm";
import { i18n } from "../components/providers/providers";
import { useAiStore } from "../store/ai-store";
import { fetchMetadata, hexToBase62 } from "./metadata-utils";

const MODEL_ASSET = "sonics_5s.onnx";
const MODEL_INPUT_LENGTH = 220500;
const MODEL_LABEL = "SONICS SpecTTTra 5s";
const WASM_BINARY = "ort-wasm-simd-threaded.wasm";
const STORE_NAME = "assets";
const VERSION_KEY = "trashbin-ai-assets-version";
const HF_BASE = "https://huggingface.co/0don/trashbin-plus-ai/resolve/main";
const CORS_PROXY = "https://cors-proxy.spicetify.app";
const SAMPLE_RATE = 44100;

// ── IndexedDB helpers ─────────────────────────────────────────────

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

// ── Asset management ──────────────────────────────────────────────

async function downloadAsset(name: string): Promise<ArrayBuffer> {
  const response = await fetch(`${HF_BASE}/${name}`);
  if (!response.ok)
    throw new Error(`Failed to download ${name}: ${response.status}`);
  return response.arrayBuffer();
}

function setProgress(message: string | null): void {
  useAiStore.setState({ progress: message });
}

export async function ensureAssets(): Promise<boolean> {
  try {
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
    const versionMatch =
      remoteVersion !== null && localVersion === remoteVersion;

    const [wasmExists, modelExists] = await Promise.all([
      idbGet(WASM_BINARY),
      idbGet(MODEL_ASSET),
    ]);

    if (versionMatch && wasmExists && modelExists) {
      setProgress(i18n.t("AI_ASSETS_UP_TO_DATE"));
      return true;
    }

    if (remoteVersion === null && wasmExists && modelExists) {
      setProgress(i18n.t("AI_ASSETS_CACHED_OFFLINE"));
      return true;
    }

    if (remoteVersion === null) return false;

    const downloads: Promise<void>[] = [];
    if (!wasmExists || !versionMatch) {
      setProgress(i18n.t("AI_ASSETS_DOWNLOADING_WASM"));
      downloads.push(
        downloadAsset(WASM_BINARY).then((d) => idbPut(WASM_BINARY, d)),
      );
    }
    if (!modelExists || !versionMatch) {
      setProgress(
        i18n.t("AI_ASSETS_DOWNLOADING_MODEL", { model: MODEL_LABEL }),
      );
      downloads.push(
        downloadAsset(MODEL_ASSET).then((d) => idbPut(MODEL_ASSET, d)),
      );
    }
    await Promise.all(downloads);

    Spicetify.LocalStorage.set(VERSION_KEY, remoteVersion);
    setProgress(i18n.t("AI_ASSETS_READY"));
    return true;
  } catch (error) {
    console.error("[trashbin+] ensureAssets failed:", error);
    return false;
  }
}

// ── Worker management ──────────────────────────────────────────────

const WORKER_LOGIC = `
self.onerror = function(msg, src, line, col, err) {
  console.error("[trashbin+] worker uncaught:", msg, "at", src + ":" + line + ":" + col, err && err.stack);
  self.postMessage({ type: "init-error", error: "uncaught: " + msg });
};
self.onunhandledrejection = function(e) {
  console.error("[trashbin+] worker unhandled rejection:", e.reason, e.reason && e.reason.stack);
  self.postMessage({ type: "init-error", error: "unhandled: " + e.reason });
};

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
        console.error("[trashbin+] worker: init failed:", err, err && err.stack);
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
    .catch(function(err) {
      console.error("[trashbin+] worker: classify failed:", err, err && err.stack);
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
let engineReady = false;
let nextId = 0;
const pending = new Map<number, (prob: number | null) => void>();

window.addEventListener("beforeunload", () => disposeEngine());

export async function initEngine(): Promise<boolean> {
  try {
    const [modelExists, wasmExists] = await Promise.all([
      idbGet(MODEL_ASSET),
      idbGet(WASM_BINARY),
    ]);
    if (!modelExists || !wasmExists) return false;

    const script = ORT_WASM_CODE + "\n" + WORKER_LOGIC;
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
    worker.onerror = (e) => {
      console.error("[trashbin+] worker error:", e.message, e.filename, e.lineno, e.colno);
      for (const resolve of pending.values()) resolve(null);
      pending.clear();
    };

    const ok = await new Promise<boolean>((resolve) => {
      const handler = (e: MessageEvent) => {
        if (e.data.type === "init-done" || e.data.type === "init-error") {
          worker!.removeEventListener("message", handler);
          resolve(e.data.type === "init-done");
        }
      };
      worker!.addEventListener("message", handler);
      worker!.postMessage({
        type: "init",
        modelAssetName: MODEL_ASSET,
        wasmName: WASM_BINARY,
        inputLength: MODEL_INPUT_LENGTH,
      });
    });

    if (ok) {
      engineReady = true;
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

function classifyAudio(
  waveform: Float32Array,
  trackId?: string,
): Promise<number | null> {
  if (!worker || !engineReady) return Promise.resolve(null);
  const id = nextId++;
  const copy = new Float32Array(waveform);
  return new Promise<number | null>((resolve) => {
    pending.set(id, resolve);
    worker!.postMessage({ type: "classify", id, waveform: copy, trackId }, [
      copy.buffer,
    ]);
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
  engineReady = false;
  for (const resolve of pending.values()) resolve(null);
  pending.clear();
  nextId = 0;
  if (audioCtx && audioCtx.state !== "closed") {
    audioCtx.close();
    audioCtx = null;
  }
}

// ── Track classification ──────────────────────────────────────────

let audioCtx: AudioContext | null = null;

function getAudioCtx(): AudioContext {
  if (!audioCtx || audioCtx.state === "closed")
    audioCtx = new AudioContext({ sampleRate: SAMPLE_RATE });
  return audioCtx;
}

export async function getTrackArtists(trackUri: string): Promise<string[]> {
  try {
    const currentTrack = Spicetify.Player.data?.item;
    if (currentTrack && currentTrack.uri === trackUri && currentTrack.artists) {
      const ids: string[] = [];
      for (const artist of currentTrack.artists) {
        const artistId = (artist as any).uri?.split(":")[2];
        if (artistId) ids.push(artistId);
      }
      if (ids.length > 0) return ids;
    }

    const trackId = trackUri.split(":")[2];
    if (!trackId) return [];
    const data = await fetchMetadata("track", trackId);
    const ids: string[] = [];
    if (Array.isArray(data.artist)) {
      for (const a of data.artist) {
        if (a.gid) ids.push(hexToBase62(a.gid));
      }
    }
    return ids;
  } catch {
    return [];
  }
}

async function fetchPreviewUrl(trackUri: string): Promise<string | null> {
  const id = trackUri.split(":")[2];
  if (!id) return null;
  const res = await fetch(
    `${CORS_PROXY}/https://open.spotify.com/embed/track/${id}`,
  );
  if (!res.ok) throw new Error(`embed fetch ${res.status}`);
  const html = await res.text();
  const match = html.match(/"audioPreview":\s*\{\s*"url":\s*"([^"]+)"/);
  return match?.[1] ?? null;
}

export async function classifyTrack(
  trackUri: string,
  queuePos?: number,
  queueRemaining?: number,
  trackLabel?: string | null,
): Promise<number | null> {
  const trackId = trackUri.split(":")[2] ?? trackUri;
  const displayName = trackLabel || trackId;
  const queueTag =
    queuePos != null ? `[${queuePos}/${queuePos + queueRemaining!}] ` : "";

  if (!engineReady) return null;

  const previewUrl = await fetchPreviewUrl(trackUri);
  if (!previewUrl) {
    console.log(`[trashbin+] ${queueTag}${displayName}: no preview`);
    return null;
  }

  const response = await fetch(previewUrl);
  if (!response.ok) throw new Error(`preview fetch ${response.status}`);
  const buffer = await response.arrayBuffer();
  const decoded = await getAudioCtx().decodeAudioData(buffer);
  const waveform = decoded.getChannelData(0);
  return classifyAudio(waveform, queueTag + displayName);
}
