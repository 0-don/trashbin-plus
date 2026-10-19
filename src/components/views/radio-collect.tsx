import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { isPlaylistItemTrashed } from "../../lib/playlist-utils";
import {
  addTracksToPlaylist,
  collectRadioTracks,
  getWritablePlaylists,
  RadioProgress,
  WritablePlaylist,
} from "../../lib/radio-utils";
import { useTrashbinStore } from "../../store/trashbin-store";
import { Toggle } from "../ui/settings-modal";

interface Props {
  seedUris: string[];
  sourceName: string;
}

type Phase = "setup" | "collecting" | "picking" | "adding" | "done";

export function RadioCollectView(props: Props) {
  const { t } = useTranslation();
  const [phase, setPhase] = useState<Phase>("setup");
  const [progress, setProgress] = useState<RadioProgress>({
    done: 0,
    total: props.seedUris.length,
    tracks: [],
  });
  const [skipTrashed, setSkipTrashed] = useState(true);
  const [playlists, setPlaylists] = useState<WritablePlaylist[]>([]);
  const [filter, setFilter] = useState("");
  const [added, setAdded] = useState(0);
  const [overflow, setOverflow] = useState(0);
  const [target, setTarget] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (phase !== "collecting") return;
    let cancelled = false;

    (async () => {
      try {
        await collectRadioTracks(
          props.seedUris,
          (p) => !cancelled && setProgress(p),
          () => cancelled,
        );
        if (cancelled) return;

        setPlaylists(await getWritablePlaylists());
        setPhase("picking");
      } catch (e) {
        if (!cancelled) setError(String(e));
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [phase]);

  const onPick = async (playlist: WritablePlaylist) => {
    setPhase("adding");
    setTarget(playlist.name);
    try {
      const result = await addTracksToPlaylist(
        playlist.uri,
        toAdd.map((track) => track.uri),
      );
      setAdded(result.added);
      setOverflow(result.overflow);
      setPhase("done");
    } catch (e) {
      setError(String(e));
      setPhase("picking");
    }
  };

  // subscribed so the count follows trash changes made while the dialog is open
  useTrashbinStore((state) => state.trashSongList);
  useTrashbinStore((state) => state.trashArtistList);
  const tracks = progress.tracks;
  const kept = tracks.filter((track) => !isPlaylistItemTrashed(track));
  const toAdd = skipTrashed ? kept : tracks;

  const visible = playlists.filter((p) =>
    p.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div className="flex max-h-[60vh] min-h-[20rem] flex-col gap-4 p-4">
      {error && (
        <p className="rounded bg-[#e74c3c]/20 p-2 text-[#e74c3c]">{error}</p>
      )}

      {phase !== "adding" && phase !== "done" && (
        <Toggle
          label={
            phase === "setup"
              ? t("RADIO_SKIP_TRASHED")
              : t("RADIO_SKIP_TRASHED_COUNT", { count: tracks.length - kept.length })
          }
          enabled={skipTrashed}
          onChange={setSkipTrashed}
        />
      )}

      {phase === "setup" && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            setPhase("collecting");
          }}
          className="cursor-pointer self-start rounded-full! border-none! bg-(--spice-button)! px-6! py-2! font-bold text-black! hover:brightness-110"
        >
          {t("ACTION_START")}
        </button>
      )}

      {phase === "collecting" && (
        <div className="flex flex-col gap-2">
          <p>
            {t("RADIO_COLLECTING", {
              done: progress.done,
              total: progress.total,
            })}
          </p>
          <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full bg-(--spice-button) transition-all"
              style={{
                width: `${progress.total ? (progress.done / progress.total) * 100 : 0}%`,
              }}
            />
          </div>
          <p className="text-sm opacity-70">
            {t("RADIO_FOUND", { count: toAdd.length })}
          </p>
        </div>
      )}

      {phase === "picking" && (
        <>
          <p>{t("RADIO_PICK_TARGET", { count: toAdd.length })}</p>
          <input
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder={t("RADIO_FILTER_PLACEHOLDER")}
            className="rounded-full border border-[#727272] bg-transparent px-4 py-2 text-(--spice-text)"
          />
          <div className="flex flex-col gap-1 overflow-y-auto">
            {visible.map((playlist) => (
              <button
                type="button"
                key={playlist.uri}
                onClick={(event) => {
                  event.stopPropagation();
                  onPick(playlist);
                }}
                className="cursor-pointer rounded! border-none! bg-white/5! px-4! py-3! text-left font-bold text-(--spice-text) hover:bg-white/15!"
              >
                {playlist.name}
              </button>
            ))}
            {visible.length === 0 && (
              <p className="opacity-70">{t("RADIO_NO_PLAYLISTS")}</p>
            )}
          </div>
        </>
      )}

      {phase === "adding" && <p>{t("RADIO_ADDING", { name: target })}</p>}

      {phase === "done" && (
        <>
          <p>{t("RADIO_DONE", { count: added, name: target })}</p>
          {overflow > 0 && (
            <p className="opacity-70">
              {t("RADIO_PLAYLIST_FULL", { count: overflow })}
            </p>
          )}
        </>
      )}
    </div>
  );
}
