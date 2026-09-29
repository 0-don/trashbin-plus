# ai: AI music detector for trashbin+

Collects AI and human songs in Spotify preview format, fine-tunes an AudioSet-pretrained EfficientAT MobileNet on log-mel spectrograms, and reports catch rates per generator. The goal is continuous: whenever Suno, Udio, Lyria, ElevenLabs or another generator ships a new version, collect samples, retrain, compare.

## Layout

```
sync.py              HF push/pull/status (private dataset 0don/trashbin-ai-eval-data)
collect/datasets.py  HF datasets + data/gapraw/<source>/ folders -> preview clips, eval/train manifests
collect/spotify.ts   real Spotify previews through the Spotify client's CDP port 9225
train/detector.py    model, data loading, training loop, per-source eval table
train/evaluate.py    score a trained .pt on the eval set
train/export.py      ONNX export, mel frontend inside the graph: input waveform [N, 320000] @ 32kHz
train/probe.py       score any ad hoc manifest (a new generator before it joins training)
train/pod.sh         on a GPU box: decode all clips, train mn04 + mn10 side by side
train/runpod.py      one command: pod pulls from HF, trains, pushes results, terminates itself
data/                gitignored, mirrored to HF (never commit audio, the repo is public)
```

Secrets live in `ai/.env` (gitignored, loaded with override by sync.py and runpod.py): `RUNPOD_API_KEY` (account pianosleight@gmail.com, key "trashbin-ai-train") and `HF_TOKEN` (0don write token). The shell exports older keys for other accounts; `.env` must win.

## New generator release loop

1. Put originals in `data/gapraw/<source>/` with `manifest.jsonl` (`{"file": "gapraw/<source>/x.mp3", ...}`, paths relative to `data/`), or add a loader to `collect/datasets.py`.
2. `uv run collect/datasets.py --only <source>` (eval: first 30 of a seeded shuffle) and `uv run collect/datasets.py --split train --n 600 --only <source>` (the next n).
3. `uv run sync.py push` (only new files go up), `uv run sync.py status` must show 0 missing.
4. Commit and push the code: the pod clones GitHub main.
5. `uv run train/runpod.py v6 --wait` (about $1.50 on a 4090, results land in `data/runs/` and `data/mn*_v6.log`).
6. Compare the per-source table with the previous version. Spot check a new source first with `train/probe.py`.

## Rules learned the hard way

- Every clip must look like a Spotify preview: 96kbps 44.1kHz stereo MP3, at most 30s, cut from 30% into the song (`to_preview`). Otherwise the model learns the encoding, not the generator.
- Humans must come from several sources (Spotify pre 2022, FMA, MTG-Jamendo, MusicCaps). With Spotify-only humans the model learned "not a mastered Spotify release = AI" and flagged 47% of Jamendo.
- Eval and train never share tracks or artists; eval is the first 30 per source, train the rest.
- Pod container RAM is 31GB, decoded audio is 36GB: `load_pcm` memory-maps `.npy` files, never load them eagerly.
- Python 3.14 defaults to forkserver: the decode pool uses `get_context("fork")`.
- Do not train on the desktop GTX 1080: 40 minutes at full load blanked the monitor. Use RunPod.
- `huggingface_hub` 2.x has no `upload_large_folder`; `upload_folder` with hf_xet is resumable.
- Loudly MANTA is Mureka underneath, VEGA is Loudly's own (loop based). Udio audio is DRM protected, not collectable. The Suno based wrappers (TopMediai, Musicful, MusicWave, Tad AI) are Suno.
- License status: ArtifactBench, HAIM, SONICS are CC BY-NC; scraped audio (Spotify, Deezer, Suno, ElevenLabs, Lyria, MusicGPT, Boomy) stays private.

## Current best (v5, 2026-09-29)

mn10_v5 (`data/runs/mn10_v5.pt`, on HF): eval AUC 0.994. At threshold 0.8: Spotify humans 0%, FMA 3%, Jamendo 10%, MTG and MusicCaps 0%; Spotify AI-list songs 95%, every neural generator (Suno v2 to v6, Lyria 3/3.5, ElevenLabs v1/v2, Mureka, MiniMax, MusicGPT, Stable Audio, MusicGen, ACE-Step) 87 to 100%. Weak: AIVA 40%, Loudly releases 53%, Mubert (Echoes) 67%, Boomy 70%, current Udio 71% (loop based and MIDI rendered generators are near their ceiling). v5 changes over v4: 4x FMA and 3x MTG-Jamendo human clips, `random_eq` augmentation, human weight 1.5, mn10 batch 64 for 20 x 1000 steps. A run costs about $1.25 on a 4090. Not shipped yet; the extension still runs the lofcz fakeprint + CQT CNN pair.
