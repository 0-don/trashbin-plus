"""Score a model on an ad hoc manifest (list of {id, source, label, file}) without touching eval/train sets."""
import argparse, json, os, sys
import numpy as np, torch
sys.path.insert(0, os.path.dirname(__file__))
from detector import Detector, load_pcm, score_clips  # noqa: E402
ap = argparse.ArgumentParser(); ap.add_argument("weights"); ap.add_argument("manifest"); ap.add_argument("--arch", default="mn04_as")
a = ap.parse_args()
m = Detector(a.arch); m.load_state_dict(torch.load(a.weights, map_location="cpu")); m.to("cuda" if torch.cuda.is_available() else "cpu")
clips = load_pcm(json.load(open(a.manifest)))
p = 1 / (1 + np.exp(-score_clips(m, clips, next(m.parameters()).device)))
print(f"{len(p)} clips: >=0.5 {np.mean(p>=.5):.0%}  >=0.8 {np.mean(p>=.8):.0%}  >=0.9 {np.mean(p>=.9):.0%}  median {np.median(p):.3f}")
