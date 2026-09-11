# Browser Drone Racing Demo

Public URL: https://ai-coaching-drone-racing.github.io/demo/

GitHub Pages serves this repository's `main` branch at the domain root.
The paper homepage is `index.html`; the generated simulator is isolated in
`demo/`. This website does not use the Personal project or Vercel.
The paper homepage does not currently link to the unfinished demo. Its direct
URL remains public for testing; this is not access control.

The simulator runs the original exported HCI actors locally in JavaScript,
MuJoCo 3.13.0 physics in WebAssembly, and Three.js rendering. It does not need
an inference server, GPU service, or visitor login. Browser exports and scene
assets can be downloaded; no training repository or original Torch checkpoints
are included.

## Updating

Maintained source: `Waybaba/ai_coaching`, branch `codex/hci-mujoco-demo`,
directory `drone_mujoco/web`. Source-repository access is separate from access
to this public website.
Initial published build: `a9fcb5f82352673a836ce0723fa018109947d29f` (2026-09-10 UTC).
Current source revision: `f7811794` (2026-09-11 UTC).

The simulator uses Penn blue `#011f5b` for branding and Tutorial, Penn red
`#990000` for primary commands and the target gate, blue for other gates,
and white gate printing. Wall accents use muted blue; other panels remain
neutral charcoal. The paper homepage's existing styling is unchanged.
The demo declares a Dark Reader lock to preserve its own dark interface and
avoid automatic recoloring that reduced button-label contrast.

The default warehouse is **Daylight Workshop**: matte, fine-grained flooring,
light neutral-gray upper walls, muted blue lower walls, graphite trim, and
neutral-gray ceiling and light fixtures. The existing color-band boundaries,
floor texture and roughness are unchanged. Fill lighting has a neutral bounce
color with slightly less ambient fill relative to the key light, reducing the
former green/yellow cast without adding render passes or reflective finishes.
Gate printing is limited to a small AI Coaching mark, number, and
diagonal bands. Each gate now has two thin gray support poles (22 mm diameter)
and small floor bases, rendered only with no collision geometry. Supports hide
with their parent gate and in Original warehouse mode. One end wall has an
official Penn shield-and-wordmark, the other AI Coaching. The unmodified Penn
asset and attribution are in `demo/venue/`. The track geometry, gate
openings, collisions, physics binary and policy weights are unchanged.

The trackside area has 24 adult-proportioned, low-poly spectators in small
staggered groups, two tripod cameras, low rails and an equipment table. Most
of the crowd stands behind the original west-side front row. Quaternius CC0
characters are baked into static poses and simplified offline; the compressed
geometry adds approximately 0.44 MB. All details are renderer-only and batched
into one mesh. Settings > **Trackside details**, or `?event=off`, hides them
without resetting the flight. Original warehouse mode also hides the group.
Software-rendered checks still show a rendering cost, so constrained devices
can use this switch; hardware frame rates are not established by these tests.

Two side-wall strips now show Penn, xLab, Alliance, Johns Hopkins and JIRL
in a competition-style layout. Four small trackside banners and red/blue/white
pennants complement the spectator areas. These are visual project graphics,
not claims of official sponsorship. The supplied PNGs and xLab's website logo
are preserved in `demo/venue/brands/`, with source hashes and ownership notes.
Small canvas print textures preserve image proportions and original colors.
All branding is renderer-only and hidden in Original warehouse mode.

Simulation pacing is unchanged: 50 Hz control, 250 Hz physics, elapsed-wall-time
scheduling with a 100 ms frame-gap cap. Regression checks ensure it does not run
faster than wall time; the software-rendered test is not a hardware frame-rate
benchmark or a matched comparison with the old Isaac session.

Settings > Venue style switches between Daylight Workshop, Graphite Hangar,
Soft Sage Workshop, and the original warehouse without resetting the flight.
Direct style URLs append `?venue=studio`, `?venue=arena`, `?venue=gallery`, or
`?venue=original`. Comparison screenshots are in `demo/previews/`; the new
generated material and its prompt are documented in `demo/venue/README.md`.

The **Tutorial** button below the project title (H) opens a compact Controls
panel with live keyboard, stick and button feedback. Its only action is Close
(also Esc), which keeps the flight paused. Mode, axis mapping, inversion and
deadzone remain in Settings; flight starts from the main toolbar. Keyboard and
gamepad inputs coexist per axis. Action notifications show assigned shortcuts.
While Tutorial is open, a separate 100 ms timer scans controllers even if the
3D loop is idle. Opening, reconnecting and returning focus trigger an immediate
scan; closing or hiding the page stops the timer. A short activation hint is
shown until the browser exposes a controller. Some browsers require pressing
a controller button with the page focused; polling cannot bypass that policy.

The initial camera is **Chase**, with the expert on autopilot. The default
**Demo** tab offers **No Coach**, **MIA**, and **AI Coaching**. No Coach applies
human roll/yaw directly, with zero steering assistance and no coaching speech;
thrust and pitch stay expert-controlled. It is not four-axis manual flight.
MIA and AI Coaching use the original HCI tracking and L2C policies, respectively,
including evaluation and recovery scheduling, not fixed blend substitutes.
Selecting a method pauses; Start flying begins a fresh trial.
**Compare 3 modes** runs these methods in that order, 45 seconds of active wall
time per round. Rounds reset to the same start and pause between methods;
operators can finish early.
The input/applied markers show the human and actual simulator commands. The
summary reports active time, gates and resets, with a local JSON download
(`assistance-comparison/v2`, including method IDs, live blends and phases).
Pauses, tutorial inspection and controller disconnects do not consume round
time. Both wall time and simulated time are recorded because slow clients can
advance less simulation within a round. This compares control feel, not learning
outcomes. The fixed order is for presentations, not a counterbalanced human study.

The separate **HCI methods** tab (also selectable with `?experience=hci`) has
a **Coaching method** selector offering **L2C / AI Coaching**, **MIA / Minimal
intervention**, and **RBF / Rule-based fading**. Changing the selection pauses
the flight and ends any active trial. **Start flying** begins a fresh trial of
the selected method with independent scores and skill beliefs. **Use
autopilot** ends that trial and returns control to the expert without changing
the pause state. A separate persistent **Current mode** label always shows
what is active, including on phones. Camera buttons indicate the selected
view; the flight action button is not a selected-state toggle.

MIA uses the original human-conditioned tracking actor. RBF uses the original
expert with the HCI rule-based fading equations. L2C uses the original Coach
with per-gate Bayesian skill inference. All three retain HCI's stage-1
evaluation cadence, 30% evaluation blend and 95% recovery blend. Trial exports
separate ended trials and include method, phase, blend, skill and posterior.
Fixed-skill and fixed-blend debug modes remain available in Settings. RBF and the
full study flow remain available separately from the three-option presentation.
**Settings > Control mode > Fixed assistance** now allows 0-100% steering blend.
At 0%, roll/yaw follow human input directly, including after resets; thrust/pitch
and optional spoken guidance remain automatic. No Coach also removes guidance.
The slider updates the live blend immediately while paused without moving the drone.
This does not change the original HCI/session blend limits.

**Session**, next to Tutorial, sequences **Pre-test -> Coaching -> Post-test**
with an optional participant ID and one locked method. Each stage is started
and finished explicitly; there is no invented duration or lap-count cutoff.
Stage 0/2 use continuous evaluation with 30% roll/yaw AI blend; thrust/pitch
stay AI-controlled. Stage 1 uses the existing adaptive/scheduled behavior.
These tests are not fully unassisted. Stages start with fresh beliefs, matching
separate native launches. Session pauses on controller disconnection, keeps
manual resets in the record, and shows time, laps, failures and best lap.
Download session produces a local ZIP with metadata, 50 Hz action/pose rows,
events and summaries for each stage. Records are held in memory until download;
there is no server upload. Unsaved records trigger a leave-page warning.

Audio now defaults on after the first click/key gesture. The sound button
(also visible on phones) remembers mute state. Original HCI evaluation,
recovery/takeover, encouragement and direction cues are bundled
under `demo/audio/`, together with provenance notes. The browser decodes all
29 original samples and pauses playback with the simulation. The executable
HCI source enables direction cues in test stages too, so tests remain
voice-assisted. MIA and AI Coaching in Demo play the original directional
corrections and encouragement; No Coach retains only rotor sound and music.
The old welcome recording and all of its start hooks are removed
because it tells users to press a square button to start, which is not the
browser flow. The native recording remains unchanged. Comparison exports
record audio settings and cue events. Rotor sound is synthesized locally,
softened under speech.

The six original background tracks were recovered from the old machine's
Git-ignored BGM directory and converted to complete MP3s, adding about 33 MB
of hosted files. The project owner confirmed public-use/distribution permission.
They stream one at a time in shuffled order after a user gesture, pause with
the simulation, and automatically become quieter during voice cues. Settings >
Background music is a separate persistent toggle; the toolbar sound button
mutes everything. Titles, hashes and attribution are in `demo/audio/music/`.
Normal music gain is 0.24, ducked to 0.035 during speech with a fast reduction
and smooth return. Voice volume is unchanged.

Startup now reports six real loading stages with downloaded MB and visual-asset
counts. This is stage progress, not an overall byte percentage. Flight controls
stay hidden and disabled until ready; failures show Retry. Music is not part
of the initial scene download.

1. Build with `npm ci`, `npm test`, then `npm run build:pages` in the source
   directory. This uses the `/demo/` base and writes `dist-pages/`.
2. Copy only `dist-pages/` into this repository's `demo/`. The directory is
   generated; replace obsolete generated files there, not the paper's `assets/`.
3. Serve this website locally and run the source repository's browser tests
   (`tests/startup-browser.mjs`, `tests/presentation-browser.mjs`, `tests/session-browser.mjs`, `tests/browser.mjs`, `tests/tutorial.mjs`, `tests/venue.mjs`, and `tests/event.mjs`) with `TEST_URL` set to the local
   `/demo/` URL.
4. Review the diff, commit, and push `main`. Wait for Pages to finish building,
   then check the public URL, including the WASM and texture requests.

Keep `.nojekyll`. Do not copy `.openai/`, `node_modules/`, private experiment
logs, credentials, or raw training checkpoints. Changes to `demo/` do not
update the older separately hosted private Sites demo.

## Scope

This is a portable flight/shared-control demonstration, not a reproduction
of the full human study. RBF, belief inference and evaluation scheduling have
numerical tests against the original Python definitions. Each method also
completed four laps in scripted MuJoCo smoke tests; MIA still had three
collisions. These are implementation checks, not human performance rankings.
All three retain the existing MuJoCo one-gate-back collision recovery, not a
claim of identical Isaac reset/contact behavior. The browser stage wrapper
and audio have separate UI, source-scheduler, decoding and ZIP export tests;
they do not validate the full human study or reproduce every Isaac HUD visual.
The native Python demo is unchanged. Keyboard, virtual-gamepad and WebAudio
tests do not replace testing a physical controller and speakers.

## Attribution

- MuJoCo / Google DeepMind: Apache-2.0; `demo/licenses/mujoco.txt`.
- Three.js contributors: MIT; `demo/licenses/three.txt`.
- Lucide contributors: ISC; `demo/licenses/lucide.txt`.
- fflate contributors: MIT; `demo/licenses/fflate.txt`.
- Original HCI music: Gaijin Entertainment, Jimmie Asche and Nikita Mokrov,
  as credited in the recovered filenames. Public website use/distribution was
  authorized by the project owner; original rights remain with the holders.
  See `demo/audio/music/README.md` and `manifest.json`.
- Trackside people: Quaternius, CC0-1.0; source URLs, hashes and conversion
  details are in `demo/venue/event/`. They are simplified static characters,
  not scanned or photorealistic humans.
- Additional logos: Johns Hopkins, Alliance and JIRL images supplied by the
  project owner; xLab image from its official site. Original ownership applies;
  `demo/venue/brands/README.md` records sources. No new license or endorsement
  is implied.
- Adapted belief filter: ETH Zurich and NVIDIA, BSD-3-Clause;
  `demo/licenses/hci-belief.txt`.
- Penn wall logo: University of Pennsylvania; official brand guidelines apply.
  Source and SHA256 are recorded in `demo/venue/README.md`. No new license or
  University endorsement is implied.
- Warehouse, drone, gates, and textures retain their original ownership and
  license terms. Conversion/source hashes and texture origins are recorded in
  `demo/sim/asset-provenance.json`. This page does not relicense those assets.
