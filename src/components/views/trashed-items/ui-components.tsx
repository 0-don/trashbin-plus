import React from "react";
import { useTranslation } from "react-i18next";
import { BsMusicNote, BsPerson, BsTrash3 } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import {
  ArtistDisplayData,
  ItemData,
  TabType,
  TrackDisplayData,
} from "../../../lib/types";
import { cn } from "../../../lib/utils";
import { useAiStore } from "../../../store/ai-store";
import { useTrashbinStore } from "../../../store/trashbin-store";
import { AiIndicator } from "../../features/ai-probability-indicator";

interface ItemRowProps {
  item: ItemData;
  onUntrash: (uri: string) => void;
}

export const ItemRow: React.FC<ItemRowProps> = ({ item, onUntrash }) => {
  const { t } = useTranslation();
  const isArtist = "type" in item && item.type === "artist";
  const imageClass = isArtist ? "rounded-full" : "rounded";
  const Icon = isArtist ? BsPerson : BsMusicNote;
  const secondaryText = isArtist
    ? (item as ArtistDisplayData).secondaryText
    : (item as TrackDisplayData).artist;

  const store = useTrashbinStore();
  const aiReady = useAiStore((s) => s.ready);
  const aiEnabled = store.aiDetectionEnabled && aiReady;
  const aiProbability = useAiStore((s) => !isArtist && aiEnabled ? s.results[item.uri] : undefined);

  return (
    <div className="flex items-center justify-between rounded-md bg-transparent! p-3 transition-colors hover:bg-white/5!">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        {item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt={item.name}
            className={`h-12 w-12 ${imageClass} object-cover`}
          />
        ) : (
          <div
            className={`flex h-12 w-12 items-center justify-center bg-white/10 ${imageClass}`}
          >
            <Icon className="h-6 w-6 text-white/70" />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 truncate font-medium text-white">
            {aiProbability !== undefined && aiProbability >= 0 && <AiIndicator probability={aiProbability} size={14} />}
            {item.name}
          </div>
          <div className="truncate text-sm text-white/60">{secondaryText}</div>
        </div>
      </div>
      <button
        onClick={() => navigator.clipboard.writeText(item.uri)}
        className="shrink-0 cursor-pointer border-none! bg-transparent! text-xs text-white/40! transition-colors hover:text-white/60!"
        title={t("TOOLTIP_COPY_URI")}
      >
        {item.uri}
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          onUntrash(item.uri);
        }}
        className="mx-2! cursor-pointer rounded-full border-none! bg-transparent! p-2! transition-colors hover:bg-red-500/20! [&_svg]:text-white/70! [&:hover_svg]:text-red-400!"
        title={t("TOOLTIP_REMOVE_TRASHBIN")}
      >
        <IoClose className="h-5 w-5 transition-colors" />
      </button>
    </div>
  );
};

interface EmptyStateProps {
  type: TabType;
}

export const EmptyState: React.FC<EmptyStateProps> = (props) => {
  const { t } = useTranslation();

  return (
    <div className="p-8 text-center">
      <div className="flex flex-col items-center gap-6 py-12">
        <BsTrash3 className="h-20 w-20 text-white/20" />
        <div>
          <h3 className="mb-2 text-xl font-semibold text-white">
            {props.type === "songs"
              ? t("ITEMS_EMPTY_SONGS_TITLE")
              : t("ITEMS_EMPTY_ARTISTS_TITLE")}
          </h3>
          <p
            className="text-white/60"
            dangerouslySetInnerHTML={{
              __html:
                props.type === "songs"
                  ? t("ITEMS_EMPTY_SONGS")
                  : t("ITEMS_EMPTY_ARTISTS"),
            }}
          />
        </div>
      </div>
    </div>
  );
};

interface TabButtonProps {
  label: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
}

export const TabButton: React.FC<TabButtonProps> = (props) => (
  <button
    onClick={props.onClick}
    className={cn(
      "relative border-b-2 px-4! py-2! text-lg font-medium transition-colors",
      "border-transparent! bg-transparent! text-white/60! hover:text-white/80!",
      props.isActive && "text-white! border-green-500! hover:text-white!",
    )}
  >
    {props.label}
    <span className="mx-1! text-xs text-white/60!">({props.count})</span>
    {props.isActive && (
      <div className="absolute right-0 bottom-0 left-0 h-0.5 bg-green-500!" />
    )}
  </button>
);
