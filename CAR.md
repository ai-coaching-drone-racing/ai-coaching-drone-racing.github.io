# Driving Lab deployment

Live path: https://ai-coaching-drone-racing.github.io/car/

This is a standalone static MuJoCo WASM / Three.js 3D driving prototype. It does not replace the drone demo and is not linked from the paper homepage yet.

Source: `Waybaba/ai_coaching`, branch `codex/hci-mujoco-demo`, commit `9d3a7890`, directory `car_mujoco/`; reproducible hardware profile in `car_autodrive/`.

Vehicle choice: a small 1/10 RoboRacer-style vehicle, using the dimensions documented by xLab's Autoware vehicle package. xLab's architecture documentation explicitly includes a ZED X Mini camera and real motor/servo interfaces. This establishes a plausible future hardware route, not an inventory confirmation or sim-to-real validation.

- Wheel-based full 3D MuJoCo physics, spring suspension, front Ackermann steering, rear drive motors and collision barriers.
- Keyboard, standard browser gamepad and touch input; Chase, Onboard and Circuit views.
- Visible Controls panel, pause, recovery, speed limit and session JSON export.
- Controls automatically scans for late-connected/reconnected gamepads every 100 ms, independently of rendering. Opening or returning focus scans immediately; closing or hiding the page stops the extra timer. Browser activation may still require a controller button press. PlayStation R2/L2 labels accompany RT/LT; controller mappings are unchanged.
- No Coach, Fixed Assist (0-100%) and a trained Adaptive Coach, with a live assistance percentage. The controller never applies throttle to an idle driver and never cancels braking. Default limit 1.8 m/s, maximum 2 m/s.
- The IL driver clones pure pursuit with a 17-64-64-2 network. The 25-64-64-5 assistance network selects a blend using predicted short-horizon driving/intervention costs, vehicle state and recent human commands. Both were trained with the same MuJoCo WASM physics that run in the browser. They are NOT the original paper's PPO Expert, MIA or long-term-learning L2C; no human-learning benefit is established.
- Settings offers autonomous IL driving and an optional 20 s solo / 60 s practice / 20 s solo session. Phase changes pause; solo tests share an initial state; outcomes and raw inputs can be exported. The inference-only models are public in `car/policies/`.
- Authored practice track and room; not the original Isaac environment or a lab scan.
- The active vehicle uses AutoDRIVE F1TENTH CAD (BSD-2-Clause), adapted to xLab's published wheel geometry with independent moving wheels. The added camera housing and body mounting view are illustrative, not optically calibrated. Dynamics and simplified collision shapes remain the MuJoCo approximation, **not AutoDRIVE Unity/PhysX**. No Unity build or login is needed.
- xLab's original vehicle STL remains in the pit area with its Apache-2.0 license. Official Penn logos are mounted on both long side walls.
- No external services, credentials, inference server, camera permission or live-vehicle control.

Details, platform evidence and license links: [car/ABOUT.md](car/ABOUT.md).

Validation: the initial higher-speed constant-pedal cohort gave 22/24 IL laps and 12/24 adaptive laps. A separate follow-up at 1.4-2.0 m/s with speed-aware synthetic drivers gave 23/24 IL, 22/24 adaptive (38.6% mean help), 21/24 fixed 85%, 13/24 fixed 50%, and 8/24 no help. No model fitting occurred between these evaluations. These are small same-track synthetic trials, not actual-driver skill measurements, proven superiority, always-safe driving or sim-to-real validation. The complete protocol, both cohorts, failures and figures are retained in the source's `car_mujoco/LEARNING.md` and `car_mujoco/validation/2026-09-13-learned-assist/`.

Deployment: build with Node 22 (`cd car_mujoco/web && npm ci && npm run build`), run `npm run test:static`, then copy only `dist/` into `car/`. GitHub Pages serves this repository's `main` branch root. Do not modify `index.html` or `demo/` when updating the car prototype.

Before human real-car trials, confirm the lab's actual available chassis and camera, calibrate vehicle dynamics and camera/latency parameters, validate a supervised closed course, and add an authenticated local vehicle bridge with independent timeout and physical emergency stop. None of that is assumed complete by this web deployment.
