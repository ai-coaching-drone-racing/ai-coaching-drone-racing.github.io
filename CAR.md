# Driving Lab deployment

Live path: https://ai-coaching-drone-racing.github.io/car/

This is a standalone static MuJoCo WASM / Three.js 3D driving prototype. It does not replace the drone demo and is not linked from the paper homepage yet.

Source: `Waybaba/ai_coaching`, branch `codex/hci-mujoco-demo`, commit `48de1c31`, directory `car_mujoco/`; reproducible hardware profile in `car_autodrive/`.

Vehicle choice: a small 1/10 RoboRacer-style vehicle, using the dimensions documented by xLab's Autoware vehicle package. xLab's architecture documentation explicitly includes a ZED X Mini camera and real motor/servo interfaces. This establishes a plausible future hardware route, not an inventory confirmation or sim-to-real validation.

- Wheel-based full 3D MuJoCo physics, spring suspension, front Ackermann steering, rear drive motors and collision barriers.
- Keyboard, standard browser gamepad and touch input; Chase, Onboard and Circuit views.
- Visible Controls panel, pause, recovery, speed limit and session JSON export.
- `Demo lap` is a pure-pursuit reference driver, not a learned or adaptive coach.
- Authored practice track and room; not the original Isaac environment or a lab scan.
- The active vehicle uses AutoDRIVE F1TENTH CAD (BSD-2-Clause), adapted to xLab's published wheel geometry with independent moving wheels. The added camera housing and body mounting view are illustrative, not optically calibrated. Dynamics and simplified collision shapes remain the MuJoCo approximation, **not AutoDRIVE Unity/PhysX**. No Unity build or login is needed.
- xLab's original vehicle STL remains in the pit area with its Apache-2.0 license. Official Penn logos are mounted on both long side walls.
- No external services, credentials, inference server, camera permission or live-vehicle control.

Details, platform evidence and license links: [car/ABOUT.md](car/ABOUT.md).

Deployment: build with Node 22 (`cd car_mujoco/web && npm ci && npm run build`), run `npm run test:static`, then copy only `dist/` into `car/`. GitHub Pages serves this repository's `main` branch root. Do not modify `index.html` or `demo/` when updating the car prototype.

Before human real-car trials, confirm the lab's actual available chassis and camera, calibrate vehicle dynamics and camera/latency parameters, validate a supervised closed course, and add an authenticated local vehicle bridge with independent timeout and physical emergency stop. None of that is assumed complete by this web deployment.
