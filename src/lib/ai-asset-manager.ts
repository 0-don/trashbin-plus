const DB_NAME = "trashbin-ai";
const STORE_NAME = "assets";
const DB_VERSION = 1;
const VERSION_STORAGE_KEY = "trashbin-ai-assets-version";
const GITHUB_RELEASE_BASE =
  "https://github.com/0-don/trashbin-plus/releases/download/ai-assets";

export const ASSET_NAMES = {
  MODEL: "sonics_model.onnx",
  WASM_SIMD: "ort-wasm-simd.wasm",
  WASM_FALLBACK: "ort-wasm.wasm",
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
  const url = `${GITHUB_RELEASE_BASE}/${name}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download ${name}: ${response.status}`);
  }
  return response.arrayBuffer();
}

async function fetchRemoteVersion(): Promise<string | null> {
  try {
    const url = `${GITHUB_RELEASE_BASE}/${ASSET_NAMES.VERSION}`;
    const response = await fetch(url);
    if (!response.ok) return null;
    const data = await response.json();
    return data.version ?? null;
  } catch {
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
    const remoteVersion = await fetchRemoteVersion();
    if (!remoteVersion) {
      console.error("[trashbin+ AI] Could not fetch remote version");
      return false;
    }

    const localVersion = getStoredVersion();

    // Check if all assets exist in IndexedDB
    const modelExists = await getAsset(ASSET_NAMES.MODEL);
    const wasmExists = await getAsset(ASSET_NAMES.WASM_SIMD);

    if (localVersion === remoteVersion && modelExists && wasmExists) {
      onProgress?.("Assets up to date");
      return true;
    }

    // Download all required assets
    onProgress?.("Downloading WASM runtime...");
    const wasmData = await downloadAsset(ASSET_NAMES.WASM_SIMD);
    await storeAsset(ASSET_NAMES.WASM_SIMD, wasmData, remoteVersion);

    onProgress?.("Downloading AI model...");
    const modelData = await downloadAsset(ASSET_NAMES.MODEL);
    await storeAsset(ASSET_NAMES.MODEL, modelData, remoteVersion);

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
