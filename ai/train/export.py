"""Export a trained mel detector (frontend included) to ONNX: input waveform [N, 320000] at 32kHz, output logit [N]."""

import argparse
import os
import sys

import torch

sys.path.insert(0, os.path.dirname(__file__))
from detector import WIN, Detector  # noqa: E402

ap = argparse.ArgumentParser()
ap.add_argument("weights")
ap.add_argument("out")
ap.add_argument("--arch", default="mn04_as")
args = ap.parse_args()

model = Detector(args.arch)
model.load_state_dict(torch.load(args.weights, map_location="cpu"))
model.eval()
torch.onnx.export(
    model, torch.zeros(1, WIN), args.out, dynamo=False, opset_version=17,
    input_names=["waveform"], output_names=["logit"], dynamic_axes={"waveform": {0: "batch"}, "logit": {0: "batch"}},
)
print("exported", args.out, os.path.getsize(args.out) // 1024, "KB")
