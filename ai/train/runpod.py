"""Train on a RunPod GPU straight from the HF dataset. The desktop uploads nothing.

uv run train/runpod.py v5 [--gpu "NVIDIA GeForce RTX 4090,NVIDIA L40"] [--branch main] [--wait]

The pod clones this repo, pulls clips and manifests from HF, runs train/pod.sh, pushes data/runs and the logs
back to HF and terminates itself, also on failure. --wait blocks until it is gone, then pulls the results.
"""

import argparse
import base64
import json
import os
import subprocess
import time
import urllib.request

from dotenv import load_dotenv

REPO_URL = "https://github.com/0-don/trashbin-plus.git"
IMAGE = "runpod/pytorch:2.4.0-py3.11-cuda12.4.1-devel-ubuntu22.04"
# tried in order when one is out of stock; no Blackwell cards, the cu126 torch build has no sm_120 kernels
GPUS = "NVIDIA GeForce RTX 4090,NVIDIA L40,NVIDIA A40,NVIDIA GeForce RTX 3090,NVIDIA A100-SXM4-40GB,NVIDIA A100 80GB PCIe"
AI = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
load_dotenv(os.path.join(AI, ".env"), override=True)

BOOTSTRAP = r"""
set -x
terminate() {
  cd /workspace/repo/ai 2>/dev/null && cp /workspace/pod.log data/pod.log && uv run -q sync.py push runs "*_$TAG.log" pod.log || true
  curl -s -H "Authorization: Bearer $RUNPOD_API_KEY" -H "Content-Type: application/json" https://api.runpod.io/graphql \
    -d "{\"query\":\"mutation { podTerminate(input:{podId:\\\"$RUNPOD_POD_ID\\\"}) }\"}"
}
trap terminate EXIT
exec > >(tee /workspace/pod.log) 2>&1
apt-get update -qq && DEBIAN_FRONTEND=noninteractive apt-get install -y -qq ffmpeg git
curl -LsSf https://astral.sh/uv/install.sh | sh
export PATH=/root/.local/bin:$PATH
git clone -q --depth 1 -b "$BRANCH" "$REPO_URL" /workspace/repo
cd /workspace/repo/ai
uv sync -q
uv run -q sync.py pull
train/pod.sh "$TAG"
"""


def graphql(key: str, query: str, variables: dict | None = None) -> dict:
    req = urllib.request.Request(
        "https://api.runpod.io/graphql",
        data=json.dumps({"query": query, "variables": variables or {}}).encode(),
        # Cloudflare in front of the API answers 403 to the default Python-urllib agent
        headers={"Authorization": f"Bearer {key}", "Content-Type": "application/json", "User-Agent": "Mozilla/5.0"},
    )
    with urllib.request.urlopen(req, timeout=60) as r:
        out = json.load(r)
    if out.get("errors"):
        raise RuntimeError(out["errors"])
    return out["data"]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("tag")
    ap.add_argument("--gpu", default=GPUS, help="comma separated, first one in stock wins")
    ap.add_argument("--branch", default="main")
    ap.add_argument("--wait", action="store_true")
    args = ap.parse_args()
    key, hf = os.environ["RUNPOD_API_KEY"], os.environ["HF_TOKEN"]

    env = {
        "HF_TOKEN": hf, "RUNPOD_API_KEY": key, "TAG": args.tag, "BRANCH": args.branch, "REPO_URL": REPO_URL,
        "BOOTSTRAP": base64.b64encode(BOOTSTRAP.encode()).decode(),
    }
    pod = None
    for gpu in args.gpu.split(","):
        try:
            pod = graphql(
                key,
                "mutation($input: PodFindAndDeployOnDemandInput) { podFindAndDeployOnDemand(input: $input) { id costPerHr machine { gpuDisplayName } } }",
                {"input": {
                    "cloudType": "ALL", "gpuCount": 1, "gpuTypeId": gpu, "name": f"trashbin-ai-{args.tag}",
                    "imageName": IMAGE, "containerDiskInGb": 80, "volumeInGb": 0,
                    "dockerArgs": "bash -c 'echo $BOOTSTRAP | base64 -d | bash'",
                    "env": [{"key": k, "value": v} for k, v in env.items()],
                }},
            )["podFindAndDeployOnDemand"]
            break
        except RuntimeError as e:
            if "SUPPLY_CONSTRAINT" not in str(e):
                raise
            print(f"{gpu}: none available")
    if pod is None:
        raise SystemExit("no GPU from the list is available right now")
    print(f"pod {pod['id']} on {pod['machine']['gpuDisplayName']} at ${pod['costPerHr']}/h, logs in the RunPod console")
    if not args.wait:
        return

    while any(p["id"] == pod["id"] for p in graphql(key, "{ myself { pods { id } } }")["myself"]["pods"]):
        time.sleep(60)
    subprocess.run(["uv", "run", "-q", "sync.py", "pull", "runs", f"*_{args.tag}.log", "pod.log"], cwd=AI, check=True)
    print(open(os.path.join(AI, "data", f"mn10_{args.tag}.log")).read().split("on eval set")[-1][:4000])


if __name__ == "__main__":
    main()
