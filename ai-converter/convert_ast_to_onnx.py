import torch
import torch.nn as nn
import torchaudio.transforms as T
from transformers import ASTForAudioClassification, ASTFeatureExtractor
from fire import Fire

SAMPLE_RATE = 16000


class ASTWrapper(nn.Module):
    """Wraps AST model to take raw 16kHz audio and output AI probability."""

    def __init__(self, model: ASTForAudioClassification, feature_extractor: ASTFeatureExtractor):
        super().__init__()
        self.model = model
        self.target_length = feature_extractor.max_length  # 1024
        self.num_mel_bins = feature_extractor.num_mel_bins  # 128
        self.sampling_rate = feature_extractor.sampling_rate  # 16000
        self.mean = feature_extractor.mean
        self.std = feature_extractor.std

        self.mel_transform = T.MelSpectrogram(
            sample_rate=self.sampling_rate,
            n_fft=400,
            hop_length=160,
            n_mels=self.num_mel_bins,
            power=2.0,
        )

    def forward(self, audio: torch.Tensor) -> torch.Tensor:
        # audio: [batch, samples] at 16kHz
        mel = self.mel_transform(audio)  # [batch, n_mels, time]
        mel = torch.log(mel + 1e-6)  # log mel spectrogram

        # Transpose to [batch, time, n_mels]
        mel = mel.transpose(1, 2)

        # Pad or truncate to target_length
        time_dim = mel.shape[1]
        if time_dim < self.target_length:
            pad = torch.zeros(mel.shape[0], self.target_length - time_dim, self.num_mel_bins, device=mel.device)
            mel = torch.cat([mel, pad], dim=1)
        else:
            mel = mel[:, :self.target_length, :]

        # Normalize
        mel = (mel - self.mean) / (self.std * 2)

        logits = self.model(mel).logits  # [batch, 2]
        probs = torch.softmax(logits, dim=-1)
        return probs[:, 1:2]  # AI probability


def convert_ast_to_onnx(
    model_id: str = "AI-Music-Detection/ai_music_detection_large_10.24s",
    output_path: str = "ast_model.onnx",
) -> None:
    print(f"Converting AST model {model_id}...")
    print("Downloading model from HuggingFace...")
    model = ASTForAudioClassification.from_pretrained(model_id)
    feature_extractor = ASTFeatureExtractor.from_pretrained(model_id)
    model.eval()

    wrapper = ASTWrapper(model, feature_extractor)
    wrapper.eval()

    max_length = feature_extractor.max_length  # 1024 frames
    # 1024 frames * 160 hop = 163840 samples at 16kHz = 10.24s
    input_length = max_length * 160
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
