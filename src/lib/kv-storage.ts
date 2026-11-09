import { KV_STORE, openDb } from "./trash-storage";

const SAVE_DEBOUNCE_MS = 1000;

export interface StoredRecord<T> {
  load: () => Promise<T>;
  save: () => void;
  replace: (value: T) => void;
  clear: () => Promise<void>;
}

function readKey(db: IDBDatabase, key: string): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const req = db.transaction(KV_STORE).objectStore(KV_STORE).get(key);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

function readLegacy(key: string): unknown {
  try {
    const raw = Spicetify.LocalStorage.get(key);
    return raw ? JSON.parse(raw) : undefined;
  } catch {
    return undefined;
  }
}

// One value per key, held in memory and written back in batches. Spotify's localStorage holds about 2 MB for every
// extension together, so a value found there under the same key is moved over and removed on first load.
export function storedRecord<T extends object>(
  key: string,
  empty: () => T,
): StoredRecord<T> {
  let value: T | null = null;
  let loading: Promise<T> | null = null;
  let timer: ReturnType<typeof setTimeout> | null = null;

  const write = async () => {
    timer = null;
    if (!value) return;
    const db = await openDb();
    db.transaction(KV_STORE, "readwrite").objectStore(KV_STORE).put(value, key);
  };

  const save = () => {
    if (timer) return;
    timer = setTimeout(() => void write().catch(() => {}), SAVE_DEBOUNCE_MS);
  };

  const load = () => {
    if (value) return Promise.resolve(value);
    loading ??= (async () => {
      const db = await openDb();
      const stored = await readKey(db, key);
      const legacy = stored === undefined ? readLegacy(key) : undefined;
      const found = stored ?? legacy;
      // IndexedDB and JSON.parse boundary: the value is whatever this record wrote earlier
      value = found && typeof found === "object" ? (found as T) : empty();
      if (legacy !== undefined) save();
      Spicetify.LocalStorage.remove(key);
      return value;
    })();
    return loading;
  };

  return {
    load,
    save,
    replace: (next) => {
      value = next;
      save();
    },
    clear: async () => {
      if (timer) clearTimeout(timer);
      timer = null;
      value = empty();
      Spicetify.LocalStorage.remove(key);
      const db = await openDb();
      db.transaction(KV_STORE, "readwrite").objectStore(KV_STORE).delete(key);
    },
  };
}
