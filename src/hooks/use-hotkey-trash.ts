import { useEffect, useRef } from "react";
import { useTrashbinStore } from "../store/trashbin-store";

export const useHotkeyTrash = () => {
  const store = useTrashbinStore();
  const trackToTrashRef = useRef<string | null>(null);

  useEffect(() => {
    if (!store.trashbinEnabled || !store.trashOnNextHotkey) return;

    const handleTrashAndNext = () => {
      const currentTrack = Spicetify.Player.data?.item;
      if (currentTrack?.uri) {
        trackToTrashRef.current = currentTrack.uri;
        Spicetify.Player.next();
      }
    };

    const handleSongChange = () => {
      if (trackToTrashRef.current) {
        store.toggleSongTrash(trackToTrashRef.current, true);
        trackToTrashRef.current = null;
      }
    };

    Spicetify.Mousetrap.bind("ctrl+right", handleTrashAndNext);

    Spicetify.Player.addEventListener("songchange", handleSongChange);

    return () => {
      Spicetify.Mousetrap.unbind("ctrl+right");
      Spicetify.Player.removeEventListener("songchange", handleSongChange);
    };
  }, [store.trashbinEnabled, store.trashOnNextHotkey, store.toggleSongTrash]);
};
