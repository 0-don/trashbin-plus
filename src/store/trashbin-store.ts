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
  TRASH_ON_NEXT_HOTKEY: "trashbin-trash-on-next-hotkey",
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
  trashOnNextHotkey: boolean;
  trashSongList: Record<string, boolean>;
  trashArtistList: Record<string, boolean>;
  userHitBack: boolean;

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
  setTrashOnNextHotkey: (enabled: boolean) => void;
  setUserHitBack: (hitBack: boolean) => void;

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
  skipTrashedTracks: false,
  autoCleanQueue: false,
  playlistMonitorEnabled: true,
  trashOnNextHotkey: false,
  trashSongList: {},
  trashArtistList: {},
  userHitBack: false,

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
      skipTrashedTracks: initValue(STORAGE_KEYS.SKIP_TRASHED_TRACKS, false),
      autoCleanQueue: initValue(STORAGE_KEYS.AUTO_CLEAN_QUEUE, false),
      playlistMonitorEnabled: initValue(STORAGE_KEYS.PLAYLIST_MONITOR, true),
      trashOnNextHotkey: initValue(STORAGE_KEYS.TRASH_ON_NEXT_HOTKEY, false),
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

  setTrashOnNextHotkey: (enabled: boolean) => {
    set({ trashOnNextHotkey: enabled });
    Spicetify.LocalStorage.set(
      STORAGE_KEYS.TRASH_ON_NEXT_HOTKEY,
      JSON.stringify(enabled),
    );
  },

  setUserHitBack: (hitBack: boolean) => set({ userHitBack: hitBack }),

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
