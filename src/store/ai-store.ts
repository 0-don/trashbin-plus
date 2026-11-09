import { create } from "zustand";
import {
  classifyTrack,
  disposeEngine,
  ensureAssets,
  getTrackInfo,
  initEngine,
} from "../lib/ai-engine";
import { clearAiEvidence, deezerAiLabel, isArtistVerified, loadAiEvidence } from "../lib/ai-evidence";
import { storedRecord } from "../lib/kv-storage";
import { AI_INDICATOR_CLASS } from "../lib/constants";
import { i18n } from "../components/providers/providers";
import { useTrashbinStore } from "./trashbin-store";

const BLOCKLIST_URL =
  "https://raw.githubusercontent.com/xoundbyte/soul-over-ai/main/dist/artists.json";
const LEGACY_BLOCKLIST_KEYS = ["trashbin-ai-blocklist:data", "trashbin-ai-blocklist:ts"];
const BLOCKLIST_TTL = 86_400_000; // 24 hours

const LS_KEY = "trashbin-ai-results-v8";
const LS_FAILED_TS = "trashbin-ai-failed-ts-v8";
const LEGACY_LS_KEYS = ["trashbin-ai-results", "trashbin-ai-failed-ts", "trashbin-ai-results-v2", "trashbin-ai-failed-ts-v2", "trashbin-ai-results-v3", "trashbin-ai-failed-ts-v3", "trashbin-ai-results-v4", "trashbin-ai-failed-ts-v4", "trashbin-ai-artist-hits", "trashbin-ai-results-v5", "trashbin-ai-failed-ts-v5", "trashbin-ai-results-v6", "trashbin-ai-failed-ts-v6", "trashbin-ai-artist-hits-v2", "trashbin-ai-artist-debut", "trashbin-ai-results-v7", "trashbin-ai-failed-ts-v7", "trashbin-ai-artist-hits-v3"];
const FAILED_RETRY_TTL = 86_400_000; // 24 hours
const POLL_INTERVAL = 2000;
const AI_TRASH_THRESHOLD = 0.8;
// trashed on its own only when this sure; between the two, the artist needs ARTIST_MIN_HITS flagged songs
const AI_TRASH_CONFIDENT = 0.97;
const ARTIST_MIN_HITS = 3;
// Suno launched Dec 2023; older releases are scored human without analysis
const AI_ERA_START_YEAR = 2023;
const LS_ARTIST_HITS = "trashbin-ai-artist-hits-v4";
const MAX_RETRIES = 4;

interface BlocklistEntry {
  spotify: string;
  [key: string]: unknown;
}

function resolveTrackLabel(trackUri: string): string | null {
  const currentTrack = Spicetify.Player.data?.item;
  if (currentTrack?.uri === trackUri) {
    const title = currentTrack.name;
    const artist = currentTrack.artists?.[0]?.name;
    if (title) return artist ? `${artist} - ${title}` : title;
  }
  const allTracks = [
    ...(Spicetify.Queue?.nextTracks || []),
    ...(Spicetify.Queue?.prevTracks || []),
  ];
  for (const t of allTracks) {
    if (t.contextTrack?.uri === trackUri && t.contextTrack.metadata) {
      const title = t.contextTrack.metadata.title;
      const artist = t.contextTrack.metadata.artistName;
      if (title) return artist ? `${artist} - ${title}` : title;
    }
  }
  return null;
}

const resultsRecord = storedRecord<Record<string, number>>(LS_KEY, () => ({}));
const failedRecord = storedRecord<Record<string, number>>(LS_FAILED_TS, () => ({}));
const hitsRecord = storedRecord<Record<string, string[]>>(LS_ARTIST_HITS, () => ({}));
const blocklistRecord = storedRecord<{ ts: number; data: BlocklistEntry[] }>(
  "trashbin-ai-blocklist",
  () => ({ ts: 0, data: [] }),
);

function extractArtistId(value: string): string | null {
  const trimmed = value.trim();
  const direct = trimmed.match(/^[a-zA-Z0-9]{22}$/);
  if (direct) return direct[0];
  const uri = trimmed.match(/artist[\/:]([a-zA-Z0-9]+)/);
  return uri ? uri[1] : null;
}

interface AiState {
  // State
  results: Record<string, number>;
  progress: string | null;
  ready: boolean;
  blocklist: Set<string>;
  blocklistInitialized: boolean;
  queue: Set<string>;
  retries: Map<string, number>;
  processing: boolean;
  processedCount: number;
  intervalId: ReturnType<typeof setInterval> | null;
  refreshTimer: ReturnType<typeof setInterval> | null;

  // Blocklist
  initBlocklist: () => Promise<void>;
  disposeBlocklist: () => void;
  isBlocklistedArtist: (artistId: string) => boolean;

  // Queue
  enqueue: (trackUri: string) => void;
  processNext: () => Promise<void>;
  startQueue: () => void;
  stopQueue: () => void;

  // Lifecycle
  initialize: () => Promise<boolean>;
  cleanup: () => void;
  clearStorage: () => void;
}

export const useAiStore = create<AiState>((set, get) => ({
  // State
  results: {},
  progress: null,
  ready: false,
  blocklist: new Set<string>(),
  blocklistInitialized: false,
  queue: new Set<string>(),
  retries: new Map<string, number>(),
  processing: false,
  processedCount: 0,
  intervalId: null,
  refreshTimer: null,

  // ── Blocklist ────────────────────────────────────────────────────

  initBlocklist: async () => {
    if (get().blocklistInitialized) return;
    set({ blocklistInitialized: true });

    const now = Date.now();
    for (const key of LEGACY_BLOCKLIST_KEYS) Spicetify.LocalStorage.remove(key);
    const cache = await blocklistRecord.load();
    const lastFetch = cache.ts;
    let data: BlocklistEntry[] = Array.isArray(cache.data) ? cache.data : [];

    const blocklist = new Set<string>();
    const build = (entries: BlocklistEntry[]) => {
      blocklist.clear();
      for (const entry of entries) {
        if (typeof entry !== "object" || !entry.spotify) continue;
        const id = extractArtistId(entry.spotify);
        if (id) blocklist.add(id);
      }
      set({ blocklist: new Set(blocklist) });
    };

    if (data.length > 0) build(data);

    if (now - lastFetch > BLOCKLIST_TTL || data.length === 0) {
      try {
        const res = await fetch(BLOCKLIST_URL);
        if (res.ok) {
          const fetched = await res.json();
          if (Array.isArray(fetched) && fetched.length > 0) {
            data = fetched;
            blocklistRecord.replace({ ts: now, data });
            build(data);
          }
        }
      } catch {
        /* offline */
      }
    }

    if (!get().refreshTimer) {
      const timer = setInterval(() => {
        set({ blocklistInitialized: false });
        get().initBlocklist();
      }, BLOCKLIST_TTL);
      set({ refreshTimer: timer });
    }
  },

  disposeBlocklist: () => {
    const state = get();
    if (state.refreshTimer) {
      clearInterval(state.refreshTimer);
    }
    set({
      refreshTimer: null,
      blocklist: new Set<string>(),
      blocklistInitialized: false,
    });
  },

  isBlocklistedArtist: (artistId: string) => get().blocklist.has(artistId),

  // ── Queue ────────────────────────────────────────────────────────

  enqueue: (trackUri: string) => {
    if (get().results[trackUri] !== undefined) return;
    get().queue.add(trackUri);
  },

  processNext: async () => {
    const state = get();
    if (state.processing || state.queue.size === 0) return;

    const uri = state.queue.values().next().value!;
    state.queue.delete(uri);

    if (state.results[uri] !== undefined) return;

    const count = get().processedCount + 1;
    set({ processing: true, processedCount: count });
    const pos = count;
    const remaining = state.queue.size;

    const setResult = (u: string, probability: number) => {
      const results = { ...get().results, [u]: probability };
      set({ results });
      if (probability >= 0) {
        void resultsRecord.load().then((stored) => {
          stored[u] = probability;
          resultsRecord.save();
        });
      } else {
        void failedRecord.load().then((failedTs) => {
          failedTs[u] = Date.now();
          failedRecord.save();
        });
      }
    };

    const trash = (u: string) => {
      const ts = useTrashbinStore.getState();
      if (ts.trashAiSongs && !ts.trashSongList[u]) ts.toggleSongTrash(u, false);
    };

    // one borderline song never trashes alone: the artist must have ARTIST_MIN_HITS flagged songs,
    // and reaching that count also trashes the artist's earlier flagged songs.
    // Deezer carrying the song unlabeled is a dissenting detector: only near certain songs count then.
    const judge = async (u: string, probability: number, artists: string[], deezerDisagrees: boolean) => {
      if (probability >= AI_TRASH_CONFIDENT && !deezerDisagrees) trash(u);
      if (probability < (deezerDisagrees ? AI_TRASH_CONFIDENT : AI_TRASH_THRESHOLD)) return;
      const hits = await hitsRecord.load();
      for (const artist of artists) {
        const songs = [...new Set([...(hits[artist] ?? []), u])];
        hits[artist] = songs;
        if (songs.length >= ARTIST_MIN_HITS) songs.forEach(trash);
      }
      hitsRecord.save();
    };

    try {
      const info = await getTrackInfo(uri);
      if (info.artists.some((id) => get().blocklist.has(id))) {
        setResult(uri, 1.0);
        trash(uri);
        state.retries.delete(uri);
        return;
      }

      const trackLabel = resolveTrackLabel(uri);
      if (info.year !== null && info.year < AI_ERA_START_YEAR) {
        console.log(`[trashbin+] ${trackLabel ?? uri}: released ${info.year}, before AI song generators`);
        setResult(uri, 0);
        state.retries.delete(uri);
        return;
      }

      const deezerLabel = info.isrc ? await deezerAiLabel(info.isrc).catch(() => null) : null;
      if (deezerLabel) {
        console.log(`[trashbin+] ${trackLabel ?? uri}: labeled AI by Deezer`);
        setResult(uri, 1.0);
        trash(uri);
        state.retries.delete(uri);
        return;
      }

      if (info.artists[0] && (await isArtistVerified(info.artists[0]))) {
        console.log(`[trashbin+] ${trackLabel ?? uri}: artist verified by Spotify`);
        setResult(uri, 0);
        state.retries.delete(uri);
        return;
      }

      const probability = await classifyTrack(uri, pos, remaining, trackLabel);
      if (probability !== null) {
        setResult(uri, probability);
        await judge(uri, probability, info.artists, deezerLabel === false);
      } else {
        setResult(uri, -1);
      }
      state.retries.delete(uri);
    } catch {
      const count = (state.retries.get(uri) ?? 0) + 1;
      if (count < MAX_RETRIES) {
        state.retries.set(uri, count);
        state.queue.add(uri);
      } else {
        setResult(uri, -1);
        state.retries.delete(uri);
      }
    } finally {
      set({ processing: false });
    }
  },

  startQueue: () => {
    if (get().intervalId) return;
    const id = setInterval(() => get().processNext(), POLL_INTERVAL);
    set({ intervalId: id });
  },

  stopQueue: () => {
    const state = get();
    if (state.intervalId) {
      clearInterval(state.intervalId);
    }
    state.queue.clear();
    state.retries.clear();
    set({ intervalId: null, processing: false });
  },

  // ── Lifecycle ────────────────────────────────────────────────────

  initialize: async () => {
    try {
      get().initBlocklist();
      for (const key of LEGACY_LS_KEYS) Spicetify.LocalStorage.remove(key);

      void Promise.all([hitsRecord.load(), loadAiEvidence()]).catch(() => {});
      const results = { ...(await resultsRecord.load()) };

      // Re-enqueue failed tracks older than 24h
      const failedTs = await failedRecord.load();
      const now = Date.now();
      let failedChanged = false;
      for (const [uri, ts] of Object.entries(failedTs)) {
        if (now - ts >= FAILED_RETRY_TTL) {
          delete results[uri];
          delete failedTs[uri];
          failedChanged = true;
        }
      }
      if (failedChanged) failedRecord.save();

      set({ results });

      const ready = await ensureAssets();
      if (!ready) return false;

      set({ progress: i18n.t("AI_ASSETS_INITIALIZING") });
      const initialized = await initEngine();
      if (initialized) {
        set({ progress: null, ready: true });
        get().startQueue();
      }
      return initialized;
    } catch (error) {
      console.error("[trashbin+] ai-store initialize failed:", error);
      return false;
    }
  },

  cleanup: () => {
    get().stopQueue();
    disposeEngine();
    get().disposeBlocklist();
    set({ results: {}, progress: null, ready: false });
  },

  clearStorage: () => {
    void Promise.all([
      resultsRecord.clear(),
      failedRecord.clear(),
      hitsRecord.clear(),
      clearAiEvidence(),
    ]);
    get().queue.clear();
    set({ results: {} });
    document
      .querySelectorAll(`.${AI_INDICATOR_CLASS}`)
      .forEach((el) => el.remove());
  },
}));
