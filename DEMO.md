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
Current source revision: `a4a983b9` (2026-09-10 UTC).

The simulator uses Penn blue `#011f5b` for branding and Tutorial, Penn red
`#990000` for primary commands and the target gate, blue for other gates,
and white gate printing. Wall accents use muted blue; other panels remain
neutral charcoal. The paper homepage's existing styling is unchanged.
The demo declares a Dark Reader lock to preserve its own dark interface and
avoid automatic recoloring that reduced button-label contrast.

The default warehouse is **Daylight Workshop**: matte, fine-grained flooring,
painted walls, low-contrast ceiling seams and soft lighting without environment
reflections. Gate printing is limited to a small AI Coaching mark, number, and
diagonal bands. Only the end walls have a wordmark. The track geometry, gate
openings, collisions, physics binary and policy weights are unchanged.

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

1. Build with `npm ci`, `npm test`, then `npm run build:pages` in the source
   directory. This uses the `/demo/` base and writes `dist-pages/`.
2. Copy only `dist-pages/` into this repository's `demo/`. The directory is
   generated; replace obsolete generated files there, not the paper's `assets/`.
3. Serve this website locally and run the source repository's browser tests
   (`tests/browser.mjs`, `tests/tutorial.mjs`, and `tests/venue.mjs`) with `TEST_URL` set to the local
   `/demo/` URL.
4. Review the diff, commit, and push `main`. Wait for Pages to finish building,
   then check the public URL, including the WASM and texture requests.

Keep `.nojekyll`. Do not copy `.openai/`, `node_modules/`, private experiment
logs, credentials, or raw training checkpoints. Changes to `demo/` do not
update the older separately hosted private Sites demo.

## Scope

This is a portable flight/shared-control demonstration, not a reproduction
of the full human study. The Coach mode uses a fixed skill input; adaptive
skill estimation and the complete original coaching workflow are not present.
The MuJoCo port is not claimed to be identical to Isaac Lab. Keyboard and
virtual-gamepad tests are not a substitute for testing a real controller.

## Attribution

- MuJoCo / Google DeepMind: Apache-2.0; `demo/licenses/mujoco.txt`.
- Three.js contributors: MIT; `demo/licenses/three.txt`.
- Lucide contributors: ISC; `demo/licenses/lucide.txt`.
- fflate contributors: MIT; `demo/licenses/fflate.txt`.
- Warehouse, drone, gates, and textures retain their original ownership and
  license terms. Conversion/source hashes and texture origins are recorded in
  `demo/sim/asset-provenance.json`. This page does not relicense those assets.
