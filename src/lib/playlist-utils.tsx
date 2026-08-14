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

export async function getPlaylistTrashCounts(
  playlistUri: string,
): Promise<{ total: number; trashed: number; untrashed: number }> {
  const tracks = (await getPlaylistContents(playlistUri)).filter((item) =>
    item.uri?.startsWith("spotify:track:"),
  );
  const trashed = tracks.filter(isPlaylistItemTrashed).length;

  return {
    total: tracks.length,
    trashed,
    untrashed: tracks.length - trashed,
  };
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

function confirmDialog(
  t: TFunction,
  title: string,
  message: string,
  confirmLabel: string,
): Promise<boolean> {
  return new Promise<boolean>((resolve) => {
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
        <p className="mb-4">{message}</p>
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
            {confirmLabel}
          </button>
        </div>
      </div>,
    );
    const content = temp.firstElementChild as HTMLElement;
    content
      .querySelector('[data-action="cancel"]')!
      .addEventListener("click", onCancel);
    content
      .querySelector('[data-action="confirm"]')!
      .addEventListener("click", onConfirm);

    Spicetify.PopupModal.display({ title, content });
  });
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

    const confirmed = await confirmDialog(
      t,
      t("ACTION_REMOVE_TRASHED"),
      t("CONFIRM_REMOVE_TRASHED", { count: trashedItems.length }),
      t("ACTION_REMOVE"),
    );

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

export async function toggleTrashForPlaylist(
  playlistUri: string,
  t: TFunction,
): Promise<void> {
  try {
    const tracks = (await getPlaylistContents(playlistUri)).filter((item) =>
      item.uri?.startsWith("spotify:track:"),
    );

    if (tracks.length === 0) {
      Spicetify.showNotification(t("MESSAGE_PLAYLIST_EMPTY"));
      return;
    }

    const state = useTrashbinStore.getState();
    const uris = Array.from(new Set(tracks.map((item) => item.uri)));
    const untrashed = uris.filter((uri) => !state.trashSongList[uri]);
    const trashAll = untrashed.length > 0;
    const count = trashAll ? untrashed.length : uris.length;

    const confirmed = await confirmDialog(
      t,
      trashAll ? t("ACTION_TRASH_ALL") : t("ACTION_RESTORE_ALL"),
      trashAll
        ? t("CONFIRM_TRASH_ALL", { count })
        : t("CONFIRM_RESTORE_ALL", { count }),
      trashAll ? t("ACTION_THROW") : t("ACTION_UNTHROW"),
    );

    if (!confirmed) return;

    const songs = { ...useTrashbinStore.getState().trashSongList };
    for (const uri of uris) {
      if (trashAll) songs[uri] = true;
      else delete songs[uri];
    }

    await useTrashbinStore
      .getState()
      .importTrashData(songs, useTrashbinStore.getState().trashArtistList);

    Spicetify.showNotification(
      trashAll
        ? t("MESSAGE_TRASH_ALL_SUCCESS", { count })
        : t("MESSAGE_RESTORE_ALL_SUCCESS", { count }),
    );
  } catch (err) {
    Spicetify.showNotification(t("MESSAGE_TRASH_ALL_FAILED"), true);
  }
}
