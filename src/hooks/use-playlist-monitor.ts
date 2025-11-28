import { useCallback, useEffect, useRef } from "react";

const MONITOR_INTERVAL = 3000;
const STORAGE_KEY = "trashbin-playlist-monitor";

interface PlaylistMonitorState {
  currentPlaylistUri: string | null;
}

export function usePlaylistMonitor(enabled: boolean) {
  const intervalRef = useRef<number | null>(null);
  const stateRef = useRef<PlaylistMonitorState>({ currentPlaylistUri: null });

  const loadState = useCallback((): void => {
    try {
      const stored = Spicetify.LocalStorage.get(STORAGE_KEY);
      if (stored) {
        const parsedState = JSON.parse(stored);
        stateRef.current.currentPlaylistUri = parsedState.currentPlaylistUri;
      }
    } catch (error) {
      console.error("usePlaylistMonitor: Failed to load state:", error);
    }
  }, []);

  const saveState = useCallback((): void => {
    try {
      Spicetify.LocalStorage.set(
        STORAGE_KEY,
        JSON.stringify({
          currentPlaylistUri: stateRef.current.currentPlaylistUri,
        }),
      );
    } catch (error) {
      console.error("usePlaylistMonitor: Failed to save state:", error);
    }
  }, []);

  const handleSongChange = useCallback((): void => {
    const contextUri = Spicetify.Player.data?.context?.uri;
    if (contextUri && Spicetify.URI.isPlaylistV1OrV2(contextUri)) {
      stateRef.current.currentPlaylistUri = contextUri;
      saveState();
    }
  }, [saveState]);

  const resumeLastPlaylist = useCallback(async (): Promise<void> => {
    if (!stateRef.current.currentPlaylistUri) return;

    try {
      await Spicetify.Player.playUri(stateRef.current.currentPlaylistUri);
    } catch (error) {
      console.error("usePlaylistMonitor: Failed to resume playlist:", error);
    }
  }, []);

  const checkPlaybackStatus = useCallback((): void => {
    const playerData = Spicetify.Player.data;
    const isPlaying = Spicetify.Player.isPlaying();
    const hasContext = !!playerData?.context?.uri;
    const hasItem = !!playerData?.item;

    // Resume if Spotify is in broken state (playing but no content)
    if (
      stateRef.current.currentPlaylistUri &&
      isPlaying &&
      !hasContext &&
      !hasItem
    ) {
      resumeLastPlaylist();
    }
  }, [resumeLastPlaylist]);

  const startMonitoring = useCallback((): void => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(checkPlaybackStatus, MONITOR_INTERVAL);
  }, [checkPlaybackStatus]);

  const stopMonitoring = useCallback((): void => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Initialize state on mount
  useEffect(() => {
    loadState();
  }, [loadState]);

  // Setup/teardown event listeners and monitoring
  useEffect(() => {
    if (!enabled) {
      stopMonitoring();
      Spicetify.Player.removeEventListener("songchange", handleSongChange);
      return;
    }

    Spicetify.Player.addEventListener("songchange", handleSongChange);
    startMonitoring();

    return () => {
      stopMonitoring();
      Spicetify.Player.removeEventListener("songchange", handleSongChange);
    };
  }, [enabled, handleSongChange, startMonitoring, stopMonitoring]);
}
