const DB_NAME = "trashbin-plus";
const DB_VERSION = 1;
const SONGS_STORE = "songs";
const ARTISTS_STORE = "artists";

const LEGACY_SONGS_KEY = "TrashSongList";
const LEGACY_ARTISTS_KEY = "TrashArtistList";

let dbPromise: Promise<IDBDatabase> | null = null;

function openDb(): Promise<IDBDatabase> {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(SONGS_STORE)) {
        db.createObjectStore(SONGS_STORE);
      }
      if (!db.objectStoreNames.contains(ARTISTS_STORE)) {
        db.createObjectStore(ARTISTS_STORE);
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
  return dbPromise;
}

function tx(
  db: IDBDatabase,
  stores: string[],
  mode: IDBTransactionMode,
): IDBTransaction {
  return db.transaction(stores, mode);
}

function awaitTx(transaction: IDBTransaction): Promise<void> {
  return new Promise((resolve, reject) => {
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
    transaction.onabort = () => reject(transaction.error);
  });
}

function getAllKeys(store: IDBObjectStore): Promise<string[]> {
  return new Promise((resolve, reject) => {
    const req = store.getAllKeys();
    req.onsuccess = () => resolve(req.result as string[]);
    req.onerror = () => reject(req.error);
  });
}

export async function loadAll(): Promise<{
  songs: Record<string, boolean>;
  artists: Record<string, boolean>;
}> {
  const db = await openDb();
  const t = tx(db, [SONGS_STORE, ARTISTS_STORE], "readonly");
  const songsKeys = await getAllKeys(t.objectStore(SONGS_STORE));
  const artistsKeys = await getAllKeys(t.objectStore(ARTISTS_STORE));
  await awaitTx(t);
  const songs: Record<string, boolean> = {};
  const artists: Record<string, boolean> = {};
  for (const k of songsKeys) songs[k] = true;
  for (const k of artistsKeys) artists[k] = true;
  return { songs, artists };
}

export async function putSong(uri: string): Promise<void> {
  const db = await openDb();
  const t = tx(db, [SONGS_STORE], "readwrite");
  t.objectStore(SONGS_STORE).put(true, uri);
  await awaitTx(t);
}

export async function deleteSong(uri: string): Promise<void> {
  const db = await openDb();
  const t = tx(db, [SONGS_STORE], "readwrite");
  t.objectStore(SONGS_STORE).delete(uri);
  await awaitTx(t);
}

export async function putArtist(uri: string): Promise<void> {
  const db = await openDb();
  const t = tx(db, [ARTISTS_STORE], "readwrite");
  t.objectStore(ARTISTS_STORE).put(true, uri);
  await awaitTx(t);
}

export async function deleteArtist(uri: string): Promise<void> {
  const db = await openDb();
  const t = tx(db, [ARTISTS_STORE], "readwrite");
  t.objectStore(ARTISTS_STORE).delete(uri);
  await awaitTx(t);
}

export async function bulkReplace(
  songs: Record<string, boolean>,
  artists: Record<string, boolean>,
): Promise<void> {
  const db = await openDb();
  const t = tx(db, [SONGS_STORE, ARTISTS_STORE], "readwrite");
  const songsStore = t.objectStore(SONGS_STORE);
  const artistsStore = t.objectStore(ARTISTS_STORE);
  songsStore.clear();
  artistsStore.clear();
  for (const uri of Object.keys(songs)) songsStore.put(true, uri);
  for (const uri of Object.keys(artists)) artistsStore.put(true, uri);
  await awaitTx(t);
}

export async function bulkMerge(
  songs: Record<string, boolean>,
  artists: Record<string, boolean>,
): Promise<void> {
  const db = await openDb();
  const t = tx(db, [SONGS_STORE, ARTISTS_STORE], "readwrite");
  const songsStore = t.objectStore(SONGS_STORE);
  const artistsStore = t.objectStore(ARTISTS_STORE);
  for (const uri of Object.keys(songs)) songsStore.put(true, uri);
  for (const uri of Object.keys(artists)) artistsStore.put(true, uri);
  await awaitTx(t);
}

export async function clearAll(): Promise<void> {
  const db = await openDb();
  const t = tx(db, [SONGS_STORE, ARTISTS_STORE], "readwrite");
  t.objectStore(SONGS_STORE).clear();
  t.objectStore(ARTISTS_STORE).clear();
  await awaitTx(t);
}

function readLegacy(key: string): Record<string, boolean> {
  try {
    const raw = Spicetify.LocalStorage.get(key);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

export async function migrateFromLocalStorage(): Promise<void> {
  const legacySongs = readLegacy(LEGACY_SONGS_KEY);
  const legacyArtists = readLegacy(LEGACY_ARTISTS_KEY);

  const hasLegacySongs = Object.keys(legacySongs).length > 0;
  const hasLegacyArtists = Object.keys(legacyArtists).length > 0;

  if (!hasLegacySongs && !hasLegacyArtists) {
    Spicetify.LocalStorage.remove(LEGACY_SONGS_KEY);
    Spicetify.LocalStorage.remove(LEGACY_ARTISTS_KEY);
    return;
  }

  await bulkMerge(legacySongs, legacyArtists);

  Spicetify.LocalStorage.remove(LEGACY_SONGS_KEY);
  Spicetify.LocalStorage.remove(LEGACY_ARTISTS_KEY);
}
