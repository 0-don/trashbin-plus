import { useEffect } from "react";
import {
  cleanupAiDetection,
  initializeAiDetection,
} from "../lib/ai-classifier";
import { DEFAULT_MODEL } from "../lib/ai-engine";
import { useTrashbinStore } from "../store/trashbin-store";

export const useAiDetection = () => {
  const store = useTrashbinStore();

  useEffect(() => {
    if (!store.aiDetectionEnabled) {
      return;
    }

    let cancelled = false;

    const init = async () => {
      store.setAiAssetsDownloading(true);
      const ready = await initializeAiDetection(DEFAULT_MODEL, (message) => {
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
      cleanupAiDetection();
    };
  }, [store.aiDetectionEnabled]);
};
