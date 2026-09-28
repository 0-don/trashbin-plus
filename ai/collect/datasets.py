"""Download clips per AI generator (and human reference sets) as Spotify-preview-like MP3s.

uv run collect/datasets.py                         eval split: first 30 per source, data/datasets.json
uv run collect/datasets.py --split train --n 300   train split: the next n per source, data/train.json
Folders under data/gapraw/<source>/ with a manifest.jsonl ({"file": path relative to data/} per line) are AI sources.
Manifest paths are relative to data/, so a checkout anywhere works after `sync.py pull`.
"""

import argparse
import json
import os
import random
import subprocess
import tempfile
from concurrent.futures import ThreadPoolExecutor

import pyarrow.parquet as pq
from huggingface_hub import HfFileSystem, hf_hub_url
from remotezip import RemoteZip

DATA = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "data")
EVAL_N = 30
fs = HfFileSystem()

# (loader, location, source name, label)  label 1 = AI, 0 = human
SOURCES = [
    ("artifactbench", "shard_000.parquet", "musicgen_large", 1),
    ("artifactbench", "shard_004.parquet", "musicgen_small", 1),
    ("artifactbench", "shard_006.parquet", "riffusion", 1),
    ("artifactbench", "shard_008.parquet", "stable_audio_v1", 1),
    ("artifactbench", "shard_010.parquet", "stable_audio_v2", 1),
    ("artifactbench", "shard_018.parquet", "diffrhythm", 1),
    ("artifactbench", "shard_024.parquet", "yue", 1),
    ("artifactbench", "shard_026.parquet", "suno_chirp_v2", 1),
    ("artifactbench", "shard_028.parquet", "suno_chirp_v3", 1),
    ("artifactbench", "shard_030.parquet", "suno_chirp_v3.5", 1),
    ("artifactbench", "shard_034.parquet", "udio_sonics_30s", 1),
    ("artifactbench", "shard_036.parquet", "suno_cdn_latest", 1),
    ("artifactbench", "shard_044.parquet", "udio_cdn_latest", 1),
    ("music8k", "suno_v5.5", "suno_v5.5", 1),
    ("music8k", "sunov5_new", "suno_v5", 1),
    ("music8k", "mureka_v9", "mureka_v9", 1),
    ("music8k", "minimax_2.6", "minimax_2.6", 1),
    ("music8k", "heartmula", "heartmula", 1),
    ("music8k", "acestep1.5", "acestep_1.5", 1),
    ("haim", "A2_fake_audio/lyria_pro3-00000-of-00001.parquet", "lyria_3_pro", 1),
    ("haim", "A1_real_MTG_audio/mtg-00000-of-00001.parquet", "human_mtg_jamendo", 0),
    ("echoes", "elevenlabs", "elevenlabs", 1),
    ("echoes", "producer", "producer", 1),
    ("echoes", "mubert", "mubert", 1),
    ("echoes", "brev", "brev", 1),
    ("echoes", "songgen", "songgen", 1),
    ("echoes", "suno", "suno_echoes", 1),
    ("echoes", "udio", "udio_echoes", 1),
    ("echoes", "stableaudio", "stable_audio_echoes", 1),
    ("fma", "900", "human_fma", 0),
    ("mtg_tar", "199", "human_mtg_tar", 0),
    ("musiccaps", "eval", "human_musiccaps", 0),
]

# Extra material only used for training: sibling shards and audio-to-audio generations
TRAIN_ONLY = [
    ("artifactbench", "shard_001.parquet", "musicgen_large", 1),
    ("artifactbench", "shard_005.parquet", "musicgen_small", 1),
    ("artifactbench", "shard_007.parquet", "riffusion", 1),
    ("artifactbench", "shard_009.parquet", "stable_audio_v1", 1),
    ("artifactbench", "shard_011.parquet", "stable_audio_v2", 1),
    ("artifactbench", "shard_019.parquet", "diffrhythm", 1),
    ("artifactbench", "shard_027.parquet", "suno_chirp_v2", 1),
    ("artifactbench", "shard_029.parquet", "suno_chirp_v3", 1),
    ("artifactbench", "shard_031.parquet", "suno_chirp_v3.5", 1),
    ("artifactbench", "shard_035.parquet", "udio_sonics_30s", 1),
    ("artifactbench", "shard_040.parquet", "udio_cdn_latest", 1),
    ("echoes_ata", "musicgen", "musicgen_ata", 1),
    ("echoes_ata", "diffrhythm", "diffrhythm_ata", 1),
    ("echoes_ata", "producer", "producer_ata", 1),
    ("echoes_ata", "songgen", "songgen_ata", 1),
    ("fma", "0,100,200,300,400,500,600,700,800", "human_fma", 0),
    ("mtg_tar", "0,20,40,60,80,100,120,140,160,180", "human_mtg_tar", 0),
    ("musiccaps", "train", "human_musiccaps", 0),
    ("fma_instrumental", "25,50,75,125,150,175,225,250,275,325,350,375,425,450,475,525,550,575,625,650", "human_fma_instrumental", 0),
]


def to_preview(data: bytes, out: str) -> bool:
    # Spotify previews are 96kbps 44.1kHz stereo MP3, at most 30s, usually cut from inside the song
    with tempfile.NamedTemporaryFile(delete=False) as f:
        f.write(data)
        tmp = f.name
    try:
        probe = subprocess.run(
            ["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", tmp],
            capture_output=True, text=True,
        )
        dur = float(probe.stdout.strip() or 0)
        start = min(dur * 0.3, dur - 30) if dur > 30 else 0.0
        r = subprocess.run(
            ["ffmpeg", "-v", "error", "-y", "-ss", f"{start:.2f}", "-t", "30", "-i", tmp,
             "-ac", "2", "-ar", "44100", "-b:a", "96k", "-codec:a", "libmp3lame", out],
            capture_output=True,
        )
        return r.returncode == 0 and os.path.getsize(out) > 10_000
    finally:
        os.unlink(tmp)


class Harvester:
    def __init__(self, split: str, n: int, only: set[str]):
        self.only = only
        self.split = split
        self.n = n
        # eval takes the first EVAL_N of every seeded shuffle, train the n after them
        self.lo, self.hi = (0, EVAL_N) if split == "eval" else (EVAL_N, EVAL_N + n)
        self.manifest = os.path.join(DATA, "datasets.json" if split == "eval" else "train.json")
        self.clip_dir = os.path.join(DATA, "clips" if split == "eval" else "train")
        self.entries = json.load(open(self.manifest)) if os.path.exists(self.manifest) else []
        self.have = {e["id"] for e in self.entries}

    def count(self, source: str) -> int:
        return sum(e["source"] == source for e in self.entries)

    def add(self, source: str, dataset: str, label: int, track: str, data: bytes):
        cid = f"{source}__{track}".replace("/", "_")
        if cid in self.have:
            return
        os.makedirs(os.path.join(self.clip_dir, source), exist_ok=True)
        out = os.path.join(self.clip_dir, source, f"{cid}.mp3")
        if to_preview(data, out):
            self.entries.append({"id": cid, "source": source, "dataset": dataset, "label": label, "file": os.path.relpath(out, DATA)})
            self.have.add(cid)

    def artifactbench(self, shard, source, label):
        with tempfile.TemporaryDirectory() as td:
            local = os.path.join(td, "s.parquet")
            fs.get(f"datasets/intrect/artifactbench/ai_tracks/{shard}", local)
            t = pq.read_table(local, columns=["track_id", "audio_bytes"])
            rows = list(range(t.num_rows))
            random.Random(0).shuffle(rows)
            lo, hi = (0, self.n) if any(shard == x[1] for x in TRAIN_ONLY) else (self.lo, self.hi)
            for i in rows[lo:hi]:
                self.add(source, "artifactbench", label, t["track_id"][i].as_py(), t["audio_bytes"][i].as_py())

    def music8k(self, folder, source, label):
        entries = sorted(fs.ls(f"datasets/homura23/MUSIC8K/{folder}", detail=False))
        random.Random(0).shuffle(entries)
        for e in entries[self.lo : self.hi]:
            files = [e] if e.endswith((".mp3", ".wav", ".flac")) else fs.ls(e, detail=False)
            audio = [f for f in files if f.endswith((".mp3", ".wav", ".flac"))]
            if audio:
                self.add(source, "music8k", label, os.path.basename(e), fs.cat(audio[0]))

    def haim(self, path, source, label):
        f = pq.ParquetFile(fs.open(f"datasets/mippia/HAIM/{path}", block_size=1 << 22))
        seen = 0
        for rg in range(f.num_row_groups):
            t = f.read_row_group(rg, columns=["audio", "track_id"])
            for a, tid in zip(t["audio"].to_pylist(), t["track_id"].to_pylist()):
                if seen >= self.hi:
                    return
                if seen >= self.lo:
                    self.add(source, "haim", label, tid, a["bytes"])
                seen += 1

    def echoes(self, folder, source, label, kind="TTA", lo=None, hi=None):
        url = hf_hub_url("Octavian97/Echoes", "Echoes.zip", repo_type="dataset")
        with RemoteZip(url) as z:
            names = sorted(n for n in z.namelist() if n.startswith(f"Echoes/{kind}/{folder}/") and not n.endswith("/"))
            random.Random(0).shuffle(names)
            for n in names[self.lo if lo is None else lo : self.hi if hi is None else hi]:
                self.add(source, "echoes", label, os.path.basename(n), z.read(n))

    def echoes_ata(self, folder, source, label):
        self.echoes(folder, source, label, kind="ATA", lo=0, hi=self.n)

    def _eval_location(self, loader, loc):
        return any(x[0] == loader and x[1] == loc for x in SOURCES)

    def fma(self, shards, source, label):
        # one row group (about 55 full tracks) per shard, shards spread across the archive
        if self.split == "train" and self._eval_location("fma", shards):
            return
        per = self.n if self.split == "eval" else max(1, self.n // len(shards.split(",")))
        for idx in shards.split(","):
            path = f"datasets/benjamin-paine/free-music-archive-full/data/train-{int(idx):05d}-of-00972.parquet"
            t = pq.ParquetFile(fs.open(path, block_size=1 << 22)).read_row_group(0, columns=["audio"])
            for i, a in enumerate(t["audio"].to_pylist()[:per]):
                self.add(source, "fma", label, f"{idx}_{i}", a["bytes"])

    def fma_instrumental(self, shards, source, label):
        # classical, instrumental, soundtrack, ambient, electronic, experimental and jazz tracks:
        # the human neighbours of AIVA, Soundraw, Mubert and Stable Audio (FMA genre ids)
        wanted = {5, 1235, 18, 107, 42, 15, 38, 4}
        per = max(1, self.n // len(shards.split(",")))
        for idx in shards.split(","):
            path = f"datasets/benjamin-paine/free-music-archive-full/data/train-{int(idx):05d}-of-00972.parquet"
            f = pq.ParquetFile(fs.open(path, block_size=1 << 22))
            got = 0
            for rg in range(f.num_row_groups):
                t = f.read_row_group(rg, columns=["audio", "genres"])
                for i, (a, genres) in enumerate(zip(t["audio"].to_pylist(), t["genres"].to_pylist())):
                    if got >= per:
                        break
                    if wanted & set(genres or []):
                        self.add(source, "fma", label, f"{idx}_{rg}_{i}", a["bytes"])
                        got += 1
                if got >= per:
                    break

    def mtg_tar(self, shards, source, label):
        import tarfile

        if self.split == "train" and self._eval_location("mtg_tar", shards):
            return
        per = self.n if self.split == "eval" else max(1, self.n // len(shards.split(",")))
        for idx in shards.split(","):
            with fs.open(f"datasets/rkstgr/mtg-jamendo/data/train/{idx}.tar", block_size=1 << 22) as f:
                tar = tarfile.open(fileobj=f, mode="r|")
                got = 0
                for member in tar:
                    if got >= per:
                        break
                    if member.isfile() and member.name.endswith((".mp3", ".wav", ".flac", ".opus", ".ogg")):
                        self.add(source, "mtg-jamendo", label, member.name, tar.extractfile(member).read())
                        got += 1

    def musiccaps(self, split, source, label):
        if self.split != split:
            return
        files = sorted(f for f in fs.ls("datasets/kelvincai/MusicCaps_30s_wav", detail=False) if f.endswith(".wav"))
        random.Random(0).shuffle(files)
        pick = files[:EVAL_N] if split == "eval" else files[EVAL_N : EVAL_N + self.n]
        for f in pick:
            self.add(source, "musiccaps", label, os.path.basename(f), fs.cat(f))

    def gapraw(self, folder, source, label):
        # clips collected by hand or by scrapers into data/gapraw/<folder>/manifest.jsonl
        path = os.path.join(DATA, "gapraw", folder, "manifest.jsonl")
        rows = [json.loads(line) for line in open(path) if line.strip()]
        rows.sort(key=lambda r: r["file"])
        random.Random(0).shuffle(rows)
        for r in rows[self.lo : self.hi]:
            path = os.path.join(DATA, r["file"])
            if os.path.exists(path):
                with open(path, "rb") as f:
                    self.add(source, "gapraw", label, os.path.basename(path), f.read())

    def run(self):
        def job(loader, loc, source, label):
            getattr(self, loader)(loc, source, label)
            print(f"{source}: {self.count(source)}", flush=True)

        gap_dir = os.path.join(DATA, "gapraw")
        gap = [
            ("gapraw", d, d, 1)
            for d in (sorted(os.listdir(gap_dir)) if os.path.isdir(gap_dir) else [])
            if os.path.exists(os.path.join(gap_dir, d, "manifest.jsonl"))
        ]
        sources = SOURCES + gap + (TRAIN_ONLY if self.split == "train" else [])
        if self.only:
            sources = [s for s in sources if s[2] in self.only]
        with ThreadPoolExecutor(4) as ex:
            for fut in [ex.submit(job, *s) for s in sources]:
                try:
                    fut.result()
                except Exception as e:
                    print("error:", e, flush=True)
        json.dump(self.entries, open(self.manifest, "w"), indent=0)


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--split", choices=["eval", "train"], default="eval")
    ap.add_argument("--n", type=int, default=EVAL_N)
    ap.add_argument("--only", default="", help="comma separated source names")
    args = ap.parse_args()
    Harvester(args.split, args.n, {s for s in args.only.split(",") if s}).run()
