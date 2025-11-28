interface PlaylistMonitorState {
  currentPlaylistUri: string | null;
  monitorInterval: number | null;
}

export class PlaylistMonitor {
  private state: PlaylistMonitorState = {
    currentPlaylistUri: null,
    monitorInterval: null,
  };

  private readonly MONITOR_INTERVAL = 3000;
  private readonly STORAGE_KEY = "trashbin-playlist-monitor";

  constructor() {
    this.loadState();
    this.setupEventListeners();
    this.startMonitoring();
  }

  private loadState(): void {
    try {
      const stored = Spicetify.LocalStorage.get(this.STORAGE_KEY);
      if (stored) {
        const parsedState = JSON.parse(stored);
        this.state.currentPlaylistUri = parsedState.currentPlaylistUri;
      }
    } catch (error) {
      console.error("PlaylistMonitor: Failed to load state:", error);
    }
  }

  private saveState(): void {
    try {
      Spicetify.LocalStorage.set(
        this.STORAGE_KEY,
        JSON.stringify({ currentPlaylistUri: this.state.currentPlaylistUri }),
      );
    } catch (error) {
      console.error("PlaylistMonitor: Failed to save state:", error);
    }
  }

  private setupEventListeners(): void {
    Spicetify.Player.addEventListener(
      "songchange",
      this.handleSongChange.bind(this),
    );
  }

  private handleSongChange(): void {
    const contextUri = Spicetify.Player.data?.context?.uri;
    if (contextUri && Spicetify.URI.isPlaylistV1OrV2(contextUri)) {
      this.state.currentPlaylistUri = contextUri;
      this.saveState();
    }
  }

  private async resumeLastPlaylist(): Promise<void> {
    if (!this.state.currentPlaylistUri) return;

    try {
      await Spicetify.Player.playUri(this.state.currentPlaylistUri);
    } catch (error) {
      console.error("PlaylistMonitor: Failed to resume playlist:", error);
    }
  }

  private checkPlaybackStatus(): void {
    const playerData = Spicetify.Player.data;
    const isPlaying = Spicetify.Player.isPlaying();
    const hasContext = !!playerData?.context?.uri;
    const hasItem = !!playerData?.item;

    // Resume if Spotify is in broken state (playing but no content)
    if (this.state.currentPlaylistUri && isPlaying && !hasContext && !hasItem) {
      this.resumeLastPlaylist();
    }
  }

  private startMonitoring(): void {
    if (this.state.monitorInterval) {
      clearInterval(this.state.monitorInterval);
    }

    this.state.monitorInterval = setInterval(() => {
      this.checkPlaybackStatus();
    }, this.MONITOR_INTERVAL);
  }

  public destroy(): void {
    if (this.state.monitorInterval) {
      clearInterval(this.state.monitorInterval);
      this.state.monitorInterval = null;
    }

    Spicetify.Player.removeEventListener(
      "songchange",
      this.handleSongChange.bind(this),
    );
  }
}
