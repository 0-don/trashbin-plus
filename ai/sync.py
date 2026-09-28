"""Mirror ai/data to the private HF dataset 0don/trashbin-ai-eval-data (resumable, only new files are sent).

uv run sync.py push [paths...]     default: everything except caches and credentials
uv run sync.py pull [paths...|--all]   default: clips, train clips and manifests; --all adds gapraw, runs, logs
uv run sync.py status              local files not on HF yet, per folder

Training never needs the desktop: `uv run train/runpod.py <tag>` starts a pod that pulls from HF, trains,
pushes data/runs back and terminates itself. Afterwards `uv run sync.py pull runs "*.log"` fetches the results.
"""

import fnmatch
import os
import sys
from collections import Counter

from dotenv import load_dotenv
from huggingface_hub import HfApi, snapshot_download

REPO = "0don/trashbin-ai-eval-data"
DATA = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data")
load_dotenv(os.path.join(os.path.dirname(DATA), ".env"), override=True)
IGNORE = ["pcm32/**", "features/**", "*account*.json", "*.token", "*.key", "**/.cache/**"]
TRAINING = ["clips/**", "train/**", "*.json"]

api = HfApi(token=os.environ["HF_TOKEN"])
paths = [a for a in sys.argv[2:] if a != "--all"]
patterns = [f"{p.rstrip('/')}/**" if "." not in p else p for p in paths] or None
if sys.argv[1] == "status":
    remote = set(api.list_repo_files(REPO, repo_type="dataset"))
    local = {
        os.path.relpath(os.path.join(root, f), DATA)
        for root, _, files in os.walk(DATA) for f in files
    }
    missing = [f for f in local - remote if not any(fnmatch.fnmatch(f, p) for p in IGNORE)]
    print(f"{len(remote)} files on HF, {len(missing)} local files missing", dict(Counter(f.split("/")[0] for f in missing)))
elif sys.argv[1] == "push":
    api.upload_folder(
        repo_id=REPO, repo_type="dataset", folder_path=DATA, commit_message="sync",
        allow_patterns=patterns, ignore_patterns=IGNORE,
    )
else:
    snapshot_download(
        REPO, repo_type="dataset", local_dir=DATA, token=os.environ["HF_TOKEN"], max_workers=32,
        allow_patterns=None if "--all" in sys.argv else patterns or TRAINING,
    )
