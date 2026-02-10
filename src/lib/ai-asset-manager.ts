const DB_NAME = "trashbin-ai";
const STORE_NAME = "assets";
const DB_VERSION = 1;
const VERSION_STORAGE_KEY = "trashbin-ai-assets-version";
const HF_BASE =
  "https://huggingface.co/0don/trashbin-plus-ai/resolve/main";

export const ASSET_NAMES = {
  SONICS_MODEL: "sonics_model.onnx",
  FAKEPRINT_MODEL: "ai_music_detector.onnx",
  WASM: "ort-wasm-simd-threaded.wasm",
  VERSION: "version.json",
} as const;

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "name" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function getAsset(name: string): Promise<ArrayBuffer | null> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME);
    const request = store.get(name);
    request.onsuccess = () => {
      db.close();
      resolve(request.result?.data ?? null);
    };
    request.onerror = () => {
      db.close();
      reject(request.error);
    };
  });
}

async function storeAsset(
  name: string,
  data: ArrayBuffer,
  version: string,
): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);
    const request = store.put({ name, data, version });
    request.onsuccess = () => {
      db.close();
      resolve();
    };
    request.onerror = () => {
      db.close();
      reject(request.error);
    };
  });
}

async function downloadAsset(name: string): Promise<ArrayBuffer> {
  const url = `${HF_BASE}/${name}`;
  console.log(`[trashbin+ AI] Downloading ${name}: ${url}`);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download ${name}: ${response.status}`);
  }
  return response.arrayBuffer();
}

async function fetchRemoteVersion(): Promise<string | null> {
  try {
    const url = `${HF_BASE}/${ASSET_NAMES.VERSION}`;
    console.log(`[trashbin+ AI] Fetching version: ${url}`);
    const response = await fetch(url);
    if (!response.ok) return null;
    const data = await response.json();
    return data.version ?? null;
  } catch (error) {
    console.error("[trashbin+ AI] Failed to fetch remote version:", error);
    return null;
  }
}

function getStoredVersion(): string | null {
  return Spicetify.LocalStorage.get(VERSION_STORAGE_KEY) ?? null;
}

function setStoredVersion(version: string): void {
  Spicetify.LocalStorage.set(VERSION_STORAGE_KEY, version);
}

export async function ensureAssets(
  onProgress?: (message: string) => void,
): Promise<boolean> {
  try {
    console.log("[trashbin+ AI] Fetching remote version...");
    const remoteVersion = await fetchRemoteVersion();
    if (!remoteVersion) {
      console.error("[trashbin+ AI] Could not fetch remote version");
      return false;
    }
    console.log(`[trashbin+ AI] Remote version: ${remoteVersion}`);

    const localVersion = getStoredVersion();
    console.log(`[trashbin+ AI] Local version: ${localVersion}`);

    // Check if all assets exist in IndexedDB
    const sonicsExists = await getAsset(ASSET_NAMES.SONICS_MODEL);
    const fakeprintExists = await getAsset(ASSET_NAMES.FAKEPRINT_MODEL);
    const wasmExists = await getAsset(ASSET_NAMES.WASM);
    console.log(
      `[trashbin+ AI] IndexedDB - sonics: ${!!sonicsExists} (${sonicsExists?.byteLength ?? 0}B), fakeprint: ${!!fakeprintExists} (${fakeprintExists?.byteLength ?? 0}B), wasm: ${!!wasmExists} (${wasmExists?.byteLength ?? 0}B)`,
    );

    if (
      localVersion === remoteVersion &&
      sonicsExists &&
      fakeprintExists &&
      wasmExists
    ) {
      onProgress?.("Assets up to date");
      return true;
    }

    // Download all required assets
    onProgress?.("Downloading WASM runtime...");
    const wasmData = await downloadAsset(ASSET_NAMES.WASM);
    console.log(`[trashbin+ AI] WASM downloaded: ${wasmData.byteLength} bytes`);
    await storeAsset(ASSET_NAMES.WASM, wasmData, remoteVersion);

    onProgress?.("Downloading SONICS model...");
    const sonicsData = await downloadAsset(ASSET_NAMES.SONICS_MODEL);
    console.log(`[trashbin+ AI] SONICS model downloaded: ${sonicsData.byteLength} bytes`);
    await storeAsset(ASSET_NAMES.SONICS_MODEL, sonicsData, remoteVersion);

    onProgress?.("Downloading Fakeprint model...");
    const fakeprintData = await downloadAsset(ASSET_NAMES.FAKEPRINT_MODEL);
    console.log(`[trashbin+ AI] Fakeprint model downloaded: ${fakeprintData.byteLength} bytes`);
    await storeAsset(ASSET_NAMES.FAKEPRINT_MODEL, fakeprintData, remoteVersion);

    // Only update version after all assets are stored
    setStoredVersion(remoteVersion);
    onProgress?.("Assets ready");
    return true;
  } catch (error) {
    console.error("[trashbin+ AI] Failed to ensure assets:", error);
    return false;
  }
}

export async function deleteAssets(): Promise<void> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);
    store.clear();
    tx.oncomplete = () => db.close();
    Spicetify.LocalStorage.remove(VERSION_STORAGE_KEY);
  } catch (error) {
    console.error("[trashbin+ AI] Failed to delete assets:", error);
  }
}
