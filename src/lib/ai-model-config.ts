export type ModelId = "sonics-5s" | "sonics-120s" | "ast";

export interface ModelConfig {
  id: ModelId;
  label: string;
  assetName: string;
  sampleRate: number;
  inputName: string;
  inputLength: number;
  outputName: string;
}

export const MODELS: Record<ModelId, ModelConfig> = {
  "sonics-5s": {
    id: "sonics-5s",
    label: "SONICS SpecTTTra 5s",
    assetName: "sonics_5s.onnx",
    sampleRate: 44100,
    inputName: "audio",
    inputLength: 220500, // 44100 * 5s
    outputName: "prob",
  },
  "sonics-120s": {
    id: "sonics-120s",
    label: "SONICS SpecTTTra 120s",
    assetName: "sonics_120s.onnx",
    sampleRate: 44100,
    inputName: "audio",
    inputLength: 5292000, // 44100 * 120s
    outputName: "prob",
  },
  ast: {
    id: "ast",
    label: "AST Music Detector",
    assetName: "ast_model.onnx",
    sampleRate: 16000,
    inputName: "audio",
    inputLength: 163840, // 16000 * 10.24s
    outputName: "prob",
  },
};

export const DEFAULT_MODEL: ModelId = "sonics-5s";
