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
Current source revision: `c3c6c10c` (2026-09-10 UTC).

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

The initial camera is **Chase**, with the expert on autopilot. A **Coaching
method** selector below Tutorial offers **L2C / AI Coaching**, **MIA / Minimal
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
Fixed-skill and fixed-assistance modes remain available as debug controls in
Settings, separate from the three comparison methods.

1. Build with `npm ci`, `npm test`, then `npm run build:pages` in the source
   directory. This uses the `/demo/` base and writes `dist-pages/`.
2. Copy only `dist-pages/` into this repository's `demo/`. The directory is
   generated; replace obsolete generated files there, not the paper's `assets/`.
3. Serve this website locally and run the source repository's browser tests
   (`tests/browser.mjs`, `tests/tutorial.mjs`, `tests/venue.mjs`, and `tests/event.mjs`) with `TEST_URL` set to the local
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
claim of identical Isaac reset/contact behavior. Study stages 0/2, spoken
instructions and participant management remain unported. The native Python
demo is unchanged. Keyboard and virtual-gamepad tests do not replace testing
a physical controller.

## Attribution

- MuJoCo / Google DeepMind: Apache-2.0; `demo/licenses/mujoco.txt`.
- Three.js contributors: MIT; `demo/licenses/three.txt`.
- Lucide contributors: ISC; `demo/licenses/lucide.txt`.
- fflate contributors: MIT; `demo/licenses/fflate.txt`.
- Trackside people: Quaternius, CC0-1.0; source URLs, hashes and conversion
  details are in `demo/venue/event/`. They are simplified static characters,
  not scanned or photorealistic humans.
- Adapted belief filter: ETH Zurich and NVIDIA, BSD-3-Clause;
  `demo/licenses/hci-belief.txt`.
- Penn wall logo: University of Pennsylvania; official brand guidelines apply.
  Source and SHA256 are recorded in `demo/venue/README.md`. No new license or
  University endorsement is implied.
- Warehouse, drone, gates, and textures retain their original ownership and
  license terms. Conversion/source hashes and texture origins are recorded in
  `demo/sim/asset-provenance.json`. This page does not relicense those assets.
