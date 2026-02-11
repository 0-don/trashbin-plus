const BLOCKLIST_URL =
  "https://raw.githubusercontent.com/xoundbyte/soul-over-ai/main/dist/artists.json";
const LS_CACHE_KEY = "trashbin-ai-blocklist:data";
const LS_TIME_KEY = "trashbin-ai-blocklist:ts";
const TTL = 86_400_000; // 24 hours

let artistIds = new Set<string>();
let initialized = false;
let refreshTimer: ReturnType<typeof setInterval> | null = null;

interface BlocklistEntry {
  id: string;
  name: string;
  spotify: string;
  markers?: string[];
  disclosure?: string;
}

function extractArtistId(value: string | null | undefined): string | null {
  if (!value) return null;
  const trimmed = value.trim();
  const directMatch = trimmed.match(/^[a-zA-Z0-9]{22}$/);
  if (directMatch) return directMatch[0];
  const uriMatch = trimmed.match(/artist[\/:]([a-zA-Z0-9]+)/);
  return uriMatch ? uriMatch[1] : null;
}

function buildSet(data: BlocklistEntry[]): void {
  artistIds.clear();
  for (const entry of data) {
    if (typeof entry !== "object" || !entry.spotify) continue;
    const id = extractArtistId(entry.spotify);
    if (id) artistIds.add(id);
  }
}

export async function initBlocklist(): Promise<void> {
  if (initialized) return;
  initialized = true;

  const now = Date.now();
  const lastFetchStr = Spicetify.LocalStorage.get(LS_TIME_KEY);
  const lastFetch = lastFetchStr ? parseInt(lastFetchStr) : 0;
  const cached = Spicetify.LocalStorage.get(LS_CACHE_KEY);

  let data: BlocklistEntry[] = [];

  if (cached) {
    try {
      data = JSON.parse(cached);
    } catch {
      // cache corrupt, will re-fetch
    }
  }

  // Build set from cache immediately so lookups work while fetching
  if (data.length > 0) {
    buildSet(data);
  }

  if (now - lastFetch > TTL || data.length === 0) {
    try {
      const res = await fetch(BLOCKLIST_URL);
      if (res.ok) {
        const fetched = await res.json();
        if (Array.isArray(fetched) && fetched.length > 0) {
          data = fetched;
          Spicetify.LocalStorage.set(LS_CACHE_KEY, JSON.stringify(data));
          Spicetify.LocalStorage.set(LS_TIME_KEY, now.toString());
          buildSet(data);
        }
      }
    } catch {
      // fetch failed, use cached data
    }
  }

  if (!refreshTimer) {
    refreshTimer = setInterval(() => {
      initialized = false;
      initBlocklist();
    }, TTL);
  }
}

export function isBlocklistedArtist(artistId: string): boolean {
  return artistIds.has(artistId);
}

export function disposeBlocklist(): void {
  if (refreshTimer) {
    clearInterval(refreshTimer);
    refreshTimer = null;
  }
  artistIds.clear();
  initialized = false;
}
