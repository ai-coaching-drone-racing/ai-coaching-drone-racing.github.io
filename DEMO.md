# Browser Drone Racing Demo

Public URL: https://ai-coaching-drone-racing.github.io/demo/

GitHub Pages serves this repository's `main` branch at the domain root.
The paper homepage is `index.html`; the generated simulator is isolated in
`demo/`. This website does not use the Personal project or Vercel.

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
Current source revision: `7dc06742` (2026-09-10 UTC).

The **Tutorial** button below the project title (H) opens a frozen keyboard and
controller input monitor. Keys, sticks, buttons and flight channels update live;
roll/yaw mapping, inversion and deadzone can be checked there. Closing it keeps
the flight paused; starting assisted flight is explicit. Keyboard and gamepad
inputs coexist per axis. Action notifications show shortcuts only when assigned.

1. Build with `npm ci`, `npm test`, then `npm run build:pages` in the source
   directory. This uses the `/demo/` base and writes `dist-pages/`.
2. Copy only `dist-pages/` into this repository's `demo/`. The directory is
   generated; replace obsolete generated files there, not the paper's `assets/`.
3. Serve this website locally and run the source repository's browser tests
   (`tests/browser.mjs` and `tests/tutorial.mjs`) with `TEST_URL` set to the local
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
