import React from "react";
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
    await Spicetify.Platform.PlaylistAPI.getContents(playlistUri, {
      limit: 9999999,
    });
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
      const onCancel = () => {
        Spicetify.PopupModal.hide();
        resolve(false);
      };
      const onConfirm = () => {
        Spicetify.PopupModal.hide();
        resolve(true);
      };

      const temp = document.createElement("div");
      temp.innerHTML = Spicetify.ReactDOMServer.renderToString(
        <div className="p-4">
          <p className="mb-4">
            {t("CONFIRM_REMOVE_TRASHED", { count: trashedItems.length })}
          </p>
          <div className="flex justify-end gap-2">
            <button
              data-action="cancel"
              className="cursor-pointer rounded-full border border-[#727272] bg-transparent px-4 py-2 font-bold text-(--spice-text)"
            >
              {t("ACTION_CANCEL")}
            </button>
            <button
              data-action="confirm"
              className="cursor-pointer rounded-full border-none bg-[#e74c3c] px-4 py-2 font-bold text-white"
            >
              {t("ACTION_REMOVE")}
            </button>
          </div>
        </div>,
      );
      const content = temp.firstElementChild as HTMLElement;
      content.querySelector('[data-action="cancel"]')!.addEventListener("click", onCancel);
      content.querySelector('[data-action="confirm"]')!.addEventListener("click", onConfirm);

      Spicetify.PopupModal.display({
        title: t("ACTION_REMOVE_TRASHED"),
        content,
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
