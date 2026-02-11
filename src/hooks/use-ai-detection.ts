import { useEffect } from "react";
import { DEFAULT_MODEL } from "../lib/ai-engine";
import { useAiStore } from "../store/ai-store";
import { useTrashbinStore } from "../store/trashbin-store";

export const useAiDetection = () => {
  const store = useTrashbinStore();

  useEffect(() => {
    if (!store.aiDetectionEnabled) return;

    let cancelled = false;
    const aiStore = useAiStore.getState();

    const init = async () => {
      store.setAiAssetsDownloading(true);
      const ready = await aiStore.initialize(DEFAULT_MODEL, (message) => {
        console.log(`[trashbin+ AI] ${message}`);
      });
      if (!cancelled) {
        store.setAiAssetsReady(ready);
        store.setAiAssetsDownloading(false);
      }
    };

    init();

    return () => {
      cancelled = true;
      aiStore.cleanup();
    };
  }, [store.aiDetectionEnabled]);
};
