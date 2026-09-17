# AI Coaching: MJX Car Expert Demo

Public deployment: https://ai-coaching-drone-racing.github.io/car-mjx/

This is the MuJoCo/MJX car expert experiment, separate from the older
`/car/` driving prototype and `/demo/` drone demo. It has no Coach yet.

## Run

The page runs entirely in the browser: MuJoCo 3.13.0 WebAssembly physics,
Three.js rendering, and a deterministic 21-128-128-2 tanh policy in
JavaScript. No account, GPU server, Python service or remote inference is
needed. The initial WASM download is about 10 MB before compression.

Select **PPO Expert** and press Play to watch the learned policy. Manual
mode supports W/A/S/D or arrow keys, Space to brake, standard gamepad
steering/throttle/brake, and on-screen controls on mobile. Reset pauses the
simulation. Follow, driver and overview camera buttons change the view.
Use a recent browser with WebGL2 and WebAssembly support. Physical
gamepad hardware has not been tested; virtual gamepad API checks passed.

## Experiment (2026-09-17)

Two independent from-scratch PPO seeds trained with 128 MJX environments
each, 300 updates and 4,915,200 transitions per seed. A separate fixed
32-start solo evaluation has a 120-second simulation limit and requires
ordered gates plus sufficient travel distance for a complete lap.

| Seed | Training time | Training + evaluation | Solo complete laps |
| --- | --- | --- | --- |
| 0 | 692.6 seconds | 796.3 seconds | 32/32 |
| 1 | 680.4 seconds | 801.2 seconds | 30/32 |

Seed 0 is deployed here. It also completed 32/32 captured evaluation
starts using official MuJoCo WASM. This is a single-track prototype,
not generalization across tracks, a real-car calibration or evidence of
human learning. The policy uses vehicle state and track geometry, not
camera pixels. Browser driving does not implement the full scored
training/evaluation protocol.

Model SHA256:
`eb56958b08939d8c409202203ca0b632d437e401dde571c3e9cf01de34911a3f`

Checkpoint SHA256:
`9d1b1c43df0fa5a1f6e856bf088687a6408bdc67c128141b9da5162d50af7ed9`

## Rebuild and Publish

Implementation lives in the AI Coaching development repository,
`car_coaching/mjx/web`, on `codex/mjx-car-coaching`. This public repository
contains a static build, not the private training workspace or its logs.
From the implementation directory:

```bash
npm ci
npm run build
TEST_URL=http://localhost:13021/car-mjx/ npm run test:browser
```

For the test, serve the build under `/car-mjx/` using a static HTTP server.
Publish only `dist/` into `car-mjx/` in the GitHub Pages repository.
Relative asset URLs support subpath hosting. Keep the existing root
homepage, `car/`, and `demo/` unchanged. After publishing, repeat the
browser test with the public URL and verify desktop/mobile screenshots.

## Assets and Limitations

The articulated Ackermann vehicle and render geometry are an original
prototype: no calibrated suspension, sensors or collision guardrails.
The road boundary is a task-level off-track termination condition.

Spielberg track data derives from
[f1tenth_racetracks](https://github.com/f1tenth/f1tenth_racetracks/tree/b95c4eff766f6367d66b310ea20cd2c9563712c0/Spielberg)
at commit `b95c4eff766f6367d66b310ea20cd2c9563712c0`.
Its GPL-3.0 license is retained in [sim/TRACK-LICENSE](sim/TRACK-LICENSE).
The generated numeric track data is distributed as [sim/track.json](sim/track.json).

Runtime notices: MuJoCo 3.13.0 (Apache-2.0), Three.js 0.183.2 (MIT), and
Lucide 0.577.0 (ISC). License texts and MuJoCo third-party notices are
included in `licenses/`.
