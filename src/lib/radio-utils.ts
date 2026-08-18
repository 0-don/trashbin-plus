const SEED_TO_PLAYLIST =
  "https://spclient.wg.spotify.com/inspiredby-mix/v2/seed_to_playlist/";

export interface RadioProgress {
  done: number;
  total: number;
  found: number;
}

export interface WritablePlaylist {
  uri: string;
  name: string;
}

interface RootlistItem {
  type: string;
  uri: string;
  name: string;
  canAdd?: boolean;
  items?: RootlistItem[];
  rows?: RootlistItem[];
}

async function getRadioUri(trackUri: string): Promise<string | null> {
  const res = await Spicetify.CosmosAsync.get(
    `${SEED_TO_PLAYLIST}${trackUri}?response-format=json`,
  );
  return res?.mediaItems?.[0]?.uri ?? null;
}

async function getRadioTracks(radioUri: string): Promise<string[]> {
  const contents = await Spicetify.Platform.PlaylistAPI.getContents(radioUri, {
    limit: 200,
  });
  return (contents?.items ?? [])
    .map((item: { uri?: string }) => item.uri)
    .filter((uri?: string): uri is string => !!uri?.startsWith("spotify:track:"));
}

export async function collectRadioTracks(
  seedUris: string[],
  onProgress: (p: RadioProgress) => void,
  shouldStop: () => boolean,
): Promise<string[]> {
  const pooled = new Set<string>();
  let done = 0;

  for (const seed of seedUris) {
    if (shouldStop()) break;

    try {
      const radioUri = await getRadioUri(seed);
      if (radioUri) {
        for (const uri of await getRadioTracks(radioUri)) pooled.add(uri);
      }
    } catch {
      // a seed without a radio station must not abort the whole run
    }

    done++;
    onProgress({ done, total: seedUris.length, found: pooled.size });
  }

  return Array.from(pooled);
}

export async function getWritablePlaylists(): Promise<WritablePlaylist[]> {
  const rootlist = await Spicetify.Platform.RootlistAPI.getContents({
    limit: 500,
  });

  const found: WritablePlaylist[] = [];
  const walk = (items?: RootlistItem[]) => {
    for (const item of items ?? []) {
      if (item.type === "playlist" && item.canAdd !== false) {
        found.push({ uri: item.uri, name: item.name });
      }
      walk(item.items ?? item.rows);
    }
  };
  walk(rootlist?.items);

  return found;
}

export async function addTracksToPlaylist(
  playlistUri: string,
  trackUris: string[],
): Promise<number> {
  const existing = await Spicetify.Platform.PlaylistAPI.getContents(
    playlistUri,
    { limit: 9999999 },
  );
  const have = new Set(
    (existing?.items ?? []).map((item: { uri: string }) => item.uri),
  );
  const fresh = trackUris.filter((uri) => !have.has(uri));

  // PlaylistAPI.add rejects oversized payloads, so commit in chunks
  for (let i = 0; i < fresh.length; i += 100) {
    await Spicetify.Platform.PlaylistAPI.add(
      playlistUri,
      fresh.slice(i, i + 100),
      { before: "end" },
    );
  }

  return fresh.length;
}
