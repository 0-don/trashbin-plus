// bun ai/collect/spotify.ts [train|modern] : real Spotify previews via the client's CDP port (9225).
// Humans: related artists of well known acts, tracks released before 2022. AI: artists on the soul-over-ai list.
// The train split goes wider (genre seeds, two hops, all remaining AI artists) and never reuses eval tracks.
// modern: 2023+ releases by artists who already released before 2023, i.e. human music with current production.
// Its eval artists (human_spotify_modern in spotify.json) never appear in any training file.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { join, relative } from "path";

const DATA = join(import.meta.dir, "..", "data");
const MODE = process.argv[2] ?? "eval";
const TRAIN = MODE === "train";
const OUT = join(DATA, TRAIN ? "spotify_train.json" : "spotify.json");
const CLIPS = join(DATA, TRAIN ? "train" : "clips", "spotify");
const HUMAN_SEEDS = [
  "4Z8W4fKeB5YxbusRsdQVPb", "1dfeR4HaWDbWqFHLkxsg1d", "3WrFJ7ztbogyGnTHbHJFl2", "4tZwfgrHOc3mvqYlEYSvVi",
  "4dpARuHxo51G3z768sgnrY", "7dGJo4pcD2V6oG8kP0tJRR", "06HL4z0CvFAxyc27GXpf02", "6qqNVTkY8uBg9cP3Jd7DAH",
  "2YZyLoL8N0Wb9xBt1NhZWg", "6olE6TJLqED3rqDCT0FyPh", "2ye2Wgw4gimLv2eAKyk1NB", "0kbYTNQb4Pb1rPbbaF0pT4",
  "2QsynagSdAqZj3U9HgDzjD", "7Ln80lUS6He07XvHI8qqHH", "4gzpq5DPGxSnKTe4SA8HAU", "1Xyo4u8uXC1ZmMpatF05PJ",
  "0LcJLqbBmaGUft1e9Mm8HV", "5INjqkS1o8h1imAzPqGZBb", "6kBDZFXuLrZgHnvmPu9NsG", "4LEiUm1SRbFMgfqnQTwUbQ",
  "6kACVPfCOnqzgfEF5ryl0x", "7guDJrEfX3qb6FEbdPA5qi", "3AA28KZvwAUcZuOKwyblJQ", "4q3ewBCX7sLwd24euuV69X",
  "3Nrfpe0tUJi4K4DXYWgMUX", "3Rq3YOF9YG9YfCWD4D56RZ",
];
// Genres the eval seeds barely touch: classical, ambient, jazz, electronic, metal, country, latin, afrobeats, score
const TRAIN_SEEDS = [
  "0YC192cP3KPCRWx8zr8MfZ", "2uFUBdaVGtyMqckSeCl0Qj", "7MSUfLeTdDEoZiJPDSBXgi", "1vCWHaC5f2uS3yhpwWbIA6",
  "7CajNmpbOovFoOoasH2HaY", "5he5w2lnU9x7JFhnwcekXX", "2CIMQHirSU0MQqyYHq0eOx", "3rxeQlsv0Sc2nyYaZ5W71T",
  "2hGh5VOeOWFp0HDfOHQyRG", "4jXfFzeP66Zy67HM2mvIIF", "5aIqB5nVVvmFsvSdExz408", "7y97mc3bZRFXzT2szRM4L4",
  "4NJhFmfw43RLBLjQvxDuRS", "5gqhueRUZEa7VDnQt4HODp", "0cmWgDlu9CwTgxPhf403hb", "2mVVjNmdjXZZDvhgQWiakk",
  "0IVcLMMbm05VIjnzPkGCyp", "5oOhM2DFWab8XhSdQiITry", "6uothxMWeLWIhsGeF7cyE8", "718COspgdWOnwOFpJHRZHS",
  "0EmeFodog0BfCgMzAIvKQp", "7ltDVBr6mKbRvohxheJ9h1", "74ASZWbe4lXaubB36ztrGX", "3wcj11K77LjEY1PkEazffa",
  "3tVQdUvClmAT7URs9V3rsp", "6mdiAmATAx73kdxrNrnlao", "1IQ2e1buppatiN1bxUVkrk", "6wWVKhxIU2cEi0K81v7HvP",
  "1nIUhcKHnK6iyumRyoV68C", "3dRfiJ2650SZu7GbydcHNb", "7nzSoJISlVJsn7O0yTeMOB", "47zz7sob9NUcODy0BTDvKx",
  "6liAMWkVf5LH7YR9yfFy1Y", "6FXMGgJwohJLUSr5nVlf9X", "0dmPX6ovclgOy8WWJaFEUU", "6UUrUCIZtQeOf8tC0WuzRy",
];
// Current electronic, EDM, trance, phonk, trap and pop acts: the productions v5 mistook for AI
const MODERN_SEEDS = [
  "6ySxYu68zTsO5ghsThpGtS", "76Fca9THLWsK7026NauEUj", "1IvuqaKdjkwwTzepomiQSM", "06cVODXXiHCj0c0YrRt4vz",
  "0SfsnGyD8FpIN4U4WCkBZ5", "60d24wfXkVzDSfLS6hyCjZ", "7vk5e3vY1uw9plTHJAMwjN", "1bj5GrcLom5gZFF5t949Xl",
  "45eNHdiiabvmbp4erw26rg", "1Cs0zKBU1kc0i8ypK3B9ai", "69GGBxA162lTqCwzJG5jLp", "4tuJ0bMpJh08gYxL8mrNt4",
  "7CajNmpbOovFoOoasH2HaY", "0NGAZxHanS9e0iNHpR8f2W", "5K4W6rqBFWDnAN6FQUkS6x", "0Y5tJX1MQlPlqiwlOH1tJY",
  "4O15NlyKLIASxsJ0PrXPfz", "1URnnhqYAYcrqrcwql10ft", "6M2wZ9GZgrQXHCFfjv46we", "66CXWjxzNUsdJxJ2JdwvnR",
  // vocal house, UK garage and TikTok pop with sped up / slowed versions, the scene v6 mistook for AI
  "5Wj4v7ri4aDONkGEIuo0zp", "1Z0DRUany5l8E7J6XNRlmC", "7wzFljicyOOPYoaOKXOIGx", "67oqxTVS3N7Z6fDVfFC3t6",
  "2XnY6NZ6rENbLMYabjkRey", "3MAfChoYXWwQfaXZND26IB", "5okL9oHMW5wof7D0x2hQLQ", "0PHFxX65osm9nU2Wp0eXx2",
];
// only seeds for the walk: their own songs are probe sets (data/probe_<name>.json), never trained on
const HOLDOUT = new Set(["5Wj4v7ri4aDONkGEIuo0zp"]);
const MODERN_EVAL = 300;
const AI_ARTISTS = TRAIN ? 2000 : 300;
const HOPS = TRAIN ? 2 : 1;
const PER_ARTIST = TRAIN ? 2 : 1;
const UA = { "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0 Safari/537.36" };

const targets: { type: string; url: string; webSocketDebuggerUrl: string }[] = await (await fetch("http://127.0.0.1:9225/json")).json();
const page = targets.find((t) => t.type === "page" && t.url.includes("xpui"));
if (!page) throw new Error("Spotify CDP page not found on 127.0.0.1:9225");
const ws = new WebSocket(page.webSocketDebuggerUrl);
await new Promise((r) => (ws.onopen = r));
let seq = 0;
function evaluate<T>(expression: string): Promise<T> {
  const id = ++seq;
  return new Promise((resolve) => {
    const onMsg = (e: MessageEvent) => {
      const m = JSON.parse(String(e.data));
      if (m.id !== id) return;
      ws.removeEventListener("message", onMsg);
      resolve(m.result.result?.value);
    };
    ws.addEventListener("message", onMsg);
    ws.send(JSON.stringify({ id, method: "Runtime.evaluate", params: { expression, returnByValue: true, awaitPromise: true } }));
  });
}

await evaluate(`(()=>{const B="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";const hex=id=>{let n=0n;for(const c of id)n=n*62n+BigInt(B.indexOf(c));return n.toString(16).padStart(32,"0")};
window.__year=async id=>{const tok=(await Spicetify.Platform.AuthorizationAPI.getState()).token.accessToken;const r=await fetch("https://spclient.wg.spotify.com/metadata/4/track/"+hex(id)+"?market=from_token",{headers:{Accept:"application/json",Authorization:"Bearer "+tok}});return (await r.json()).album?.date?.year??null};
window.__top=async(id,k)=>{try{const r=await Spicetify.GraphQL.Request(Spicetify.GraphQL.Definitions.queryArtistOverview,{uri:"spotify:artist:"+id,locale:"",includePrerelease:false});const a=r.data.artistUnion;const out=[];for(const x of a.discography.topTracks.items.slice(0,k)){const tid=x.track.uri.split(":")[2];out.push({id:tid,name:x.track.name,year:await window.__year(tid)})}return {artist:a.profile.name,tracks:out}}catch{return null}};
window.__debut=async id=>{const tok=(await Spicetify.Platform.AuthorizationAPI.getState()).token.accessToken;const g=async(t,h)=>(await fetch("https://spclient.wg.spotify.com/metadata/4/"+t+"/"+h+"?market=from_token",{headers:{Accept:"application/json",Authorization:"Bearer "+tok}})).json();try{const a=await g("artist",hex(id));const ys=[];for(const k of ["album_group","single_group","compilation_group"]){const gid=a[k]?.at(-1)?.album?.[0]?.gid;if(gid){const y=(await g("album",gid)).date?.year;if(y)ys.push(y)}}return ys.length?Math.min(...ys):null}catch{return null}};
window.__rel=async id=>{try{const r=await Spicetify.GraphQL.Request(Spicetify.GraphQL.Definitions.queryArtistRelated,{uri:"spotify:artist:"+id,locale:""});return r.data.artistUnion.relatedContent.relatedArtists.items.map(x=>x.uri.split(":")[2])}catch{return []}};return 1})()`);

interface Top { artist: string; tracks: { id: string; name: string; year: number | null }[] }
interface Entry { id: string; source: string; label: number; file: string; artist: string; name: string; year: number | null }

const aiList: { spotify: string | null; removed: boolean }[] = await (
  await fetch("https://raw.githubusercontent.com/xoundbyte/soul-over-ai/main/dist/artists.json")
).json();
const aiIds = new Set(aiList.map((a) => a.spotify).filter((x): x is string => !!x));
const entries: Entry[] = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")) : [];
const evalSet: Entry[] = TRAIN && existsSync(join(DATA, "spotify.json")) ? JSON.parse(readFileSync(join(DATA, "spotify.json"), "utf8")) : [];
const have = new Set([...entries, ...evalSet].map((e) => e.id));
const evalArtists = new Set(evalSet.map((e) => e.artist));

async function preview(trackId: string, dir = CLIPS): Promise<string | null> {
  mkdirSync(dir, { recursive: true });
  const file = join(dir, `${trackId}.mp3`);
  if (existsSync(file)) return file;
  for (let attempt = 0; attempt < 4; attempt++) {
    const html = await (await fetch(`https://open.spotify.com/embed/track/${trackId}`, { headers: UA })).text();
    const url = html.match(/"audioPreview":\s*\{\s*"url":\s*"([^"]+)"/)?.[1];
    if (url) {
      writeFileSync(file, Buffer.from(await (await fetch(url)).arrayBuffer()));
      await Bun.sleep(600);
      return file;
    }
    await Bun.sleep(3000);
  }
  return null;
}

async function take(artistId: string, label: number, source: string, keep: (t: Top["tracks"][number]) => boolean) {
  const top = await evaluate<Top | null>(`window.__top("${artistId}",5)`);
  if (!top || evalArtists.has(top.artist)) return;
  for (const t of top.tracks.filter((x) => !have.has(x.id) && keep(x)).slice(0, PER_ARTIST)) {
    const file = await preview(t.id);
    if (!file) continue;
    entries.push({ id: t.id, source, label, file: relative(DATA, file), artist: top.artist, name: t.name, year: t.year });
    have.add(t.id);
  }
  if (entries.length % 50 === 0) writeFileSync(OUT, JSON.stringify(entries, null, 1));
}

async function expand(seeds: string[], hops: number): Promise<Set<string>> {
  const artists = new Set(seeds);
  let frontier = [...artists];
  for (let hop = 0; hop < hops; hop++) {
    const next: string[] = [];
    for (const a of frontier)
      for (const r of (await evaluate<string[]>(`window.__rel("${a}")`)).slice(0, 10))
        if (!aiIds.has(r) && !artists.has(r)) {
          artists.add(r);
          next.push(r);
        }
    frontier = next;
  }
  console.error(`${artists.size} human artists`);
  return artists;
}

if (MODE === "modern") {
  const files = { eval: join(DATA, "spotify.json"), train: join(DATA, "spotify_train.json") };
  const sets: Record<"eval" | "train", Entry[]> = {
    eval: JSON.parse(readFileSync(files.eval, "utf8")),
    train: JSON.parse(readFileSync(files.train, "utf8")),
  };
  const seen = new Set([...sets.eval, ...sets.train].map((e) => e.id));
  const trainArtists = new Set(sets.train.map((e) => e.artist));
  let evalCount = sets.eval.filter((e) => e.source === "human_spotify_modern").length;
  const save = () => (["eval", "train"] as const).forEach((k) => writeFileSync(files[k], JSON.stringify(sets[k], null, 1)));
  for (const a of await expand([...HUMAN_SEEDS, ...TRAIN_SEEDS, ...MODERN_SEEDS], 2)) {
    if (HOLDOUT.has(a)) continue;
    const debut = await evaluate<number | null>(`window.__debut("${a}")`);
    if (debut === null || debut >= 2023) continue;
    const top = await evaluate<Top | null>(`window.__top("${a}",10)`);
    if (!top) continue;
    // split by artist: roughly one in eight artists not already in training goes to eval, capped
    const hash = [...a].reduce((h, c) => h + c.charCodeAt(0), 0);
    const split = !trainArtists.has(top.artist) && evalCount < MODERN_EVAL && hash % 8 === 0 ? "eval" : "train";
    const fresh = top.tracks.filter((t) => t.year !== null && t.year >= 2023 && !seen.has(t.id));
    for (const t of fresh.slice(0, split === "eval" ? 1 : 3)) {
      const file = await preview(t.id, join(DATA, split === "eval" ? "clips" : "train", "spotify"));
      if (!file) continue;
      sets[split].push({ id: t.id, source: "human_spotify_modern", label: 0, file: relative(DATA, file), artist: top.artist, name: t.name, year: t.year });
      seen.add(t.id);
      if (split === "eval") evalCount++;
      else trainArtists.add(top.artist);
    }
    if (seen.size % 25 === 0) save();
  }
  save();
  const n = (k: "eval" | "train") => sets[k].filter((e) => e.source === "human_spotify_modern").length;
  console.log(`human_spotify_modern: ${n("eval")} eval, ${n("train")} train`);
  process.exit(0);
}

mkdirSync(CLIPS, { recursive: true });
const artists = await expand(TRAIN ? [...HUMAN_SEEDS, ...TRAIN_SEEDS] : HUMAN_SEEDS, HOPS);
for (const a of artists) await take(a, 0, "human_spotify", (t) => t.year !== null && t.year < 2022);
const pool = aiList.filter((a) => !a.removed && a.spotify).map((a) => a.spotify!);
for (const a of pool.sort(() => Math.random() - 0.5).slice(0, AI_ARTISTS)) await take(a, 1, "ai_spotify_list", () => true);

writeFileSync(OUT, JSON.stringify(entries, null, 1));
console.log(`${entries.filter((e) => !e.label).length} human, ${entries.filter((e) => e.label).length} AI previews`);
process.exit(0);
