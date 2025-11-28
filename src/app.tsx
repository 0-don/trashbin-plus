import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { TrashbinQueuelist } from "./components/features/injections/trashbin-queuelist";
import { TrashbinTracklist } from "./components/features/injections/trashbin-tracklist";
import { TrashbinContextMenu } from "./components/features/trashbin-context-menu";
import { TrashbinWidget } from "./components/features/trashbin-widget";
import { Providers } from "./components/providers/providers";
import { TrashbinSettings } from "./components/ui/settings-modal";
import { TrashedItemsModal } from "./components/ui/trashed-items-modal";
import "./global.css";
import { useHotkeyDetection } from "./hooks/use-hotkey-detection";
import { SELECTORS } from "./lib/constants";
import { PlaylistMonitor } from "./lib/playlist-monitor";
import {
  isTrackEffectivelyTrashed,
  manageSmartShuffleQueue,
  skipToNextAllowedTrack,
} from "./lib/track-utils";
import { useTrashbinStore } from "./store/trashbin-store";

// Global instance
let playlistMonitor: PlaylistMonitor | null = null;

function App() {
  const trashbinStore = useTrashbinStore();
  useHotkeyDetection();

  console.log("trashbin+ loaded!");

  useEffect(() => {
    trashbinStore.initializeFromStorage();
  }, [trashbinStore.initializeFromStorage]);

  useEffect(() => {
    if (trashbinStore.autoplayOnStart && !Spicetify.Player.isPlaying())
      setTimeout(Spicetify.Player.play);
  }, [trashbinStore.autoplayOnStart]);

  useEffect(() => {
    if (trashbinStore.playlistMonitorEnabled && !playlistMonitor) {
      playlistMonitor = new PlaylistMonitor();
    } else if (!trashbinStore.playlistMonitorEnabled && playlistMonitor) {
      playlistMonitor.destroy();
      playlistMonitor = null;
    }

    return () => {
      if (playlistMonitor) {
        playlistMonitor.destroy();
        playlistMonitor = null;
      }
    };
  }, [trashbinStore.playlistMonitorEnabled]);

  useEffect(() => {
    if (!trashbinStore.trashbinEnabled) return;

    const skipBackBtn =
      document.querySelector(SELECTORS.SKIP_BACK_BUTTON) ??
      document.querySelector(SELECTORS.SKIP_BACK_BUTTON_ALT);

    const eventListener = () => trashbinStore.setUserHitBack(true);

    const handleSongChange = () => {
      const track = Spicetify.Player.data?.item;
      const state = useTrashbinStore.getState();

      if (
        Spicetify.Platform.ConnectAPI.state.activeDevice.id !== "local_device"
      ) {
        return;
      }

      if (state.userHitBack) {
        trashbinStore.setUserHitBack(false);
        return;
      }
      if (
        isTrackEffectivelyTrashed(
          track,
          state.trashSongList,
          state.trashArtistList,
        )
      ) {
        skipToNextAllowedTrack();
        manageSmartShuffleQueue();
      }
    };

    skipBackBtn?.addEventListener("click", eventListener);
    Spicetify.Player.addEventListener("songchange", handleSongChange);

    return () => {
      skipBackBtn?.removeEventListener("click", eventListener);
      Spicetify.Player.removeEventListener("songchange", handleSongChange);
    };
  }, [
    trashbinStore.trashbinEnabled,
    trashbinStore.setUserHitBack,
    skipToNextAllowedTrack,
  ]);

  return (
    <>
      <Providers>
        <TrashbinWidget />
        <TrashbinSettings />
        <TrashedItemsModal />
        <TrashbinContextMenu />
        <TrashbinTracklist />
        <TrashbinQueuelist />
      </Providers>
    </>
  );
}

async function main() {
  const appRoot = document.createElement("div");
  appRoot.id = "trashbin-plus-root";
  appRoot.className = "fixed top-0 left-0 z-50 pointer-events-none";

  document.body.appendChild(appRoot);
  ReactDOM.render(<App />, appRoot);

  return () => {
    if (playlistMonitor) {
      playlistMonitor.destroy();
    }
    ReactDOM.unmountComponentAtNode(appRoot);
    appRoot.remove();
  };
}

export default main;
