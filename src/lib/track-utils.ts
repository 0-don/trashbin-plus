import { useTrashbinStore } from "../store/trashbin-store";
import { SELECTORS } from "./constants";

const ENHANCED_RECOMMENDATION_REGEX = /enhanced_recommendation/;

export interface TrackData {
  trackURI: string | null;
  // uid: string | null;
  artistURIs: string[];
  isEnhancedRecommendation: boolean;
}

interface ReactFiber {
  memoizedProps?: Record<string, any>;
  pendingProps?: Record<string, any>;
  props?: Record<string, any>;
  return?: ReactFiber;
  child?: ReactFiber;
}

interface ElementWithFiber extends Element {
  [key: string]: unknown;
}

function findTrackUriInProps(
  obj: any,
  depth = 0,
  maxDepth = 10,
): string | null {
  if (depth > maxDepth || !obj || typeof obj !== "object") return null;

  // Direct uri property
  if (typeof obj.uri === "string" && obj.uri.startsWith("spotify:track:")) {
    return obj.uri;
  }

  // Check props.uri
  if (
    obj.props?.uri &&
    typeof obj.props.uri === "string" &&
    obj.props.uri.startsWith("spotify:track:")
  ) {
    return obj.props.uri;
  }

  // Check children array
  if (Array.isArray(obj.children)) {
    for (const child of obj.children) {
      const found = findTrackUriInProps(child, depth + 1, maxDepth);
      if (found) return found;
    }
  }

  // Check single child object
  if (
    obj.children &&
    typeof obj.children === "object" &&
    !Array.isArray(obj.children)
  ) {
    const found = findTrackUriInProps(obj.children, depth + 1, maxDepth);
    if (found) return found;
  }

  // Check props.children
  if (obj.props?.children) {
    const found = findTrackUriInProps(obj.props.children, depth + 1, maxDepth);
    if (found) return found;
  }

  return null;
}

export function getQueueTracks() {
  return (Spicetify?.Queue?.nextTracks || []).filter((track) =>
    track.contextTrack.uri.includes("track"),
  );
}

export function extractTrackData(element: Element): TrackData {
  let trackURI: string | null = null;
  let isEnhancedRecommendation = false;
  // let uid: string | null = null;

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
          // if (item.uid && typeof item.uid === "string") {
          //   uid = item.uid;
          // }

          // Check for enhanced recommendation in the item or its metadata
          if (item.metadata && typeof item.metadata === "object") {
            const metadataString = JSON.stringify(item.metadata);
            if (ENHANCED_RECOMMENDATION_REGEX.test(metadataString)) {
              isEnhancedRecommendation = true;
            }
          }

          // If we found what we need, we can break early
          // if (trackURI && uid) {
          //   break;
          // }
          if (trackURI) {
            break;
          }
        }

        // If no item found, try to find URI in nested children/props structure
        if (!trackURI) {
          const foundUri = findTrackUriInProps(props);
          if (foundUri) {
            trackURI = foundUri;
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

  return { trackURI, artistURIs, isEnhancedRecommendation };
  // return { trackURI, uid, artistURIs, isEnhancedRecommendation };
}

export function isTrackEffectivelyTrashed(
  track: Spicetify.PlayerTrack | Spicetify.ContextTrack | undefined | null,
): boolean {
  const state = useTrashbinStore.getState();
  if (!track || !track.uri) return true;
  if (state.trashSongList[track.uri]) return true;

  const artistUris = new Set<string>();
  const playerTrack = track as Spicetify.PlayerTrack;

  for (const artist of playerTrack?.artists || []) {
    if (artist && artist.uri) artistUris.add(artist.uri);
  }

  if (track.metadata?.artist_uri) artistUris.add(track.metadata.artist_uri);

  let metaIndex = 1;
  while (track.metadata?.[`artist_uri:${metaIndex}`]) {
    artistUris.add(track.metadata[`artist_uri:${metaIndex}`]);
    metaIndex++;
  }

  for (const artistUri of artistUris) {
    if (state.trashArtistList[artistUri]) return true;
  }
  return false;
}

export async function skipToNextAllowedTrack() {
  const currentPlayerState = Spicetify.Player.data;

  if (!currentPlayerState?.context?.uri) {
    Spicetify.Player.next();
    return;
  }

  const currentContextUri = currentPlayerState.context.uri;

  for (const nextTrack of getQueueTracks()) {
    if (!isTrackEffectivelyTrashed(nextTrack.contextTrack)) {
      try {
        return await Spicetify.Player.playUri(
          currentContextUri,
          { featureIdentifier: "playlist" },
          { skipTo: { uri: nextTrack.contextTrack.uri } },
        );
      } catch (err) {
        console.error("Error skipping to next allowed track:", err);
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

  const queueTracks = getQueueTracks();

  if (queueTracks.length === 0) return;

  const enhancedRecommendations = queueTracks.filter(
    (track) =>
      track?.contextTrack.metadata?.provider === "enhanced_recommendation",
  );

  if (
    queueTracks.length > 4 &&
    // enhancedRecommendations.length <= 4 &&
    queueTracks.length > enhancedRecommendations.length
  ) {
    const tracksToRemove = queueTracks
      .filter(
        (track) =>
          track.contextTrack.uri &&
          !(
            track.contextTrack.metadata?.provider === "enhanced_recommendation"
          ) &&
          useTrashbinStore.getState().getTrashStatus(track.contextTrack.uri)
            .isTrashed,
      )
      .map((track) => ({
        uri: track.contextTrack.uri,
        uid: track.contextTrack.uid,
      }));

    // Exit if no tracks to remove (prevent infinite loop)
    if (tracksToRemove.length === 0) return;

    await Spicetify.removeFromQueue(tracksToRemove);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // await manageSmartShuffleQueue();
  }
}
