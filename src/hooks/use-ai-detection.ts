import { useEffect } from "react";
import {
  cleanupAiDetection,
  initializeAiDetection,
} from "../lib/ai-classifier";
import { useTrashbinStore } from "../store/trashbin-store";

export const useAiDetection = () => {
  const store = useTrashbinStore();

  useEffect(() => {
    if (!store.aiDetectionEnabled) {
      console.log("[trashbin+ AI] Detection disabled, skipping init");
      return;
    }

    let cancelled = false;
    console.log("[trashbin+ AI] Detection enabled, starting init...");

    const init = async () => {
      store.setAiAssetsDownloading(true);
      const ready = await initializeAiDetection(store.aiModelId, (message) => {
        console.log(`[trashbin+ AI] ${message}`);
      });
      console.log(`[trashbin+ AI] Init result: ready=${ready}, cancelled=${cancelled}`);
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
      console.log("[trashbin+ AI] Cleanup triggered");
      cancelled = true;
      cleanupAiDetection();
    };
  }, [store.aiDetectionEnabled, store.aiModelId]);
};
