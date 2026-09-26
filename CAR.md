# Driving Lab deployment

Live path: https://ai-coaching-drone-racing.github.io/car/

This is a standalone static MuJoCo WASM / Three.js 3D driving prototype. It does not replace the drone demo and is not linked from the paper homepage yet.

Current source: `Waybaba/ai_coaching`, branch `codex/car-wheel-axis-fix`, commit `7054a38`, directory `car_mujoco/`; reproducible hardware profile in `car_autodrive/`. The latest diagnosis, upstream audit and fresh-data retraining protocol are in `car_mujoco/SELF_CONTACT_FIX.md`; the earlier visual correction is in `car_mujoco/WHEEL_FIX.md`.

Vehicle choice: a small 1/10 RoboRacer-style vehicle, using the dimensions documented by xLab's Autoware vehicle package. xLab's architecture documentation explicitly includes a ZED X Mini camera and real motor/servo interfaces. This establishes a plausible future hardware route, not an inventory confirmation or sim-to-real validation.

- Wheel-based full 3D MuJoCo physics, spring suspension, front Ackermann steering, rear drive motors and collision barriers.
- Keyboard, standard browser gamepad and touch input; Chase, Onboard and Circuit views.
- Visible Controls panel, pause, recovery, speed limit and session JSON export.
- Controls automatically scans for late-connected/reconnected gamepads every 100 ms, independently of rendering. Opening or returning focus scans immediately; closing or hiding the page stops the extra timer. Browser activation may still require a controller button press. PlayStation R2/L2 labels accompany RT/LT; controller mappings are unchanged.
- No Coach, Fixed Assist (0-100%) and a trained Adaptive Coach, with a live assistance percentage. The controller never applies throttle to an idle driver and never cancels braking. Manual mode offers a 7 m/s ceiling; autonomous, assisted and practice modes remain capped at the validated 2 m/s ceiling.
- The IL driver clones pure pursuit with a 17-64-64-2 network. The 25-64-64-5 assistance network selects a blend using predicted short-horizon driving/intervention costs, vehicle state and recent human commands. Both were trained with the same MuJoCo WASM physics that run in the browser. They are NOT the original paper's PPO Expert, MIA or long-term-learning L2C; no human-learning benefit is established.
- Settings offers autonomous IL driving and an optional 20 s solo / 60 s practice / 20 s solo session. Phase changes pause; solo tests share an initial state; outcomes and raw inputs can be exported. The inference-only models are public in `car/policies/`.
- Authored practice track and room; not the original Isaac environment or a lab scan.
- The active vehicle uses AutoDRIVE F1TENTH CAD (BSD-2-Clause), adapted to xLab's published wheel geometry with independent moving wheels. The added camera housing and body mounting view are illustrative, not optically calibrated. Dynamics and simplified collision shapes remain the MuJoCo approximation, **not AutoDRIVE Unity/PhysX**. No Unity build or login is needed.
- xLab's original vehicle STL remains in the pit area with its Apache-2.0 license. Official Penn logos are mounted on both long side walls.
- No external services, credentials, inference server, camera permission or live-vehicle control.

Details, platform evidence and license links: [car/ABOUT.md](car/ABOUT.md).

## Current Physical Contact Fix

The pinned AutoDRIVE F1TENTH FBX matches the current upstream simulator branch
exactly (Git blob `41d2e73c`). No newer CAD replacement was found. The remaining
confirmed defect was in this prototype's MuJoCo collision setup: steering
front tires repeatedly collided with the coarse chassis box.

Four explicit chassis/wheel exclusions now prevent that internal interference,
without disabling ground or external wall collisions. A matched slalom test
dropped internal-contact frames from 1,468/1,600 to zero and reduced peak
steering jump from 0.086719 to 0.010288 radians, an 88.1% reduction. Normal
suspension movement and real collision impacts are not suppressed.

The physics XML changed, so both datasets were regenerated before training
seed-19 weights: 17,500 driving examples and 1,080 assistance examples. All 16
development laps passed without contact. On 24 fresh synthetic cases at
1.4-2 m/s, Auto, Adaptive, fixed 50% and fixed 85% each completed 24/24 laps;
no help completed 18/24. Adaptive averaged 24.2% assistance. These are driving
checks, not proof of human learning or a calibrated real-car model.

Current physics XML SHA-256:
`319f83f4c46c6665c3b027f59796d920d27fd2d337ddf910ee1ca7aa5f5ce2ab`.
The complete diagnosis, upstream audit, negative high-speed fixture result,
protocol and metrics are in `car_mujoco/SELF_CONTACT_FIX.md` and
`car_mujoco/validation/2026-09-26-self-contact/` in the source repository.
Manual 7 m/s laps remain unvalidated; Auto and assistance remain capped at
2 m/s. The earlier figures below describe previous physics and cohorts.

## Earlier September 26 Visual Wheel Repair

The MuJoCo frame/suspension/hub/wheel connections were already valid. The CAD
tire meshes carried small baked axle tilts, which made them wobble visually when
spun. Each mesh now gets its own measured corrective rotation and hub-centering
offset below the physical steering/roll transform. The approach follows
[f1tenth_gym_ros 46c23ea](https://github.com/f1tenth/f1tenth_gym_ros/commit/46c23ea0e58f4d695cb21dc0ba34e94a89d0d817).
The later supplied `3475274` commit only removed development tools. No MuJoCo
physics parameters changed in this repair.

The previous public policies were trained on the same exact MuJoCo XML that
the browser uses. Both networks have nevertheless been refitted with seed 18:
driver fitting reused the retained 11,980-row dataset, and Coach fitting used
1,048 new short-horizon branched-rollout examples. The driver passed all 16
development laps without contact. A locked 24-case synthetic evaluation at
1.4-2 m/s produced:

| Condition | Laps / 24 | Mean Assistance |
| --- | --- | --- |
| No help | 11 | 0% |
| Fixed 50% | 24 | 49.9% |
| Fixed 85% | 22 | 84.5% |
| Adaptive | 23 | 24.4% |
| Autonomous IL driver | 24 | 100% |

Adaptive is not the best condition by lap count; fixed 50% is. The old bundle
completed 19/24 adaptive and 24/24 fixed-85% laps on the same seed base, so the
refresh is not better in every condition. Synthetic commands perturb each
bundle's own driver, not replay identical human commands. These results do
not establish human learning, real-car calibration or universal superiority.
The full evaluation tables and provenance are retained under
`car_mujoco/validation/2026-09-26-wheel-fix/` in the source repository.

Historical initial pilot: the higher-speed constant-pedal cohort gave 22/24 IL laps and 12/24 adaptive laps. A separate follow-up at 1.4-2.0 m/s with speed-aware synthetic drivers gave 23/24 IL, 22/24 adaptive (38.6% mean help), 21/24 fixed 85%, 13/24 fixed 50%, and 8/24 no help. No model fitting occurred between those two early evaluations. Their complete protocol, failures and figures remain in the source's `car_mujoco/LEARNING.md` and `car_mujoco/validation/2026-09-13-learned-assist/`; they are not the latest bundle's scores.

Deployment: build with Node 22 (`cd car_mujoco/web && npm ci && npm run build`), run `npm run test:static`, then copy only `dist/` into `car/`. GitHub Pages serves this repository's `main` branch root. Do not modify `index.html` or `demo/` when updating the car prototype.

Before human real-car trials, confirm the lab's actual available chassis and camera, calibrate vehicle dynamics and camera/latency parameters, validate a supervised closed course, and add an authenticated local vehicle bridge with independent timeout and physical emergency stop. None of that is assumed complete by this web deployment.
