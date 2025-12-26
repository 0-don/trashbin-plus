import { useEffect, useRef } from "react";
import { i18n } from "../components/providers/providers";
import { useTrashbinStore } from "../store/trashbin-store";

/**
 * Double-tap play/pause from mobile to toggle remote skipping.
 */
export const useRemoteToggle = () => {
  const store = useTrashbinStore();
  const lastPause = useRef(0);
  const cooldown = useRef(false);

  useEffect(() => {
    if (!store.trashbinEnabled || !store.remoteToggleEnabled) return;

    const handler = (event?: Event & { data?: Spicetify.PlayerState }) => {
      if (
        Spicetify.Platform.ConnectAPI.state.activeDevice.id === "local_device"
      )
        return;
      if (cooldown.current) return;

      const isPaused = event?.data?.isPaused;
      const now = Date.now();

      if (isPaused) {
        lastPause.current = now;
      } else if (lastPause.current > 0 && now - lastPause.current < 3000) {
        cooldown.current = true;
        const wasEnabled = useTrashbinStore.getState().remoteSkippingEnabled;
        store.toggleRemoteSkipping();
        Spicetify.showNotification(
          i18n.t(
            wasEnabled
              ? "MESSAGE_REMOTE_SKIPPING_DISABLED"
              : "MESSAGE_REMOTE_SKIPPING_ENABLED",
          ),
        );
        Spicetify.Player.next();
        lastPause.current = 0;
        setTimeout(() => {
          cooldown.current = false;
        }, 3000);
      }
    };

    Spicetify.Player.addEventListener("onplaypause", handler);
    return () => Spicetify.Player.removeEventListener("onplaypause", handler);
  }, [
    store.trashbinEnabled,
    store.remoteToggleEnabled,
    store.toggleRemoteSkipping,
  ]);
};
