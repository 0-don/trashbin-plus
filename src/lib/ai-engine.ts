import { AI_WORKER_CODE } from "virtual:ai-worker";
import { ORT_VERSION, ORT_WASM_CODE } from "virtual:ort-worker-wasm";
import { i18n } from "../components/providers/providers";
import { useAiStore } from "../store/ai-store";
import type { WorkerRequest, WorkerResponse } from "./ai-worker";
import { AI_SAMPLE_RATE } from "./constants";
import { fetchMetadata, hexToBase62 } from "./metadata-utils";

const WASM_BINARY = `ort-wasm-simd-threaded-${ORT_VERSION}.wasm`;
const WASM_URL = `https://cdn.jsdelivr.net/npm/onnxruntime-web@${ORT_VERSION}/dist/ort-wasm-simd-threaded.wasm`;
// trained in ai/, a new version ships under a new file name so old installs keep theirs
const MODEL_ASSET = "detector-mn10-v6.onnx";
const MODEL_URL = `https://huggingface.co/0don/trashbin-plus-ai/resolve/main/${MODEL_ASSET}`;
const MODEL_LABEL = "AI detector v6";
const STORE_NAME = "assets";
const LEGACY_VERSION_KEY = "trashbin-ai-assets-version";
const CORS_PROXY = "https://cors-proxy.spicetify.app";

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

// Drops older ORT runtimes and models, including the retired 85MB SONICS model
async function deleteStaleAssets(): Promise<void> {
  const db = await getDB();
  const store = db
    .transaction(STORE_NAME, "readwrite")
    .objectStore(STORE_NAME);
  const req = store.getAllKeys();
  await new Promise<void>((resolve, reject) => {
    req.onsuccess = () => {
      for (const key of req.result)
        if (key !== WASM_BINARY && key !== MODEL_ASSET) store.delete(key);
      resolve();
    };
    req.onerror = () => reject(req.error);
  });
  Spicetify.LocalStorage.remove(LEGACY_VERSION_KEY);
}

// ── Asset management ──────────────────────────────────────────────

function setProgress(message: string | null): void {
  useAiStore.setState({ progress: message });
}

async function download(name: string, url: string, progress: string) {
  if (await idbGet(name)) return;
  setProgress(progress);
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to download ${url}: ${response.status}`);
  await idbPut(name, await response.arrayBuffer());
}

export async function ensureAssets(): Promise<boolean> {
  try {
    await download(WASM_BINARY, WASM_URL, i18n.t("AI_ASSETS_DOWNLOADING_WASM"));
    await download(
      MODEL_ASSET,
      MODEL_URL,
      i18n.t("AI_ASSETS_DOWNLOADING_MODEL", { model: MODEL_LABEL }),
    );
    await deleteStaleAssets();
    return true;
  } catch (error) {
    console.error("[trashbin+] ensureAssets failed:", error);
    return false;
  }
}

// ── Worker management ──────────────────────────────────────────────

let worker: Worker | null = null;
let workerBlobUrl: string | null = null;
let engineReady = false;
let nextId = 0;
const pending = new Map<number, (prob: number | null) => void>();

window.addEventListener("beforeunload", () => disposeEngine());

function post(target: Worker, msg: WorkerRequest, transfer: Transferable[] = []) {
  target.postMessage(msg, transfer);
}

export async function initEngine(): Promise<boolean> {
  try {
    const [wasm, model] = await Promise.all([idbGet(WASM_BINARY), idbGet(MODEL_ASSET)]);
    if (!wasm || !model) return false;

    const script = ORT_WASM_CODE + "\n" + AI_WORKER_CODE;
    const blob = new Blob([script], { type: "application/javascript" });
    workerBlobUrl = URL.createObjectURL(blob);
    const w = new Worker(workerBlobUrl);
    worker = w;

    w.onerror = () => {
      for (const resolve of pending.values()) resolve(null);
      pending.clear();
    };

    const ok = await new Promise<boolean>((resolve) => {
      w.onmessage = (e: MessageEvent<WorkerResponse>) => {
        const msg = e.data;
        if (msg.type === "classify-done") {
          pending.get(msg.id)?.(msg.prob);
          pending.delete(msg.id);
        } else {
          resolve(msg.type === "init-done");
        }
      };
      post(w, { type: "init", wasm, model }, [wasm, model]);
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
  label: string,
): Promise<number | null> {
  const w = worker;
  if (!w || !engineReady) return Promise.resolve(null);
  const id = nextId++;
  return new Promise<number | null>((resolve) => {
    pending.set(id, resolve);
    post(w, { type: "classify", id, waveform, label }, [waveform.buffer]);
  });
}

export function disposeEngine(): void {
  if (worker) {
    post(worker, { type: "dispose" });
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
    audioCtx = new AudioContext({ sampleRate: AI_SAMPLE_RATE });
  return audioCtx;
}

function toMono(buffer: AudioBuffer): Float32Array {
  const mono = new Float32Array(buffer.length);
  for (let c = 0; c < buffer.numberOfChannels; c++) {
    const data = buffer.getChannelData(c);
    for (let i = 0; i < mono.length; i++)
      mono[i] += data[i] / buffer.numberOfChannels;
  }
  return mono;
}

export interface TrackInfo {
  artists: string[];
  year: number | null;
  isrc: string | null;
}

// throws when Spotify refuses the lookup (it throttles bursts); the queue retries instead of scoring blind
export async function getTrackInfo(trackUri: string): Promise<TrackInfo> {
  const trackId = trackUri.split(":")[2];
  if (!trackId) return { artists: [], year: null, isrc: null };
  const data = await fetchMetadata("track", trackId);
  const artists: string[] = Array.isArray(data.artist)
    ? data.artist.filter((a: { gid?: string }) => a.gid).map((a: { gid: string }) => hexToBase62(a.gid))
    : [];
  const isrc = Array.isArray(data.external_id)
    ? (data.external_id.find((e: { type?: string }) => e.type === "isrc")?.id ?? null)
    : null;
  return { artists, year: data.album?.date?.year ?? null, isrc };
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
  return classifyAudio(toMono(decoded), queueTag + displayName);
}
