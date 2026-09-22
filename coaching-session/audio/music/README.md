# Original HCI background music

Six tracks recovered from the original HCI `scripts/rsl_rl/audio/bgm` folder.
The directory was deliberately Git-ignored, so earlier migration checkouts
contained the BGM configuration/player but not these audio files.

Artists credited in the original filenames: Gaijin Entertainment, Jimmie Asche,
Nikita Mokrov. The project owner confirmed authorization for public website use
and distribution on 2026-09-11. Original ownership remains with the rightsholders;
this repository grants no new license to these recordings.

`manifest.json` records titles, durations, source WAV SHA-256 and exported MP3
SHA-256. Conversion uses FFmpeg `libmp3lame -q:a 4`, preserving the whole track
without cuts, normalization, speed changes or replacement compositions. Metadata
is kept in the manifest instead of embedded tags. The six originals total
approximately 311 MB; the browser files total approximately 33 MB.

The browser streams one randomly ordered track at a time after a user gesture.
It does not preload/decode the full playlist during scene loading. Music pauses
with the simulation and ducks during speech. Web mixing levels are configured
for the presentation, not claimed to match the native system volume setting.
Normal music gain is 0.24; speech reduces it to 0.035. The gain ramps down with
a 0.05-second time constant and returns smoothly with a 0.3-second time constant.
