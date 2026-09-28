// bun ai/collect/spotify.ts [train] : real Spotify previews via the client's CDP port (9225).
// Humans: related artists of well known acts, tracks released before 2022. AI: artists on the soul-over-ai list.
// The train split goes wider (genre seeds, two hops, all remaining AI artists) and never reuses eval tracks.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { join, relative } from "path";

const DATA = join(import.meta.dir, "..", "data");
const TRAIN = process.argv[2] === "train";
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

async function preview(trackId: string): Promise<string | null> {
  const file = join(CLIPS, `${trackId}.mp3`);
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

mkdirSync(CLIPS, { recursive: true });
const artists = new Set(TRAIN ? [...HUMAN_SEEDS, ...TRAIN_SEEDS] : HUMAN_SEEDS);
let frontier = [...artists];
for (let hop = 0; hop < HOPS; hop++) {
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
for (const a of artists) await take(a, 0, "human_spotify", (t) => t.year !== null && t.year < 2022);
const pool = aiList.filter((a) => !a.removed && a.spotify).map((a) => a.spotify!);
for (const a of pool.sort(() => Math.random() - 0.5).slice(0, AI_ARTISTS)) await take(a, 1, "ai_spotify_list", () => true);

writeFileSync(OUT, JSON.stringify(entries, null, 1));
console.log(`${entries.filter((e) => !e.label).length} human, ${entries.filter((e) => e.label).length} AI previews`);
process.exit(0);
