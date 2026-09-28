"""Fine-tune an AudioSet-pretrained EfficientAT MobileNet on log-mel spectrograms of preview clips.

uv run train/detector.py [--arch mn04_as] [--epochs 15] [--holdout src1,src2] [--tag name]
Trains on data/train.json + data/spotify_train.json, reports per source on data/datasets.json + data/spotify.json.
"""

import argparse
import contextlib
import io
import json
import os
import random
import subprocess
import sys
from collections import Counter, defaultdict
from multiprocessing import Pool

import numpy as np
import torch
from sklearn.metrics import roc_auc_score
from torch import nn

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
DATA = os.path.join(ROOT, "data")
PCM = os.path.join(DATA, "pcm32")
RUNS = os.path.join(DATA, "runs")
SR = 32000
WIN = 10 * SR


def load_efficientat():
    repo = os.path.join(HERE, "efficientat")
    if not os.path.isdir(repo):
        subprocess.run(["git", "clone", "-q", "--depth", "1", "https://github.com/fschmid56/EfficientAT", repo], check=True)
    sys.path.insert(0, repo)
    cwd = os.getcwd()
    os.chdir(os.path.join(HERE, "efficientat"))
    try:
        from models.mn.model import get_model
        from models.preprocess import AugmentMelSTFT
    finally:
        os.chdir(cwd)
    return get_model, AugmentMelSTFT


def manifest(names):
    out = []
    for n in names:
        p = os.path.join(DATA, n)
        if os.path.exists(p):
            out += json.load(open(p))
    return out


def decode(clip):
    path = os.path.join(PCM, f"{clip['id']}.npy")
    if not os.path.exists(path):
        raw = subprocess.run(
            ["ffmpeg", "-v", "quiet", "-i", os.path.join(DATA, clip["file"]), "-ac", "1", "-ar", str(SR), "-f", "s16le", "-"],
            capture_output=True,
        ).stdout
        pcm = np.frombuffer(raw, dtype=np.int16)
        if len(pcm) < SR:
            return None
        np.save(path, pcm)
    return path


def load_pcm(clips):
    os.makedirs(PCM, exist_ok=True)
    with Pool(max(1, (os.cpu_count() or 8) - 4)) as pool:
        paths = pool.map(decode, clips, chunksize=8)
    return [(c, np.load(p)) for c, p in zip(clips, paths) if p]


def windows(n):
    # the three 10s windows scored for a clip: start, middle, end
    if n <= WIN:
        return [0]
    return sorted({0, (n - WIN) // 2, n - WIN})


def crop(pcm, start):
    out = np.zeros(WIN, np.float32)
    seg = pcm[start : start + WIN].astype(np.float32) / 32768
    out[: len(seg)] = seg
    return out


class Detector(nn.Module):
    def __init__(self, arch):
        super().__init__()
        get_model, AugmentMelSTFT = load_efficientat()
        with contextlib.redirect_stdout(io.StringIO()):
            self.mel = AugmentMelSTFT(n_mels=128, sr=SR, win_length=800, hopsize=320, n_fft=1024, freqm=48, timem=192)
            self.net = get_model(
                num_classes=1, pretrained_name=arch, width_mult=float(arch[2:4]) / 10, head_type="mlp"
            )

    def forward(self, wave):
        logits, _ = self.net(self.mel(wave).unsqueeze(1))
        return logits.reshape(-1)


@torch.no_grad()
def score_clips(model, clips, device, batch=48):
    model.eval()
    jobs = [(i, crop(pcm, s)) for i, (_, pcm) in enumerate(clips) for s in windows(len(pcm))]
    sums, counts = np.zeros(len(clips)), np.zeros(len(clips))
    for b in range(0, len(jobs), batch):
        idx = [j for j, _ in jobs[b : b + batch]]
        x = torch.from_numpy(np.stack([w for _, w in jobs[b : b + batch]])).to(device)
        out = model(x).float().cpu().numpy()
        np.add.at(sums, idx, out)
        np.add.at(counts, idx, 1)
    return sums / counts


def report(clips, logits, title):
    prob = 1 / (1 + np.exp(-logits))
    labels = np.array([c["label"] for c, _ in clips])
    by = defaultdict(list)
    for (c, _), p in zip(clips, prob):
        by[(c["label"], c["source"])].append(p)
    print(f"\n{title}: AUC {roc_auc_score(labels, prob):.3f}")
    print(f"{'source':26s} kind    n  >=0.5  >=0.8  >=0.9")
    for (label, src), ps in sorted(by.items(), key=lambda kv: (kv[0][0], np.mean(np.array(kv[1]) >= 0.8))):
        ps = np.array(ps)
        print(
            f"{src:26s} {'AI   ' if label else 'human'} {len(ps):4d} "
            + " ".join(f"{100 * np.mean(ps >= t):5.0f}%" for t in (0.5, 0.8, 0.9))
        )
    return prob


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--arch", default="mn04_as")
    ap.add_argument("--epochs", type=int, default=15)
    ap.add_argument("--lr", type=float, default=1e-4)
    ap.add_argument("--batch", type=int, default=48)
    ap.add_argument("--steps", type=int, default=600, help="optimizer steps per epoch")
    ap.add_argument("--holdout", default="")
    ap.add_argument("--tag", default="")
    args = ap.parse_args()
    random.seed(0)
    np.random.seed(0)
    torch.manual_seed(0)
    device = "cuda" if torch.cuda.is_available() else "cpu"
    tag = args.tag or args.arch
    os.makedirs(RUNS, exist_ok=True)

    holdout = {s for s in args.holdout.split(",") if s}
    train_all = load_pcm([c for c in manifest(["train.json", "spotify_train.json"]) if c["source"] not in holdout])
    eval_clips = load_pcm(manifest(["datasets.json", "spotify.json"]))
    random.shuffle(train_all)
    n_val = len(train_all) // 10
    val, train = train_all[:n_val], train_all[n_val:]
    print(f"train {len(train)} val {len(val)} eval {len(eval_clips)}", Counter(c["source"] for c, _ in train).most_common(8), flush=True)

    # every AI source weighs the same, humans as a whole weigh as much as all AI
    per_src = Counter(c["source"] for c, _ in train)
    n_ai_src = len({c["source"] for c, _ in train if c["label"]})
    n_hum_src = len({c["source"] for c, _ in train if not c["label"]})
    w = np.array([(1 / n_ai_src if c["label"] else 1 / n_hum_src) / per_src[c["source"]] for c, _ in train])
    w /= w.sum()

    model = Detector(args.arch).to(device)
    opt = torch.optim.AdamW(model.parameters(), lr=args.lr, weight_decay=1e-3)
    sched = torch.optim.lr_scheduler.OneCycleLR(opt, args.lr, total_steps=args.epochs * args.steps, pct_start=0.1)
    loss_fn = nn.BCEWithLogitsLoss()
    best = (-1.0, None)
    for epoch in range(args.epochs):
        model.train()
        total = 0.0
        for _ in range(args.steps):
            pick = np.random.choice(len(train), args.batch, p=w)
            xs, ys = [], []
            for i in pick:
                c, pcm = train[i]
                start = random.randint(0, max(0, len(pcm) - WIN))
                gain = 10 ** (random.uniform(-12, 6) / 20)
                xs.append(crop(pcm, start) * gain)
                ys.append(c["label"])
            x = torch.from_numpy(np.stack(xs)).to(device)
            y = torch.tensor(ys, dtype=torch.float32, device=device)
            opt.zero_grad()
            loss = loss_fn(model(x), y)
            loss.backward()
            opt.step()
            sched.step()
            total += loss.item()
        vl = score_clips(model, val, device)
        labels = np.array([c["label"] for c, _ in val])
        auc = roc_auc_score(labels, vl)
        hum = np.sort(vl[labels == 0])
        thr = hum[int(0.99 * (len(hum) - 1))]
        tpr_at_1 = float(np.mean(vl[labels == 1] > thr))
        print(f"epoch {epoch + 1}: loss {total / args.steps:.4f} val auc {auc:.4f} tpr@fpr1% {tpr_at_1:.3f}", flush=True)
        if tpr_at_1 > best[0]:
            best = (tpr_at_1, {k: v.detach().clone() for k, v in model.state_dict().items()})

    model.load_state_dict(best[1])
    torch.save(best[1], os.path.join(RUNS, f"{tag}.pt"))
    logits = score_clips(model, eval_clips, device)
    json.dump({c["id"]: float(l) for (c, _), l in zip(eval_clips, logits)}, open(os.path.join(RUNS, f"{tag}.eval.json"), "w"))
    report(eval_clips, logits, f"{tag} on eval set (never trained on)")


if __name__ == "__main__":
    main()
