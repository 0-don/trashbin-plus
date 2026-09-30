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
5. `uv run train/runpod.py v7 --wait` (about $1.25, results land in `data/runs/` and `data/mn*_v7.log`).
6. Compare the per-source table with the previous version. Spot check a new source first with `train/probe.py`.

## Rules learned the hard way

- Every clip must look like a Spotify preview: 96kbps 44.1kHz stereo MP3, at most 30s, cut from 30% into the song (`to_preview`). Otherwise the model learns the encoding, not the generator.
- Humans must come from several sources (Spotify pre 2022, Spotify 2023+ by established artists, FMA, MTG-Jamendo, MusicCaps). With Spotify-only humans the model learned "not a mastered Spotify release = AI" and flagged 47% of Jamendo. Without 2023+ humans it learned "modern production = AI" and flagged 20 of 118 recent Cosmic Gate tracks.
- Eval and train never share tracks or artists; eval is the first 30 per source, train the rest.
- Pod container RAM is 31GB, decoded audio is 36GB: `load_pcm` memory-maps `.npy` files, never load them eagerly.
- Python 3.14 defaults to forkserver: the decode pool uses `get_context("fork")`.
- Do not train on the desktop GTX 1080: 40 minutes at full load blanked the monitor. Use RunPod.
- `huggingface_hub` 2.x has no `upload_large_folder`; `upload_folder` with hf_xet is resumable.
- Loudly MANTA is Mureka underneath, VEGA is Loudly's own (loop based). Udio audio is DRM protected, not collectable. The Suno based wrappers (TopMediai, Musicful, MusicWave, Tad AI) are Suno.
- License status: ArtifactBench, HAIM, SONICS are CC BY-NC; scraped audio (Spotify, Deezer, Suno, ElevenLabs, Lyria, MusicGPT, Boomy) stays private.

## The extension decides on evidence first, audio last (2026-09-30)

Audio alone plateaued: every detector we tried flags 5 to 25% of some real modern artists (TRFN, Money Flip, LXAES, lxvix). What separates them is outside evidence, the same the industry uses (Deezer, Spotify, Billboard). Order in `src/store/ai-store.ts`: blocklist, release before 2023, Deezer label, verified artist, audio model.

- Deezer `Album.hasIdentifiedAIContent` (pipe.deezer.com GraphQL, anonymous jwt, reached through the Spicetify CORS proxy; ISRC to album via `api.deezer.com/track/isrc:` through `CosmosAsync`): 577 of 681 known AI songs on Spotify labeled, 0 of 749 disputed human songs. When Deezer carries a song unlabeled, no song trashes alone and the artist needs 3 songs at 0.97 or more (the model still catches 78% of the AI Deezer misses).
- Spotify verified badge (`queryArtistOverview` `onPlatformReputationTrait.verification.isVerified`): 2 of 298 known AI artists, 96 to 100% of human artists. Verified artists skip audio entirely.
- Detector bake off: mn10 v6 best recall; lofcz fakeprint 0% false positives but Suno family only; our own sparse per generator fakeprint 0 to 3% false positives, weak on Lyria, Udio, Mureka at 96 kbps and broken by speed changes; ArtifactNet flags 26% of Jamendo. Deezer's speed invariant log frequency fakeprint (Dugelay et al. 2026) is the candidate if audio is revisited.
- Test sets for any new model: `data/probe_{trfn,cg,lxaes,lxvix,moneyflip,slowed,speed}.json` (human catalogs and speed shifted clips, never trained on).

## Current best model (v6, 2026-09-29)

mn10_v6 (`data/runs/mn10_v6.pt`, on HF): eval AUC 0.993. v6 adds 2,392 train clips of `human_spotify_modern` (2023+ releases by artists who debuted before 2023, 1,046 artists, disjoint from the 300 track eval set); everything else as v5. At threshold 0.8: modern Spotify humans 1% (v5: 6%), Spotify humans 0%, FMA 3%, Jamendo 7%, MTG and MusicCaps 0%; Spotify AI-list songs 94%, 38 of 48 AI sources at 90% or more (v5: 36). Weak: AIVA 50%, Boomy 67%, Mubert (Echoes) 70%, current Udio 76%, Stable Audio 3 78 to 83%. Whole 2023+ Cosmic Gate catalog (118 tracks, `data/probe_cg.json`): 2 at 0.8 (v5: 20), 0 at 0.97. The extension has no artist debut rule anymore, only the pre 2023 release date skip. A run costs about $1.25 on a 4090 or an L40 (runpod.py falls back through a GPU list). Shipped as `detector-mn10-v6.onnx` from the public HF repo 0don/trashbin-plus-ai (a new version ships under a new file name; bump `MODEL_ASSET` in src/lib/ai-engine.ts and the result cache key in src/store/ai-store.ts).
