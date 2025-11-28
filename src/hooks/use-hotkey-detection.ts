import { useEffect, useRef } from "react";
import { useTrashbinStore } from "../store/trashbin-store";

export const useHotkeyDetection = () => {
  const store = useTrashbinStore();
  const trackToTrashRef = useRef<string | null>(null);

  useEffect(() => {
    if (!store.trashbinEnabled || !store.trashOnNextHotkey) return;

    const handleTrashAndNext = () => {
      console.log("Hotkey detected: Trash and Next");
      const currentTrack = Spicetify.Player.data?.item;
      if (currentTrack?.uri) {
        trackToTrashRef.current = currentTrack.uri;
        Spicetify.Player.next();
      }
    };

    const handleSongChange = () => {
      console.log("Song changed");
      if (trackToTrashRef.current) {
        store.toggleSongTrash(trackToTrashRef.current, true);
        trackToTrashRef.current = null;
      }
    };

    // Register shortcut using Spicetify.Mousetrap (like the example code)
    Spicetify.Mousetrap.bind("ctrl+shift+right", handleTrashAndNext);

    // Listen for song changes
    Spicetify.Player.addEventListener("songchange", handleSongChange);

    return () => {
      Spicetify.Mousetrap.unbind("ctrl+shift+right");
      Spicetify.Player.removeEventListener("songchange", handleSongChange);
    };
  }, [store.trashbinEnabled, store.trashOnNextHotkey, store.toggleSongTrash]);
};
