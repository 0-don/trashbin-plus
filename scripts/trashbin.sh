#!/usr/bin/env bash
# Usage: trashbin.sh [command]   or   trashbin.sh -e '<javascript>'
# Commands: next, previous, play-pause, like-song, volume-up, volume-down,
# trash-song, trash-artist, toggle-trashbin
# Needs Spotify started with --remote-debugging-port (see README).
set -euo pipefail

# Runs when no argument is given, e.g. when pasted into a hotkey tool.
default_command="trash-song"
port="${TRASHBIN_CDP_PORT:-9225}"
command="${1:-$default_command}"

if [ "$command" = "-e" ]; then
  code="${2:?missing javascript after -e}"
elif [[ "$command" =~ ^[a-z0-9-]+$ ]]; then
  code="return trashbinPlus.run(\"$command\")"
else
  echo "usage: trashbin.sh [command] | trashbin.sh -e '<javascript>'" >&2
  exit 2
fi

ws_path=$(curl -sf "http://127.0.0.1:$port/json" | awk '
  /"url":/ { xpui = /xpui/ }
  /"webSocketDebuggerUrl":/ && xpui { sub(/.*ws:\/\/[^\/]*/, ""); sub(/".*/, ""); print; exit }
') || { echo "Spotify is not reachable on port $port" >&2; exit 1; }
[ -n "$ws_path" ] || { echo "Spotify page not found on port $port" >&2; exit 1; }

expression="(async () => { try { await (async () => { $code
})(); return \"trashbin:ok\" } catch (e) { return \"trashbin:err:\" + String(e).replace(/[\"\\\\\n]/g, \" \") } })()"
expression=${expression//\\/\\\\}
expression=${expression//\"/\\\"}
expression=${expression//$'\n'/\\n}
expression=${expression//$'\t'/\\t}
expression=${expression//$'\r'/}
payload="{\"id\":1,\"method\":\"Runtime.evaluate\",\"params\":{\"expression\":\"$expression\",\"awaitPromise\":true,\"returnByValue\":true}}"

exec 3<>"/dev/tcp/127.0.0.1/$port"
printf 'GET %s HTTP/1.1\r\nHost: 127.0.0.1:%s\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Key: dHJhc2hiaW5wbHVzY2xpMQ==\r\nSec-WebSocket-Version: 13\r\n\r\n' \
  "$ws_path" "$port" >&3
IFS= read -r -t 5 status <&3
case "$status" in *" 101 "*) ;; *) echo "WebSocket handshake failed: $status" >&2; exit 1 ;; esac
while IFS= read -r -t 5 line <&3 && [ "$line" != $'\r' ]; do :; done

# Client frames must be masked; an all zero mask leaves the payload as is.
length=$(LC_ALL=C; echo "${#payload}")
if [ "$length" -lt 126 ]; then
  header="\\x81\\x$(printf %02x $((0x80 | length)))"
elif [ "$length" -lt 65536 ]; then
  header="\\x81\\xfe\\x$(printf %02x $((length >> 8)))\\x$(printf %02x $((length & 255)))"
else
  echo "javascript too long" >&2
  exit 1
fi
{ printf "$header\\x00\\x00\\x00\\x00"; printf '%s' "$payload"; } >&3

# A syntax error never reaches the try block and comes back as exceptionDetails.
failed=0 before=""
while IFS= read -r -t 5 -d '"' token <&3; do
  case "$token" in
    trashbin:ok) exit 0 ;;
    trashbin:err:*) echo "${token#trashbin:err:}" >&2; exit 1 ;;
    exceptionDetails) failed=1 ;;
  esac
  if [ "$failed" = 1 ] && [ "$before" = "description" ] && [ "$token" != ":" ]; then
    echo "$token" >&2
    exit 1
  fi
  [ "$token" != ":" ] && before=$token
done
echo "no answer from Spotify" >&2
exit 1
