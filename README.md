# Trashbin+

Auto-skip songs and artists you don't like. A modern Spicetify extension.

## Features

- **Auto-skip** - Trashed songs and artists are skipped automatically during playback
- **Context menu** - Right-click any song or artist to trash/untrash
- **Trash buttons** - Inline trash icons in playlists, albums, and queue
- **Playbar widget** - Quick trash button and AI probability indicator in the playback bar
- **AI detection** - Detects AI-generated songs using SONICS SpecTTTra (~50MB model, runs locally via ONNX). Auto-trashes songs with >=80% AI confidence
- **Remote control** - Double-tap play/pause from mobile to toggle skipping. Trash songs by liking them from your phone
- **Playlist monitor** - Auto-recovers from Spotify playback glitches
- **Auto clean queue** - Removes trashed songs from Smart Shuffle queue
- **Trashed items manager** - Browse, search, import/export your trashed songs and artists
- **70+ languages** - Automatically matches your Spotify language

## Settings

Access via profile menu > **Trashbin+ Settings**.

| Section            | Setting                        | Description                                           |
| ------------------ | ------------------------------ | ----------------------------------------------------- |
| **Options**        | Enabled                        | Master on/off toggle                                  |
|                    | Show Widget Icon               | Trash icon in playbar                                 |
| **Features**       | Autoplay on Start              | Auto-play when Spotify opens                          |
|                    | Queue Trashbin                 | Trash buttons in queue panel                          |
|                    | Tracklist Trashbin             | Trash buttons in playlists/albums                     |
|                    | Skip Trashed Tracks            | Find next allowed track instead of just skipping once |
|                    | Auto Clean Queue               | Remove trashed from Smart Shuffle                     |
|                    | Playlist Monitor               | Auto-recover from playback glitches                   |
| **Remote Control** | Remote Toggle                  | Double-tap play/pause from mobile to toggle           |
|                    | Remote Skipping                | Allow trash-skipping from other devices               |
|                    | Trash via Like                 | Like a song from mobile to trash it                   |
| **AI Detection**   | AI Song Detection              | Detect AI songs with SONICS model (~50MB download)    |
|                    | Trash AI Songs                 | Auto-trash songs with >=80% AI probability            |
| **Storage**        | Copy / Export / Import / Clear | Backup and manage trashbin data                       |
|                    | Clear AI Storage               | Remove cached AI classification results               |

## Screenshots

![Main interface](assets/preview.png)
![Settings](assets/settings.png)

## Need help?

[Report issues or ask questions](https://github.com/0-don/trashbin-plus/issues)

<!--
Go to: https://www.jsdelivr.com/tools/purge
Enter: https://cdn.jsdelivr.net/gh/0-don/trashbin-plus@main/dist/trashbin-plus.js
Click purge
-->
