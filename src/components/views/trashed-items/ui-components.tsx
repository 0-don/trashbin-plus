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
  const isArtist = "type" in item && item.type === "artist";
  const imageClass = isArtist ? "rounded-full" : "rounded";
  const Icon = isArtist ? BsPerson : BsMusicNote;
  const secondaryText = isArtist
    ? (item as ArtistDisplayData).secondaryText
    : (item as TrackDisplayData).artist;

  const store = useTrashbinStore();
  const aiEnabled = store.aiDetectionEnabled && store.aiAssetsReady;
  const aiProbability = useAiStore((s) => !isArtist && aiEnabled ? s.results[item.uri] : undefined);

  return (
    <div className="trashbin-item-row flex items-center justify-between rounded-md p-3 transition-colors">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        {item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt={item.name}
            className={`h-12 w-12 ${imageClass} object-cover`}
          />
        ) : (
          <div
            className={`flex h-12 w-12 items-center justify-center ${imageClass}`}
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          >
            <Icon className="h-6 w-6" style={{ color: "rgba(255, 255, 255, 0.7)" }} />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 truncate font-medium" style={{ color: "white" }}>
            {aiProbability !== undefined && <AiIndicator probability={aiProbability} size={14} />}
            {item.name}
          </div>
          <div className="truncate text-sm" style={{ color: "rgba(255, 255, 255, 0.6)" }}>{secondaryText}</div>
        </div>
      </div>
      <button
        onClick={() => navigator.clipboard.writeText(item.uri)}
        className="trashbin-uri-btn shrink-0 cursor-pointer text-xs transition-colors"
        title="Click to copy URI"
      >
        {item.uri}
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          onUntrash(item.uri);
        }}
        className="trashbin-remove-btn mx-2! cursor-pointer rounded-full p-2! transition-colors"
        title="Remove from trashbin"
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
        <BsTrash3 className="h-20 w-20" style={{ color: "rgba(255, 255, 255, 0.2)" }} />
        <div>
          <h3 className="mb-2 text-xl font-semibold" style={{ color: "white" }}>
            {props.type === "songs"
              ? t("ITEMS_EMPTY_SONGS_TITLE")
              : t("ITEMS_EMPTY_ARTISTS_TITLE")}
          </h3>
          <p
            style={{ color: "rgba(255, 255, 255, 0.6)" }}
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
      "trashbin-tab-btn relative px-4! py-2! text-lg font-medium transition-colors",
      "border-b-2",
      props.isActive && "trashbin-tab-btn--active",
    )}
  >
    {props.label}
    <span className="trashbin-tab-count mx-1! text-xs">({props.count})</span>
    {props.isActive && (
      <div className="trashbin-tab-indicator absolute right-0 bottom-0 left-0 h-0.5" />
    )}
  </button>
);
