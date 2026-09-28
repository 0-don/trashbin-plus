#!/bin/bash
# on a GPU pod: decode every clip once, then train mn04 and mn10 side by side
set -e
cd "$(dirname "$0")/.."
export PATH=/root/.local/bin:$PATH
uv run -q python -c 'import sys; sys.path.insert(0, "train"); from detector import load_pcm, manifest; load_pcm(manifest(["train.json", "spotify_train.json", "datasets.json", "spotify.json"]))' > data/decode.log 2>&1
uv run -q python -u train/detector.py --arch mn04_as --epochs 20 --steps 1000 --batch 64 --tag "mn04_${1:-v4}" > "data/mn04_${1:-v4}.log" 2>&1 &
uv run -q python -u train/detector.py --arch mn10_as --epochs 20 --steps 1000 --batch 64 --tag "mn10_${1:-v4}" > "data/mn10_${1:-v4}.log" 2>&1
wait
echo TRAIN_DONE >> data/decode.log
