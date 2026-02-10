export type ModelId = "sonics" | "fakeprint";

export interface ModelConfig {
  id: ModelId;
  label: string;
  assetName: string;
  sampleRate: number;
  inputName: string;
  inputLength: number;
  outputName: string;
  preprocess: "raw_audio" | "fakeprint";
}

export const MODELS: Record<ModelId, ModelConfig> = {
  sonics: {
    id: "sonics",
    label: "SONICS SpecTTTra",
    assetName: "sonics_model.onnx",
    sampleRate: 44100,
    inputName: "audio",
    inputLength: 220500, // 44100 * 5s
    outputName: "prob",
    preprocess: "raw_audio",
  },
  fakeprint: {
    id: "fakeprint",
    label: "Fakeprint Detector",
    assetName: "ai_music_detector.onnx",
    sampleRate: 16000,
    inputName: "fakeprint",
    inputLength: 3585,
    outputName: "ai_probability",
    preprocess: "fakeprint",
  },
};

export const DEFAULT_MODEL: ModelId = "fakeprint";
