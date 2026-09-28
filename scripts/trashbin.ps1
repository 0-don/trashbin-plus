# Usage: trashbin.ps1 [command]   or   trashbin.ps1 -e '<javascript>'
# Commands: next, previous, play-pause, like-song, volume-up, volume-down,
# trash-song, trash-artist, toggle-trashbin
# Needs Spotify started with --remote-debugging-port (see README).
# The default command runs when no argument is given, e.g. when pasted into a hotkey tool.
param(
  [Parameter(Position = 0)][string]$Command = "trash-song",
  [Alias("e")][string]$Eval
)
$ErrorActionPreference = "Stop"

$port = if ($env:TRASHBIN_CDP_PORT) { $env:TRASHBIN_CDP_PORT } else { 9225 }

if ($Eval) {
  $code = $Eval
} elseif ($Command -match '^[a-z0-9-]+$') {
  $code = "return trashbinPlus.run(`"$Command`")"
} else {
  [Console]::Error.WriteLine("usage: trashbin.ps1 [command] | trashbin.ps1 -e '<javascript>'")
  exit 2
}

try {
  $targets = Invoke-RestMethod -Uri "http://127.0.0.1:$port/json" -TimeoutSec 5
} catch {
  [Console]::Error.WriteLine("Spotify is not reachable on port $port")
  exit 1
}
$page = $targets | Where-Object { $_.type -eq "page" -and $_.url -like "*xpui*" } | Select-Object -First 1
if (-not $page) {
  [Console]::Error.WriteLine("Spotify page not found on port $port")
  exit 1
}

$expression = "(async () => { try { await (async () => { $code`n})(); return `"trashbin:ok`" } catch (e) { return `"trashbin:err:`" + String(e) } })()"
$payload = @{
  id     = 1
  method = "Runtime.evaluate"
  params = @{ expression = $expression; awaitPromise = $true; returnByValue = $true }
} | ConvertTo-Json -Compress -Depth 5

$cts = New-Object System.Threading.CancellationTokenSource 5000
$ws = New-Object System.Net.WebSockets.ClientWebSocket
try {
  $ws.ConnectAsync([Uri]$page.webSocketDebuggerUrl, $cts.Token).Wait()
  $bytes = [Text.Encoding]::UTF8.GetBytes($payload)
  $ws.SendAsync((New-Object ArraySegment[byte] (, $bytes)), "Text", $true, $cts.Token).Wait()

  $buffer = New-Object byte[] 65536
  while ($true) {
    $message = New-Object System.IO.MemoryStream
    do {
      $received = $ws.ReceiveAsync((New-Object ArraySegment[byte] (, $buffer)), $cts.Token).Result
      $message.Write($buffer, 0, $received.Count)
    } while (-not $received.EndOfMessage)
    $response = [Text.Encoding]::UTF8.GetString($message.ToArray()) | ConvertFrom-Json
    if ($response.id -eq 1) { break }
  }
} catch {
  [Console]::Error.WriteLine("no answer from Spotify: $($_.Exception.Message)")
  exit 1
} finally {
  $ws.Dispose()
}

$exception = $response.result.exceptionDetails
if ($exception) {
  [Console]::Error.WriteLine($exception.exception.description)
  exit 1
}

$value = [string]$response.result.result.value
if ($value -eq "trashbin:ok") { exit 0 }
[Console]::Error.WriteLine($value -replace "^trashbin:err:", "")
exit 1
