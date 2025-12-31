export interface TrackDisplayData {
  uri: string;
  name: string;
  artist: string;
  imageUrl?: string;
}

export interface ArtistDisplayData {
  uri: string;
  name: string;
  type: "artist";
  imageUrl?: string;
  secondaryText: string;
}

const BASE62 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function toHex(id: string): string {
  let n = BigInt(0);
  for (const c of id) {
    const i = BASE62.indexOf(c);
    if (i === -1) return "0".repeat(32);
    n = n * 62n + BigInt(i);
  }
  return n.toString(16).padStart(32, "0");
}

async function fetchMetadata(type: "track" | "artist", id: string) {
  const token = (await Spicetify.Platform.AuthorizationAPI.getState()).token
    .accessToken;
  const res = await fetch(
    `https://spclient.wg.spotify.com/metadata/4/${type}/${toHex(id)}?market=from_token`,
    {
      headers: { Accept: "application/json", Authorization: `Bearer ${token}` },
    },
  );
  return res.json();
}

export async function fetchTracksMetadata(
  uris: string[],
): Promise<TrackDisplayData[]> {
  return Promise.all(
    uris.map(async (uri) => {
      const id = uri.split(":")[2];
      try {
        const r = await fetchMetadata("track", id);
        return {
          uri,
          name: r?.name || "Unknown Track",
          artist:
            r?.artist?.map((a: any) => a.name).join(", ") || "Unknown Artist",
          imageUrl: r?.album?.cover_group?.image?.[0]?.file_id
            ? `https://i.scdn.co/image/${r.album.cover_group.image[0].file_id}`
            : undefined,
        };
      } catch {
        return { uri, name: "Error loading track", artist: "Failed to load" };
      }
    }),
  );
}

export async function fetchArtistsMetadata(
  uris: string[],
): Promise<ArtistDisplayData[]> {
  return Promise.all(
    uris.map(async (uri) => {
      const id = uri.split(":")[2];
      try {
        const r = await fetchMetadata("artist", id);
        return {
          uri,
          name: r?.name || "Unknown Artist",
          type: "artist" as const,
          imageUrl: r?.portrait_group?.image?.[0]?.file_id
            ? `https://i.scdn.co/image/${r.portrait_group.image[0].file_id}`
            : undefined,
          secondaryText: "Artist",
        };
      } catch {
        return {
          uri,
          name: "Error loading artist",
          type: "artist" as const,
          secondaryText: "Failed to load",
        };
      }
    }),
  );
}
