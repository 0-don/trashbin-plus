import { useEffect } from "react";
import {
  cleanupAiDetection,
  initializeAiDetection,
} from "../lib/ai-track-handler";
import { useTrashbinStore } from "../store/trashbin-store";

export const useAiDetection = () => {
  const store = useTrashbinStore();

  useEffect(() => {
    if (!store.aiDetectionEnabled) {
      cleanupAiDetection();
      store.setAiAssetsReady(false);
      return;
    }

    let cancelled = false;

    const init = async () => {
      store.setAiAssetsDownloading(true);
      const ready = await initializeAiDetection((message) => {
        console.log(`[trashbin+ AI] ${message}`);
      });
      if (!cancelled) {
        store.setAiAssetsReady(ready);
        store.setAiAssetsDownloading(false);
        if (ready) {
          Spicetify.showNotification("AI detection ready");
        }
      }
    };

    init();

    return () => {
      cancelled = true;
      cleanupAiDetection();
    };
  }, [store.aiDetectionEnabled]);
};
