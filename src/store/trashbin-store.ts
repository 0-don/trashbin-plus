import { create } from "zustand";
import { i18n } from "../components/providers/providers";
import { shouldSkipTrack } from "../lib/track-utils";

export const STORAGE_KEYS = {
  ENABLED: "trashbin-enabled",
  WIDGET: "TrashbinWidgetIcon",
  SONGS: "TrashSongList",
  ARTISTS: "TrashArtistList",
  AUTOPLAY_ON_START: "trashbin-autoplay-on-start",
  QUEUE_TRASHBIN: "trashbin-queue-enabled",
  TRACKLIST_TRASHBIN: "trashbin-tracklist-enabled",
  SKIP_TRASHED_TRACKS: "trashbin-skip-trashed-tracks",
  AUTO_CLEAN_QUEUE: "trashbin-auto-clean-queue",
  PLAYLIST_MONITOR: "trashbin-playlist-monitor",
  REMOTE_TOGGLE_ENABLED: "trashbin-remote-toggle-enabled",
  REMOTE_SKIPPING_ENABLED: "trashbin-remote-skipping-enabled",
  TRASH_VIA_LIKE: "trashbin-trash-via-like",
  AI_DETECTION: "trashbin-ai-detection",
  TRASH_AI_SONGS: "trashbin-trash-ai-songs",
} as const;

interface TrashbinState {
  // Core state
  trashbinEnabled: boolean;
  widgetEnabled: boolean;
  autoplayOnStart: boolean;
  queueTrashbinEnabled: boolean;
  tracklistTrashbinEnabled: boolean;
  skipTrashedTracks: boolean;
  autoCleanQueue: boolean;
  playlistMonitorEnabled: boolean;
  trashSongList: Record<string, boolean>;
  trashArtistList: Record<string, boolean>;
  userHitBack: boolean;
  remoteToggleEnabled: boolean;
  remoteSkippingEnabled: boolean;
  trashViaLikeEnabled: boolean;

  // AI Detection
  aiDetectionEnabled: boolean;
  trashAiSongs: boolean;

  // Actions
  initializeFromStorage: () => void;
  setTrashbinEnabled: (enabled: boolean) => void;
  setWidgetEnabled: (enabled: boolean) => void;
  setAutoplayOnStart: (enabled: boolean) => void;
  setQueueTrashbinEnabled: (enabled: boolean) => void;
  setTracklistTrashbinEnabled: (enabled: boolean) => void;
  setSkipTrashedTracks: (enabled: boolean) => void;
  setAutoCleanQueue: (enabled: boolean) => void;
  setPlaylistMonitorEnabled: (enabled: boolean) => void;
  setUserHitBack: (hitBack: boolean) => void;
  setRemoteToggleEnabled: (enabled: boolean) => void;
  setRemoteSkippingEnabled: (enabled: boolean) => void;
  toggleRemoteSkipping: () => void;
  setTrashViaLikeEnabled: (enabled: boolean) => void;

  // AI Detection actions
  setAiDetectionEnabled: (enabled: boolean) => void;
  setTrashAiSongs: (enabled: boolean) => void;

  // Unified actions
  toggleSongTrash: (uri: string, showNotification?: boolean) => void;
  toggleArtistTrash: (uri: string, showNotification?: boolean) => void;
  getTrashStatus: (uri: string) => { isTrashed: boolean; type: string };

  // Data management
  importTrashData: (
    songs: Record<string, boolean>,
    artists: Record<string, boolean>,
  ) => void;
  clearTrashbin: () => void;
  exportData: () => {
    songs: Record<string, boolean>;
    artists: Record<string, boolean>;
  };
}

function initValue<T>(item: string, defaultValue: T): T {
  try {
    const value = Spicetify.LocalStorage.get(item);
    return value ? (JSON.parse(value) ?? defaultValue) : defaultValue;
  } catch {
    return defaultValue;
  }
}

export const useTrashbinStore = create<TrashbinState>((set, get) => ({
  // Initial state
  trashbinEnabled: true,
  widgetEnabled: true,
  autoplayOnStart: false,
  queueTrashbinEnabled: true,
  tracklistTrashbinEnabled: true,
  skipTrashedTracks: true,
  autoCleanQueue: false,
  playlistMonitorEnabled: true,
  trashSongList: {},
  trashArtistList: {},
  userHitBack: false,
  remoteToggleEnabled: false,
  remoteSkippingEnabled: false,
  trashViaLikeEnabled: false,
  aiDetectionEnabled: false,
  trashAiSongs: false,

  // Initialize from localStorage
  initializeFromStorage: () => {
    set({
      trashbinEnabled: initValue(STORAGE_KEYS.ENABLED, true),
      widgetEnabled: initValue(STORAGE_KEYS.WIDGET, true),
      trashSongList: initValue(STORAGE_KEYS.SONGS, {}),
      trashArtistList: initValue(STORAGE_KEYS.ARTISTS, {}),
      autoplayOnStart: initValue(STORAGE_KEYS.AUTOPLAY_ON_START, false),
      queueTrashbinEnabled: initValue(STORAGE_KEYS.QUEUE_TRASHBIN, true),
      tracklistTrashbinEnabled: initValue(
        STORAGE_KEYS.TRACKLIST_TRASHBIN,
        true,
      ),
      skipTrashedTracks: initValue(STORAGE_KEYS.SKIP_TRASHED_TRACKS, true),
      autoCleanQueue: initValue(STORAGE_KEYS.AUTO_CLEAN_QUEUE, false),
      playlistMonitorEnabled: initValue(STORAGE_KEYS.PLAYLIST_MONITOR, true),
      remoteToggleEnabled: initValue(STORAGE_KEYS.REMOTE_TOGGLE_ENABLED, false),
      remoteSkippingEnabled: initValue(
        STORAGE_KEYS.REMOTE_SKIPPING_ENABLED,
        false,
      ),
      trashViaLikeEnabled: initValue(STORAGE_KEYS.TRASH_VIA_LIKE, false),
      aiDetectionEnabled: initValue(STORAGE_KEYS.AI_DETECTION, false),
      trashAiSongs: initValue(STORAGE_KEYS.TRASH_AI_SONGS, false),
    });
  },

  setTrashbinEnabled: (enabled: boolean) => {
    set({ trashbinEnabled: enabled });
    Spicetify.LocalStorage.set(STORAGE_KEYS.ENABLED, JSON.stringify(enabled));
  },

  setWidgetEnabled: (enabled: boolean) => {
    set({ widgetEnabled: enabled });
    Spicetify.LocalStorage.set(STORAGE_KEYS.WIDGET, JSON.stringify(enabled));
  },

  setAutoplayOnStart: (enabled: boolean) => {
    set({ autoplayOnStart: enabled });
    Spicetify.LocalStorage.set(
      STORAGE_KEYS.AUTOPLAY_ON_START,
      JSON.stringify(enabled),
    );
  },

  setQueueTrashbinEnabled: (enabled: boolean) => {
    set({ queueTrashbinEnabled: enabled });
    Spicetify.LocalStorage.set(
      STORAGE_KEYS.QUEUE_TRASHBIN,
      JSON.stringify(enabled),
    );
  },

  setTracklistTrashbinEnabled: (enabled: boolean) => {
    set({ tracklistTrashbinEnabled: enabled });
    Spicetify.LocalStorage.set(
      STORAGE_KEYS.TRACKLIST_TRASHBIN,
      JSON.stringify(enabled),
    );
  },

  setSkipTrashedTracks: (enabled: boolean) => {
    set({ skipTrashedTracks: enabled });
    Spicetify.LocalStorage.set(
      STORAGE_KEYS.SKIP_TRASHED_TRACKS,
      JSON.stringify(enabled),
    );
  },

  setAutoCleanQueue: (enabled: boolean) => {
    set({ autoCleanQueue: enabled });
    Spicetify.LocalStorage.set(
      STORAGE_KEYS.AUTO_CLEAN_QUEUE,
      JSON.stringify(enabled),
    );
  },

  setPlaylistMonitorEnabled: (enabled: boolean) => {
    set({ playlistMonitorEnabled: enabled });
    Spicetify.LocalStorage.set(
      STORAGE_KEYS.PLAYLIST_MONITOR,
      JSON.stringify(enabled),
    );
  },

  setUserHitBack: (hitBack: boolean) => set({ userHitBack: hitBack }),

  setRemoteToggleEnabled: (enabled: boolean) => {
    set({ remoteToggleEnabled: enabled });
    Spicetify.LocalStorage.set(
      STORAGE_KEYS.REMOTE_TOGGLE_ENABLED,
      JSON.stringify(enabled),
    );
  },

  setRemoteSkippingEnabled: (enabled: boolean) => {
    set({ remoteSkippingEnabled: enabled });
    Spicetify.LocalStorage.set(
      STORAGE_KEYS.REMOTE_SKIPPING_ENABLED,
      JSON.stringify(enabled),
    );
  },

  toggleRemoteSkipping: () => {
    const state = get();
    const newValue = !state.remoteSkippingEnabled;
    set({ remoteSkippingEnabled: newValue });
    Spicetify.LocalStorage.set(
      STORAGE_KEYS.REMOTE_SKIPPING_ENABLED,
      JSON.stringify(newValue),
    );
  },

  setTrashViaLikeEnabled: (enabled: boolean) => {
    set({ trashViaLikeEnabled: enabled });
    Spicetify.LocalStorage.set(
      STORAGE_KEYS.TRASH_VIA_LIKE,
      JSON.stringify(enabled),
    );
  },

  setAiDetectionEnabled: (enabled: boolean) => {
    set({ aiDetectionEnabled: enabled });
    Spicetify.LocalStorage.set(
      STORAGE_KEYS.AI_DETECTION,
      JSON.stringify(enabled),
    );
  },

  setTrashAiSongs: (enabled: boolean) => {
    set({ trashAiSongs: enabled });
    Spicetify.LocalStorage.set(
      STORAGE_KEYS.TRASH_AI_SONGS,
      JSON.stringify(enabled),
    );
  },

  toggleSongTrash: (uri: string, showNotification = true) => {
    const state = get();
    const isTrashed = !!state.trashSongList[uri];
    const newList = { ...state.trashSongList };

    if (isTrashed) {
      delete newList[uri];
      if (showNotification) {
        Spicetify.showNotification(i18n.t("MESSAGE_SONG_REMOVED"));
      }
    } else {
      newList[uri] = true;
      if (showNotification) {
        Spicetify.showNotification(i18n.t("MESSAGE_SONG_ADDED"));
      }

      const currentSpotifyTrack = Spicetify.Player.data?.item;
      if (
        state.trashbinEnabled &&
        currentSpotifyTrack &&
        shouldSkipTrack(uri, Spicetify.URI.Type.TRACK)
      ) {
        Spicetify.Player.next();
      }
    }

    set({ trashSongList: newList });
    Spicetify.LocalStorage.set(STORAGE_KEYS.SONGS, JSON.stringify(newList));
  },

  toggleArtistTrash: (uri: string, showNotification = true) => {
    const state = get();
    const isTrashed = !!state.trashArtistList[uri];
    const newList = { ...state.trashArtistList };

    if (isTrashed) {
      delete newList[uri];
      if (showNotification) {
        Spicetify.showNotification(i18n.t("MESSAGE_ARTIST_REMOVED"));
      }
    } else {
      newList[uri] = true;
      if (showNotification) {
        Spicetify.showNotification(i18n.t("MESSAGE_ARTIST_ADDED"));
      }

      const currentSpotifyTrack = Spicetify.Player.data?.item;
      if (
        state.trashbinEnabled &&
        currentSpotifyTrack &&
        shouldSkipTrack(uri, Spicetify.URI.Type.ARTIST)
      ) {
        Spicetify.Player.next();
      }
    }

    set({ trashArtistList: newList });
    Spicetify.LocalStorage.set(STORAGE_KEYS.ARTISTS, JSON.stringify(newList));
  },

  getTrashStatus: (uri: string) => {
    const state = get();
    const uriObj = Spicetify.URI.fromString(uri);
    const isTrashed =
      uriObj.type === Spicetify.URI.Type.TRACK
        ? !!state.trashSongList[uri]
        : !!state.trashArtistList[uri];

    return { isTrashed, type: uriObj.type };
  },

  importTrashData: (
    songs: Record<string, boolean>,
    artists: Record<string, boolean>,
  ) => {
    set({ trashSongList: songs, trashArtistList: artists });
    Spicetify.LocalStorage.set(STORAGE_KEYS.SONGS, JSON.stringify(songs));
    Spicetify.LocalStorage.set(STORAGE_KEYS.ARTISTS, JSON.stringify(artists));
  },

  clearTrashbin: () => {
    const emptyList = {};
    set({ trashSongList: emptyList, trashArtistList: emptyList });
    Spicetify.LocalStorage.set(STORAGE_KEYS.SONGS, JSON.stringify(emptyList));
    Spicetify.LocalStorage.set(STORAGE_KEYS.ARTISTS, JSON.stringify(emptyList));
  },

  exportData: () => {
    const state = get();
    return { songs: state.trashSongList, artists: state.trashArtistList };
  },
}));
