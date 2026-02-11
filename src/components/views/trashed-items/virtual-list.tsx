import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  fetchArtistsMetadata,
  fetchTracksMetadata,
} from "../../../lib/metadata-utils";
import { ItemData, TabType } from "../../../lib/types";
import { useAiStore } from "../../../store/ai-store";
import { useTrashbinStore } from "../../../store/trashbin-store";
import { ItemRow } from "./ui-components";

const ITEM_HEIGHT = 60;
const OVERSCAN = 5;

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

interface VirtualListProps {
  items: string[];
  activeTab: TabType;
  onUntrash: (uri: string) => void;
}

export const VirtualList: React.FC<VirtualListProps> = (props) => {
  const { t } = useTranslation();
  const store = useTrashbinStore();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const [itemCache, setItemCache] = useState<Map<number, ItemData>>(new Map());
  const [loadingBatches, setLoadingBatches] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery, 300);
  const aiResults = useAiStore((s) => s.results);
  const aiEnabled = store.aiDetectionEnabled && store.aiAssetsReady;

  const getFilteredItems = () => {
    if (!debouncedSearch.trim()) {
      return props.items.map((uri, index) => ({ uri, originalIndex: index }));
    }

    const query = debouncedSearch.toLowerCase();
    return props.items
      .map((uri, index) => ({ uri, originalIndex: index }))
      .filter(({ uri, originalIndex }) => {
        const cachedData = itemCache.get(originalIndex);
        if (cachedData) {
          const nameMatch = cachedData.name.toLowerCase().includes(query);
          const secondaryMatch =
            "artist" in cachedData
              ? cachedData.artist.toLowerCase().includes(query)
              : cachedData.secondaryText.toLowerCase().includes(query);
          return (
            nameMatch || secondaryMatch || uri.toLowerCase().includes(query)
          );
        }
        return uri.toLowerCase().includes(query);
      });
  };

  const filteredItems = getFilteredItems();
  const totalHeight = filteredItems.length * ITEM_HEIGHT;

  // Calculate visible range
  const startIndex = Math.max(
    0,
    Math.floor(scrollTop / ITEM_HEIGHT) - OVERSCAN,
  );
  const visibleCount = Math.ceil(containerHeight / ITEM_HEIGHT) + OVERSCAN * 2;
  const endIndex = Math.min(filteredItems.length, startIndex + visibleCount);

  const visibleItems = filteredItems
    .slice(startIndex, endIndex)
    .map((item, i) => ({
      ...item,
      virtualIndex: startIndex + i,
    }));

  // Handle scroll
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  // Measure container height
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver((entries) => {
      setContainerHeight(entries[0]?.contentRect.height ?? 0);
    });

    observer.observe(container);
    setContainerHeight(container.clientHeight);

    return () => observer.disconnect();
  }, []);

  const loadBatch = async (batchIndex: number) => {
    const batchKey = `${props.activeTab}-${batchIndex}`;
    if (loadingBatches.has(batchKey)) return;

    const BATCH_SIZE = 50;
    const startIdx = batchIndex * BATCH_SIZE;
    const endIdx = Math.min(startIdx + BATCH_SIZE, props.items.length);

    setLoadingBatches((prev) => new Set(prev).add(batchKey));

    try {
      const urisSlice = props.items.slice(startIdx, endIdx);
      const data =
        props.activeTab === "songs"
          ? await fetchTracksMetadata(urisSlice)
          : await fetchArtistsMetadata(urisSlice);

      setItemCache((prev) => {
        const newCache = new Map(prev);
        data.forEach((item, i) => newCache.set(startIdx + i, item));
        return newCache;
      });
    } catch (error) {
      // batch load failed
    } finally {
      setLoadingBatches((prev) => {
        const newSet = new Set(prev);
        newSet.delete(batchKey);
        return newSet;
      });
    }
  };

  // Load batches for visible items
  useEffect(() => {
    const BATCH_SIZE = 50;
    const batchesToLoad = new Set<number>();

    visibleItems.forEach((item) => {
      if (!itemCache.has(item.originalIndex)) {
        batchesToLoad.add(Math.floor(item.originalIndex / BATCH_SIZE));
      }
    });

    batchesToLoad.forEach(loadBatch);
  }, [startIndex, endIndex, itemCache]);

  // Clear cache when tab or items change
  useEffect(() => {
    setItemCache(new Map());
    setLoadingBatches(new Set());
  }, [props.activeTab, props.items]);

  // Enqueue visible songs for AI classification
  useEffect(() => {
    if (!aiEnabled || props.activeTab !== "songs") return;
    for (const item of visibleItems) {
      if (aiResults[item.uri] === undefined) {
        useAiStore.getState().enqueue(item.uri);
      }
    }
  }, [aiEnabled, props.activeTab, startIndex, endIndex]);

  return (
    <>
      <div className="mb-3">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={t("ITEMS_SEARCH_PLACEHOLDER")}
          className="w-full rounded-lg border border-white/10! bg-black/30! px-4 py-2 text-sm text-white! outline-none placeholder:text-white/40! focus:border-white/30!"
        />
      </div>
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="h-100 overflow-auto rounded-lg border border-white/10! bg-black/20!"
      >
        <div className="relative" style={{ height: totalHeight }}>
          {visibleItems.map((item) => {
            const data = itemCache.get(item.originalIndex);
            return (
              <div
                key={item.uri}
                className="absolute inset-x-0"
                style={{
                  top: item.virtualIndex * ITEM_HEIGHT,
                  height: ITEM_HEIGHT,
                }}
              >
                {data ? (
                  <ItemRow item={data} onUntrash={props.onUntrash} />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/20! border-t-white/60!" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="py-4! text-center">
        <p className="text-sm text-white/40!">
          {t("ITEMS_LOADED_COUNT", {
            loaded: itemCache.size,
            total: props.items.length,
            type: props.activeTab,
          })}
        </p>
      </div>
    </>
  );
};
