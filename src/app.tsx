import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { AiDetectionWidget } from "./components/features/ai-detection-widget";
import { AutoAddRecommendations } from "./components/features/injections/auto-add-recommendations";
import { TrashbinQueuelist } from "./components/features/injections/trashbin-queuelist";
import { TrashbinTracklist } from "./components/features/injections/trashbin-tracklist";
import { PlaylistCleanupContextMenu } from "./components/features/playlist-cleanup-context-menu";
import { TrashbinContextMenu } from "./components/features/trashbin-context-menu";
import { TrashbinWidget } from "./components/features/trashbin-widget";
import { Providers } from "./components/providers/providers";
import { TrashbinSettings } from "./components/ui/settings-modal";
import { TrashedItemsModal } from "./components/ui/trashed-items-modal";
import "./global.css";
import { useAiDetection } from "./hooks/use-ai-detection";
import { usePlaylistMonitor } from "./hooks/use-playlist-monitor";
import { useRecommendationMonitor } from "./hooks/use-recommendation-monitor";
import { useRemoteToggle } from "./hooks/use-remote-toggle";
import { SELECTORS } from "./lib/constants";
import {
  isTrackEffectivelyTrashed,
  manageSmartShuffleQueue,
  skipToNextAllowedTrack,
} from "./lib/track-utils";
import { useTrashbinStore } from "./store/trashbin-store";

function App() {
  console.log("trashbin+ loaded v1.1.0!");

  const trashbinStore = useTrashbinStore();

  usePlaylistMonitor();
  useRemoteToggle();
  useRecommendationMonitor();
  useAiDetection();

  useEffect(() => {
    trashbinStore.initializeFromStorage();
  }, [trashbinStore.initializeFromStorage]);

  useEffect(() => {
    if (trashbinStore.autoplayOnStart && !Spicetify.Player.isPlaying()) {
      setTimeout(Spicetify.Player.play, 5000);
      setTimeout(Spicetify.Player.play, 60000);
    }
  }, [trashbinStore.autoplayOnStart]);

  useEffect(() => {
    if (!trashbinStore.trashbinEnabled) return;

    const skipBackBtn =
      document.querySelector(SELECTORS.SKIP_BACK_BUTTON) ??
      document.querySelector(SELECTORS.SKIP_BACK_BUTTON_ALT);

    const eventListener = () => trashbinStore.setUserHitBack(true);

    const handleSongChange = async () => {
      const track = Spicetify.Player.data?.item;
      const state = useTrashbinStore.getState();

      const isLocalDevice =
        Spicetify.Platform.ConnectAPI.state.activeDevice.id === "local_device";
      if (!isLocalDevice && !state.remoteSkippingEnabled) {
        return;
      }

      if (state.userHitBack) {
        trashbinStore.setUserHitBack(false);
        return;
      }

      if (state.autoCleanQueue) {
        manageSmartShuffleQueue();
      }

      if (state.skipTrashedTracks && isTrackEffectivelyTrashed(track)) {
        skipToNextAllowedTrack();
      }
    };

    skipBackBtn?.addEventListener("click", eventListener);
    Spicetify.Player.addEventListener("songchange", handleSongChange);

    return () => {
      skipBackBtn?.removeEventListener("click", eventListener);
      Spicetify.Player.removeEventListener("songchange", handleSongChange);
    };
  }, [trashbinStore.trashbinEnabled]);

  return (
    <>
      <Providers>
        <AiDetectionWidget />
        <TrashbinWidget />
        <TrashbinSettings />
        <TrashedItemsModal />
        <TrashbinContextMenu />
        <PlaylistCleanupContextMenu />

        <TrashbinTracklist />
        <TrashbinQueuelist />
        <AutoAddRecommendations />
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
    ReactDOM.unmountComponentAtNode(appRoot);
    appRoot.remove();
  };
}

export default main;
