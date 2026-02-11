import torch
import torch.nn as nn
import torchaudio.transforms as T
from transformers import ASTForAudioClassification
from fire import Fire

SAMPLE_RATE = 16000
NUM_MEL_BINS = 128
MAX_LENGTH = 1024  # from model config
HOP_LENGTH = 160
N_FFT = 400

# AST default normalization values from MIT/ast-finetuned-audioset-10-10-0.4593
AST_MEAN = -4.2677393
AST_STD = 4.5689974


class ASTWrapper(nn.Module):
    """Wraps AST model to take raw 16kHz audio and output AI probability."""

    def __init__(self, model: ASTForAudioClassification):
        super().__init__()
        self.model = model

        self.mel_transform = T.MelSpectrogram(
            sample_rate=SAMPLE_RATE,
            n_fft=N_FFT,
            hop_length=HOP_LENGTH,
            n_mels=NUM_MEL_BINS,
            power=2.0,
        )

    def forward(self, audio: torch.Tensor) -> torch.Tensor:
        # audio: [batch, samples] at 16kHz
        mel = self.mel_transform(audio)  # [batch, n_mels, time]
        mel = torch.log(mel + 1e-6)  # log mel spectrogram

        # Transpose to [batch, time, n_mels]
        mel = mel.transpose(1, 2)

        # Pad or truncate to MAX_LENGTH
        time_dim = mel.shape[1]
        if time_dim < MAX_LENGTH:
            pad = torch.zeros(mel.shape[0], MAX_LENGTH - time_dim, NUM_MEL_BINS, device=mel.device)
            mel = torch.cat([mel, pad], dim=1)
        else:
            mel = mel[:, :MAX_LENGTH, :]

        # Normalize with AST defaults
        mel = (mel - AST_MEAN) / (AST_STD * 2)

        logits = self.model(input_values=mel).logits  # [batch, 2]
        probs = torch.softmax(logits, dim=-1)
        return probs[:, 1:2]  # AI probability (class 1 = ai_generated)


def convert_ast_to_onnx(
    model_id: str = "AI-Music-Detection/ai_music_detection_large_10.24s",
    output_path: str = "ast_model.onnx",
) -> None:
    print(f"Converting AST model {model_id}...")
    print("Downloading model from HuggingFace...")
    model = ASTForAudioClassification.from_pretrained(model_id)
    model.eval()

    wrapper = ASTWrapper(model)
    wrapper.eval()

    # 1024 frames * 160 hop = 163840 samples at 16kHz = 10.24s
    input_length = MAX_LENGTH * HOP_LENGTH
    dummy_input = torch.randn(1, input_length)

    print(f"Input: {input_length} samples ({input_length / SAMPLE_RATE:.2f}s at {SAMPLE_RATE}Hz)")
    print(f"Exporting to ONNX: {output_path}...")

    torch.onnx.export(
        wrapper,
        dummy_input,
        output_path,
        dynamo=False,
        input_names=["audio"],
        output_names=["prob"],
        dynamic_axes={"audio": {0: "batch_size"}, "prob": {0: "batch_size"}},
    )
    print("Done!")


if __name__ == "__main__":
    Fire(convert_ast_to_onnx)
