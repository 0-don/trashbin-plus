"""Mirror ai/data to the private HF dataset 0don/trashbin-ai-eval-data (resumable, only new files are sent).

HF_TOKEN=... uv run sync.py push [paths...]     default: everything except caches and credentials
HF_TOKEN=... uv run sync.py pull                 into data/ (manifest paths are relative to data/)

Cold start on a fresh machine or GPU pod:
    git clone https://github.com/0-don/trashbin-plus && cd trashbin-plus/ai
    uv sync && HF_TOKEN=... uv run sync.py pull
    train/pod.sh v5                # decodes every clip, trains mn04 and mn10, writes data/runs/
"""

import os
import sys

from huggingface_hub import HfApi, snapshot_download

REPO = "0don/trashbin-ai-eval-data"
DATA = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data")
IGNORE = ["pcm32/**", "features/**", "*account*.json", "*.token", "*.key", "**/.cache/**"]

api = HfApi(token=os.environ["HF_TOKEN"])
if sys.argv[1] == "push":
    api.upload_folder(
        repo_id=REPO, repo_type="dataset", folder_path=DATA, commit_message="sync",
        allow_patterns=[f"{p.rstrip('/')}/**" if os.path.isdir(os.path.join(DATA, p)) else p for p in sys.argv[2:]] or None,
        ignore_patterns=IGNORE,
    )
else:
    snapshot_download(REPO, repo_type="dataset", local_dir=DATA, token=os.environ["HF_TOKEN"], max_workers=16)
