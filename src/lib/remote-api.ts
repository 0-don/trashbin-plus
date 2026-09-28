import { i18n } from "../components/providers/providers";
import { useTrashbinStore } from "../store/trashbin-store";

const currentTrack = () => Spicetify.Player.data?.item;

const commands: Record<string, () => unknown> = {
  next: () => Spicetify.Player.next(),
  previous: () => Spicetify.Player.back(),
  "play-pause": () => Spicetify.Player.togglePlay(),
  "like-song": () => Spicetify.Player.toggleHeart(),
  "volume-up": () =>
    Spicetify.Player.setVolume(Math.min(1, Spicetify.Player.getVolume() + 0.1)),
  "volume-down": () =>
    Spicetify.Player.setVolume(Math.max(0, Spicetify.Player.getVolume() - 0.1)),
  "trash-song": () => {
    const uri = currentTrack()?.uri;
    if (uri) useTrashbinStore.getState().toggleSongTrash(uri);
  },
  "trash-artist": () => {
    const uri = currentTrack()?.artists?.[0]?.uri;
    if (uri) useTrashbinStore.getState().toggleArtistTrash(uri);
  },
  "toggle-trashbin": () => {
    const enabled = !useTrashbinStore.getState().trashbinEnabled;
    useTrashbinStore.getState().setTrashbinEnabled(enabled);
    Spicetify.showNotification(
      i18n.t(enabled ? "MESSAGE_TRASHBIN_ENABLED" : "MESSAGE_TRASHBIN_DISABLED"),
    );
  },
};

export const remoteApi = {
  commands,
  run: (name: string) => {
    const command = commands[name];
    if (!command) {
      throw new Error(
        `Unknown command "${name}". Available: ${Object.keys(commands).join(", ")}`,
      );
    }
    return command();
  },
};

export const registerRemoteApi = () => {
  window.trashbinPlus = remoteApi;
};
