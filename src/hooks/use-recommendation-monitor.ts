import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useTrashbinStore } from "../store/trashbin-store";

/**
 * Like a track from mobile to trash it. Automatically unlikes and skips.
 */
export const useRecommendationMonitor = () => {
  const store = useTrashbinStore();
  const { t } = useTranslation();
  const lastHeart = useRef(false);
  const lastUri = useRef<string | null>(null);
  const processing = useRef(false);

  useEffect(() => {
    if (
      !store.trashbinEnabled ||
      !store.remoteToggleEnabled ||
      !store.trashViaLikeEnabled
    )
      return;

    const interval = setInterval(async () => {
      if (processing.current) return;
      if (
        Spicetify.Platform.ConnectAPI.state.activeDevice.id === "local_device"
      )
        return;

      const track = Spicetify.Player.data?.item;
      if (!track?.uri) return;

      const heart = Spicetify.Player.getHeart();

      if (track.uri !== lastUri.current) {
        lastUri.current = track.uri;
        lastHeart.current = heart;
        return;
      }

      if (!lastHeart.current && heart) {
        processing.current = true;
        try {
          const trackId = track.uri.split(":")[2];
          await Spicetify.CosmosAsync.del(
            `https://api.spotify.com/v1/me/tracks?ids=${trackId}`,
          );

          if (!store.getTrashStatus(track.uri).isTrashed) {
            store.toggleSongTrash(track.uri, false);
            Spicetify.showNotification(t("MESSAGE_SONG_ADDED_REMOTE"));
            Spicetify.Player.next();
          }
        } catch (e) {
          // remote trash failed
        }
        processing.current = false;
      }

      lastHeart.current = heart;
    }, 2000);

    return () => clearInterval(interval);
  }, [
    store.trashbinEnabled,
    store.remoteToggleEnabled,
    store.trashViaLikeEnabled,
    store.getTrashStatus,
    store.toggleSongTrash,
  ]);
};
