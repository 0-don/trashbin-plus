declare module "virtual:ort-worker-wasm" {
  export const ORT_WASM_CODE: string;
  export const ORT_VERSION: string;
}

declare module "virtual:ai-worker" {
  export const AI_WORKER_CODE: string;
}

declare module "virtual:ai-models" {
  export const FAKEPRINT_MODEL: string;
  export const CQT_CNN_MODEL: string;
}
