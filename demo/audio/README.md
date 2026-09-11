# Original HCI voice cues

These 30 WAV files are byte-for-byte copies of `scripts/rsl_rl/audio/` from
Waybaba/ai_coaching. They are the existing project's prerecorded coaching cues,
not generated replacements. Their hashes are checked by `tests/session.mjs`.
`autopilot_on.wav` and `takeover.wav` contain MP3 data under a WAV extension in
the source repository. WebAudio detects the bytes; browser tests decode all
30 assets rather than assuming a codec from the filename.

The source `AudioCoach.ACTION_CORRECTIONS_ENABLED` is **True**, despite older
comments saying corrections are disabled. The browser follows the executable
setting, with yaw prioritized over roll and the original thresholds/cooldowns.
The original teleop calls coaching audio in test stages too (except recovery).
Some original speech/UI wording says "no assistance"; the actual stage-0/2
shared-control setting retains a 0.3 roll/yaw AI blend. The browser labels that
numeric setting explicitly. Do not describe these tests as unaided mastery.

The original BGM directory was excluded by `**/bgm/*` in Git. Its six WAVs
were recovered from the original HCI checkout on the owner's `coaching` host
on 2026-09-11. Browser MP3 copies, titles, source hashes and conversion details
are under `music/`. These are the original tracks, not replacement music.
Browser rotor sound is synthesized locally and is not part of those recordings.
