import { storedRecord, StoredRecord } from "./kv-storage";

const CORS_PROXY = "https://cors-proxy.spicetify.app";
const RECHECK_AFTER = 7 * 86_400_000;

type Cached<T> = Record<string, [value: T, checkedAt: number]>;

const verifiedCache = storedRecord<Cached<boolean>>("trashbin-ai-verified", () => ({}));
const deezerCache = storedRecord<Cached<boolean | null>>("trashbin-ai-deezer", () => ({}));

// a positive answer is final, a negative one is asked again later since badges and labels get added
async function cached<T>(
  record: StoredRecord<Cached<T>>,
  id: string,
  isFinal: (v: T) => boolean,
  lookup: () => Promise<T>,
): Promise<T> {
  const cache = await record.load();
  const hit = cache[id];
  if (hit && (isFinal(hit[0]) || Date.now() - hit[1] < RECHECK_AFTER)) return hit[0];
  const value = await lookup();
  cache[id] = [value, Date.now()];
  record.save();
  return value;
}

// Spotify verifies only artists with sustained listening and a presence outside Spotify, never AI personas
export function isArtistVerified(artistId: string): Promise<boolean> {
  return cached(verifiedCache, artistId, (v) => v, async () => {
    const res = await Spicetify.GraphQL.Request(Spicetify.GraphQL.Definitions.queryArtistOverview, {
      uri: `spotify:artist:${artistId}`,
      locale: "",
      includePrerelease: false,
    });
    const artist = res?.data?.artistUnion;
    if (!artist) throw new Error(`artist overview ${artistId} unavailable`);
    return artist.onPlatformReputationTrait?.verification?.isVerified === true;
  });
}

let deezerToken: { jwt: string; at: number } | null = null;

async function deezerJwt(): Promise<string> {
  if (!deezerToken || Date.now() - deezerToken.at > 300_000) {
    const res = await fetch("https://auth.deezer.com/login/anonymous?jo=p&rto=c");
    deezerToken = { jwt: (await res.json()).jwt, at: Date.now() };
  }
  return deezerToken.jwt;
}

// Deezer's audio detector labels albums with fully AI generated tracks; null when Deezer does not carry the song
export function deezerAiLabel(isrc: string): Promise<boolean | null> {
  return cached(deezerCache, isrc, (v) => v === true, async () => {
    const track = await Spicetify.CosmosAsync.get(`https://api.deezer.com/track/isrc:${isrc}`);
    const albumId = track?.album?.id;
    if (!albumId) return null;
    const res = await fetch(`${CORS_PROXY}/https://pipe.deezer.com/api`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${await deezerJwt()}` },
      body: JSON.stringify({ query: `{ album(albumId: "${albumId}") { hasIdentifiedAIContent } }` }),
    });
    const label = (await res.json())?.data?.album?.hasIdentifiedAIContent;
    return typeof label === "boolean" ? label : null;
  });
}

export const loadAiEvidence = () =>
  Promise.all([verifiedCache.load(), deezerCache.load()]);

export const clearAiEvidence = () =>
  Promise.all([verifiedCache.clear(), deezerCache.clear()]);
