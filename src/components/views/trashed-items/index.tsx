import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { SELECTORS } from "../../../lib/constants";
import { TabType } from "../../../lib/types";
import { useTrashbinStore } from "../../../store/trashbin-store";
import { EmptyState, TabButton } from "./ui-components";
import { VirtualList } from "./virtual-list";

export const TrashedItemsView: React.FC = () => {
  const { t } = useTranslation();
  const store = useTrashbinStore();
  const [activeTab, setActiveTab] = useState<TabType>("songs");

  const trashedSongUris = useMemo(
    () => Object.keys(store.trashSongList),
    [store.trashSongList],
  );
  const trashedArtistUris = useMemo(
    () => Object.keys(store.trashArtistList),
    [store.trashArtistList],
  );

  const tabs = [
    {
      key: "songs" as const,
      label: t("ITEMS_TAB_SONGS"),
      count: trashedSongUris.length,
      uris: trashedSongUris,
    },
    {
      key: "artists" as const,
      label: t("ITEMS_TAB_ARTISTS"),
      count: trashedArtistUris.length,
      uris: trashedArtistUris,
    },
  ];

  const currentTab = tabs.find((tab) => tab.key === activeTab)!;

  const handleUntrash = (uri: string) => {
    if (activeTab === "songs") {
      store.toggleSongTrash(uri, false);
    } else {
      store.toggleArtistTrash(uri, false);
    }
  };

  const hasItems = trashedSongUris.length > 0 || trashedArtistUris.length > 0;

  if (!hasItems) return <EmptyState type={activeTab} />;

  return (
    <>
      <style>{`
        ${SELECTORS.TRACK_CREDITS_MODAL} {overflow-y: hidden !important;}
        .trashbin-search-input {
          border-color: rgba(255, 255, 255, 0.1) !important;
          background-color: rgba(0, 0, 0, 0.3) !important;
          color: white !important;
        }
        .trashbin-search-input::placeholder {
          color: rgba(255, 255, 255, 0.4) !important;
        }
        .trashbin-search-input:focus {
          border-color: rgba(255, 255, 255, 0.3) !important;
        }
        .trashbin-list-container {
          border-color: rgba(255, 255, 255, 0.1) !important;
          background-color: rgba(0, 0, 0, 0.2) !important;
        }
        .trashbin-item-row {
          background-color: transparent !important;
        }
        .trashbin-item-row:hover {
          background-color: rgba(255, 255, 255, 0.05) !important;
        }
        .trashbin-uri-btn {
          color: rgba(255, 255, 255, 0.4) !important;
          background: transparent !important;
          border: none !important;
        }
        .trashbin-uri-btn:hover {
          color: rgba(255, 255, 255, 0.6) !important;
        }
        .trashbin-remove-btn {
          background: transparent !important;
          border: none !important;
        }
        .trashbin-remove-btn svg {
          color: rgba(255, 255, 255, 0.7) !important;
        }
        .trashbin-remove-btn:hover {
          background-color: rgba(239, 68, 68, 0.2) !important;
        }
        .trashbin-remove-btn:hover svg {
          color: #f87171 !important;
        }
        .trashbin-spinner {
          border-color: rgba(255, 255, 255, 0.2) !important;
          border-top-color: rgba(255, 255, 255, 0.6) !important;
        }
        .trashbin-loaded-count {
          color: rgba(255, 255, 255, 0.4) !important;
        }
        .trashbin-tab-btn {
          color: rgba(255, 255, 255, 0.6) !important;
          border-color: transparent !important;
          background: transparent !important;
        }
        .trashbin-tab-btn:hover {
          color: rgba(255, 255, 255, 0.8) !important;
        }
        .trashbin-tab-btn--active {
          color: white !important;
          border-color: #22c55e !important;
        }
        .trashbin-tab-btn--active:hover {
          color: white !important;
        }
        .trashbin-tab-count {
          color: rgba(255, 255, 255, 0.6) !important;
        }
        .trashbin-tab-indicator {
          background-color: #22c55e !important;
        }
      `}</style>

      {/* Tab Navigation */}
      <div className="mb-4! flex border-b" style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}>
        {tabs.map((tab) => (
          <TabButton
            key={tab.key}
            label={tab.label}
            count={tab.count}
            isActive={activeTab === tab.key}
            onClick={() => setActiveTab(tab.key)}
          />
        ))}
      </div>

      {currentTab.uris.length === 0 ? (
        <EmptyState type={activeTab} />
      ) : (
        <VirtualList
          items={currentTab.uris}
          activeTab={activeTab}
          onUntrash={handleUntrash}
        />
      )}
    </>
  );
};
