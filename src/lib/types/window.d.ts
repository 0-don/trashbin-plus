import type { remoteApi } from "../remote-api";

declare global {
  interface Window {
    trashbinPlus?: typeof remoteApi;
    showSaveFilePicker?: (options?: {
      suggestedName?: string;
      types?: Array<{
        accept: Record<string, string[]>;
      }>;
    }) => Promise<{
      createWritable(): Promise<{
        write(data: string): Promise<void>;
        close(): Promise<void>;
      }>;
    }>;
  }
}

export {};
