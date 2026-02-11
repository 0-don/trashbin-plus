import { TFunction } from "i18next";
import { useTrashbinStore } from "../store/trashbin-store";

interface PlaylistItem {
  uri: string;
  uid: string;
  artists?: { uri: string }[];
  metadata?: Record<string, string>;
}

interface PlaylistContents {
  items: PlaylistItem[];
}

function isPlaylistItemTrashed(item: PlaylistItem): boolean {
  const state = useTrashbinStore.getState();

  if (!item.uri || !item.uri.startsWith("spotify:track:")) return false;

  if (state.trashSongList[item.uri]) return true;

  const artistUris = new Set<string>();

  if (item.artists) {
    for (const artist of item.artists) {
      if (artist?.uri) artistUris.add(artist.uri);
    }
  }

  if (item.metadata?.artist_uri) artistUris.add(item.metadata.artist_uri);

  let metaIndex = 1;
  while (item.metadata?.[`artist_uri:${metaIndex}`]) {
    artistUris.add(item.metadata[`artist_uri:${metaIndex}`]);
    metaIndex++;
  }

  for (const artistUri of artistUris) {
    if (state.trashArtistList[artistUri]) return true;
  }

  return false;
}

async function getPlaylistContents(
  playlistUri: string,
): Promise<PlaylistItem[]> {
  const contents: PlaylistContents =
    await Spicetify.Platform.PlaylistAPI.getContents(playlistUri);
  return contents.items || [];
}

export async function removeTrashedFromPlaylist(
  playlistUri: string,
  t: TFunction,
): Promise<void> {
  try {
    const items = await getPlaylistContents(playlistUri);
    const trashedItems = items.filter(isPlaylistItemTrashed);

    if (trashedItems.length === 0) {
      Spicetify.showNotification(t("MESSAGE_NO_TRASHED_IN_PLAYLIST"));
      return;
    }

    const confirmed = await new Promise<boolean>((resolve) => {
      Spicetify.PopupModal.display({
        title: t("ACTION_REMOVE_TRASHED"),
        content: (() => {
          const container = document.createElement("div");
          container.style.padding = "16px";

          const message = document.createElement("p");
          message.style.marginBottom = "16px";
          message.textContent = t("CONFIRM_REMOVE_TRASHED", {
            count: trashedItems.length,
          });
          container.appendChild(message);

          const buttonRow = document.createElement("div");
          buttonRow.style.display = "flex";
          buttonRow.style.justifyContent = "flex-end";
          buttonRow.style.gap = "8px";

          const cancelBtn = document.createElement("button");
          cancelBtn.textContent = t("ACTION_CANCEL");
          cancelBtn.style.cssText =
            "padding: 8px 16px; border-radius: 9999px; border: 1px solid #727272; background: transparent; color: var(--spice-text); cursor: pointer; font-weight: bold;";
          cancelBtn.onclick = () => {
            Spicetify.PopupModal.hide();
            resolve(false);
          };

          const confirmBtn = document.createElement("button");
          confirmBtn.textContent = t("ACTION_REMOVE");
          confirmBtn.style.cssText =
            "padding: 8px 16px; border-radius: 9999px; border: none; background: #e74c3c; color: white; cursor: pointer; font-weight: bold;";
          confirmBtn.onclick = () => {
            Spicetify.PopupModal.hide();
            resolve(true);
          };

          buttonRow.appendChild(cancelBtn);
          buttonRow.appendChild(confirmBtn);
          container.appendChild(buttonRow);

          return container;
        })(),
      });
    });

    if (!confirmed) return;

    await Spicetify.Platform.PlaylistAPI.remove(
      playlistUri,
      trashedItems.map((item) => ({ uri: item.uri, uid: item.uid })),
    );

    Spicetify.showNotification(
      t("MESSAGE_REMOVE_TRASHED_SUCCESS", { count: trashedItems.length }),
    );
  } catch (err) {
    // remove failed
    Spicetify.showNotification(t("MESSAGE_REMOVE_TRASHED_FAILED"), true);
  }
}
