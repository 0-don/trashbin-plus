import { useTrashbinStore } from "../store/trashbin-store";
import { SELECTORS } from "./constants";

const ENHANCED_RECOMMENDATION_REGEX = /enhanced_recommendation/;

export interface TrackData {
  trackURI: string | null;
  uid: string | null;
  artistURIs: string[];
  isEnhancedRecommendation: boolean;
}

interface ReactFiber {
  memoizedProps?: Record<string, any>;
  pendingProps?: Record<string, any>;
  props?: Record<string, any>;
  return?: ReactFiber;
}

interface ElementWithFiber extends Element {
  [key: string]: unknown;
}

export function extractTrackData(element: Element): TrackData {
  let trackURI: string | null = null;
  let isEnhancedRecommendation = false;
  let uid: string | null = null;

  const elementWithFiber = element as ElementWithFiber;
  const reactKey = Object.keys(elementWithFiber).find((k) =>
    k.toLowerCase().includes("reactFiber".toLowerCase()),
  );

  if (reactKey) {
    let fiber = elementWithFiber[reactKey] as ReactFiber | undefined;

    while (fiber) {
      try {
        const props =
          fiber.memoizedProps ?? fiber.pendingProps ?? fiber.props ?? {};

        // Check if this fiber has the item data we need
        if (props.item && typeof props.item === "object") {
          const item = props.item;

          // Extract track URI
          if (
            item.uri &&
            typeof item.uri === "string" &&
            item.uri.startsWith("spotify:track:")
          ) {
            trackURI = item.uri;
          }

          // Extract UID
          if (item.uid && typeof item.uid === "string") {
            uid = item.uid;
          }

          // Check for enhanced recommendation in the item or its metadata
          if (item.metadata && typeof item.metadata === "object") {
            const metadataString = JSON.stringify(item.metadata);
            if (ENHANCED_RECOMMENDATION_REGEX.test(metadataString)) {
              isEnhancedRecommendation = true;
            }
          }

          // If we found what we need, we can break early
          if (trackURI && uid) {
            break;
          }
        }

        fiber = fiber.return;
      } catch {
        break;
      }
    }
  }

  const artistURIs = Array.from(
    element.querySelectorAll<HTMLAnchorElement>(SELECTORS.ARTIST_LINK),
  )
    .map((a) => a.href.match(/\/artist\/([a-zA-Z0-9]+)/)?.[1])
    .filter((id): id is string => Boolean(id))
    .map((id) => `spotify:artist:${id}`);

  return { trackURI, uid, artistURIs, isEnhancedRecommendation };
}

export function isTrackEffectivelyTrashed(
  track: Spicetify.PlayerTrack | Spicetify.ContextTrack | undefined | null,
  trashSongList: Record<string, boolean>,
  trashArtistList: Record<string, boolean>,
): boolean {
  if (!track || !track.uri) return true;
  if (trashSongList[track.uri]) return true;

  const artistUris = new Set<string>();
  const playerTrack = track as Spicetify.PlayerTrack;

  for (const artist of playerTrack.artists || []) {
    if (artist && artist.uri) artistUris.add(artist.uri);
  }

  if (track.metadata?.artist_uri) artistUris.add(track.metadata.artist_uri);

  let metaIndex = 1;
  while (track.metadata?.[`artist_uri:${metaIndex}`]) {
    artistUris.add(track.metadata[`artist_uri:${metaIndex}`]);
    metaIndex++;
  }

  for (const artistUri of artistUris) {
    if (trashArtistList[artistUri]) return true;
  }
  return false;
}

export async function skipToNextAllowedTrack() {
  const state = useTrashbinStore.getState();
  const currentPlayerState = Spicetify.Player.data;

  if (!currentPlayerState?.context?.uri) {
    Spicetify.Player.next();
    return;
  }

  // If reshuffle is enabled, search for next non-trashed track
  if (state.reshuffleOnSkip) {
    const currentContextUri = currentPlayerState.context.uri;
    const tracksToSearch =
      currentPlayerState.nextItems || Spicetify.Queue?.nextTracks || [];

    for (const nextTrack of tracksToSearch) {
      if (
        !isTrackEffectivelyTrashed(
          nextTrack,
          state.trashSongList,
          state.trashArtistList,
        )
      ) {
        try {
          return await Spicetify.Player.playUri(
            currentContextUri,
            {},
            { skipTo: { uri: nextTrack.uri, uid: nextTrack.uid } },
          );
        } catch (err) {

          console.error("Error skipping to next allowed track:", err);
        }
      }
    }
  }

  // Default behavior: just skip to next
  Spicetify.Player.next();
}

export function shouldSkipTrack(uri: string, type: string): boolean {
  const currentTrack = Spicetify.Player.data?.item;
  if (!currentTrack) return false;

  if (type === Spicetify.URI.Type.TRACK) {
    return uri === currentTrack.uri;
  }

  if (type === Spicetify.URI.Type.ARTIST) {
    let count = 0;
    let artUri = currentTrack.metadata?.artist_uri;
    while (artUri) {
      if (uri === artUri) return true;
      count++;
      artUri = currentTrack.metadata?.[`artist_uri:${count}`];
    }
  }

  return false;
}

export async function manageSmartShuffleQueue(): Promise<void> {
  if (!document.querySelector(SELECTORS.SMART_SHUFFLE_BUTTON)) return;

  const currentPlayerState = Spicetify.Player.data;
  const queueTracks = currentPlayerState?.nextItems || Spicetify?.Queue?.nextTracks || [];
  
  if (queueTracks.length === 0) return;

  const enhancedRecommendations = queueTracks.filter(
    (track) => track?.metadata?.['smart-shuffle-signals'] === 'tpm' || 
               track?.metadata?.provider === 'enhanced_recommendation'
  );

  if (
    queueTracks.length > 4 &&
    enhancedRecommendations.length <= 4 &&
    queueTracks.length > enhancedRecommendations.length
  ) {
    const tracksToRemove = queueTracks
      .filter(
        (track) =>
          track.uri &&
          !(track.metadata?.['smart-shuffle-signals'] === 'tpm' || 
            track.metadata?.provider === 'enhanced_recommendation') &&
          useTrashbinStore.getState().getTrashStatus(track.uri).isTrashed,
      )
      .map((track) => ({
        uri: track.uri,
        uid: track.uid,
      }));

    // Exit if no tracks to remove (prevent infinite loop)
    if (tracksToRemove.length === 0) return;

    await Spicetify.removeFromQueue(tracksToRemove);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await manageSmartShuffleQueue();
  }
}