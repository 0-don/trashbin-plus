"""Score a trained mel detector on the eval set: uv run train/evaluate.py data/runs/<tag>.pt [--arch mn04_as]"""

import argparse
import json
import os
import sys

import torch

sys.path.insert(0, os.path.dirname(__file__))
from detector import RUNS, Detector, load_pcm, manifest, report, score_clips  # noqa: E402

ap = argparse.ArgumentParser()
ap.add_argument("weights")
ap.add_argument("--arch", default="mn04_as")
args = ap.parse_args()
device = "cuda" if torch.cuda.is_available() else "cpu"
model = Detector(args.arch)
model.load_state_dict(torch.load(args.weights, map_location="cpu"))
model.to(device)
clips = load_pcm(manifest(["datasets.json", "spotify.json"]))
logits = score_clips(model, clips, device)
tag = os.path.basename(args.weights)[:-3]
json.dump({c["id"]: float(l) for (c, _), l in zip(clips, logits)}, open(os.path.join(RUNS, f"{tag}.eval.json"), "w"))
report(clips, logits, f"{tag} on eval set")
