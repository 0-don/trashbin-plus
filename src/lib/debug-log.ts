import { storedRecord } from "./kv-storage";

export interface DebugEntry {
  ts: number;
  event: string;
  [key: string]: unknown;
}

const MAX_ENTRIES = 300;
const MAX_ENTRY_CHARS = 2000;

const record = storedRecord<{ entries: DebugEntry[] }>(
  "trashbin-debug-log",
  () => ({ entries: [] }),
);
let entries: DebugEntry[] | null = null;
let pending: DebugEntry[] = [];

const trim = (all: DebugEntry[]) => {
  if (all.length > MAX_ENTRIES) all.splice(0, all.length - MAX_ENTRIES);
};

// the stored log survives reloads, which is what a report about startup needs; entries logged before it loads wait here
void record
  .load()
  .then((stored) => {
    if (!Array.isArray(stored.entries)) stored.entries = [];
    stored.entries.push(...pending);
    trim(stored.entries);
    entries = stored.entries;
    pending = [];
    record.save();
  })
  .catch(() => {});

export function logDebug(event: string, data?: Record<string, unknown>) {
  let entry: DebugEntry = { ts: Date.now(), event, ...data };
  if (JSON.stringify(entry).length > MAX_ENTRY_CHARS)
    entry = { ts: entry.ts, event, truncated: true };
  if (!entries) {
    pending.push(entry);
    return;
  }
  entries.push(entry);
  trim(entries);
  record.save();
}

export function getDebugLog(): DebugEntry[] {
  return (entries ?? []).concat(pending);
}

export function captureErrors() {
  addEventListener("error", (e) =>
    logDebug("error", {
      message: String(e.message).slice(0, 300),
      source: e.filename,
      line: e.lineno,
      stack: String(e.error?.stack ?? "").slice(0, 800),
    }),
  );
  addEventListener("unhandledrejection", (e) =>
    logDebug("rejection", {
      reason: String(e.reason?.stack ?? e.reason).slice(0, 800),
    }),
  );
}
