# AI Coaching | Driving Lab

A browser-only **3D driving practice prototype**, based on the size and interface family of xLab's small RoboRacer platform. Physics runs locally in MuJoCo WASM; Three.js renders the scene. There is no backend inference, no account requirement, no live-vehicle connection, and no automatic data upload.

## What is implemented

- A free 6-DOF chassis, four rotating tires, spring/damper suspension, two front steering joints, rear wheel motors, ground friction, and solid course barriers.
- Ackermann steering derived from a 0.324 m wheelbase and 0.255 m wheel tread; 0.055 m wheel radius. These dimensions come from xLab's vehicle description.
- The active car uses AutoDRIVE's F1TENTH CAD, converted to a compact GLB with four independently moving wheels. This imports the visual model, **not Unity/PhysX or the AutoDRIVE controller**. Provenance, modifications and BSD-2-Clause license are under `vehicle/autodrive/`.
- Each visual tire is centered at its physical hub and its baked axle tilt is corrected before the MuJoCo steering/roll transforms are applied. This removes mesh-induced wobble without changing suspension, joints or dynamics. The approach follows the axle-alignment fix in [f1tenth_gym_ros 46c23ea](https://github.com/f1tenth/f1tenth_gym_ros/commit/46c23ea0e58f4d695cb21dc0ba34e94a89d0d817), with new measurements for this asset rather than copying another model's angles.
- Manual keyboard, mouse drag, touch, and standard-mapped browser gamepad controls. Hold the desktop steering slider to take mouse steering priority; release it to return to the most recently pressed keyboard steering key. Unknown gamepad mappings are not activated.
- Steering authority decreases with speed to prevent full-lock keyboard inputs from rolling the vehicle at the 7 m/s manual limit. This is a simulation safety control, not a validated real-car steering map.
- Chase, onboard RGB-style perspective, and circuit cameras. The onboard view is a synthetic monocular rendering, **not a calibrated ZED stereo/depth sensor**.
- Chase uses a fixed field of view and the same interpolated rigid-body pose as the visible chassis and wheels, avoiding camera lag and speed-driven zoom surges. Onboard retains its body-mounted view.
- Camera placement uses the published ZED X Mini body mount, converted from the rear-axle-ground `base_link` frame to the simulator root. The extra camera housing is illustrative. CAD electronics/sensor details are not a measured replica of xLab's current car; camera intrinsics remain uncalibrated.
- Authored practice circuit with straights and connected corners in a 3D room. This flat-ground practice layout is not an imported map of the lab.
- An IL driving network trained by cloning a pure-pursuit reference in this exact MuJoCo WASM environment. It reads simulator state and local route geometry, **not camera pixels**. Autonomous IL driving is available through the Auto driving mode.
- Manual mode defaults to a 7 m/s speed limit, matching the maximum configured in the official F1TENTH simulator, not a measured top speed of this vehicle. The motor model and track are not calibrated to a real car; brake for corners. Auto uses a separately trained full-range driver with a 7 m/s ceiling and slows for corners. Assisted modes and practice tests retain their independently validated 2 m/s envelope. If the faster driver cannot load, Auto falls back to 2 m/s.
- Lap progress and a user/expert steering, throttle and brake display. Expert actions can be hidden in Settings. Lap recovery or a mode change invalidates timing until crossing the start. Lap progress is bookkeeping/evaluation, not a training reward or network input. Local route geometry still is an input.
- No Coach, Fixed Assist (including exactly 0%) and Adaptive Coach. The latter is a small trained cost-prediction network choosing between five blend levels using driving state, human commands and recent command disagreement/variation. Its training objective penalizes short-horizon driving error, collision and excessive intervention. It is **not the original paper's L2C**, and does not establish faster human learning. Training uses six synthetic controller-error families, not measured human skill levels.
- Assistance does not accelerate without the user's throttle or cancel a brake. The percentage shown is the actual current blend, not a measured human skill score.
- Optional 20-second solo test, 60-second practice in the selected assistance mode, and 20-second solo retest. The phases pause between transitions; tests start at the same initial car state. Results are descriptive, not causal learning evidence. Changing mode, speed or fixed assistance cancels the sequence.
- Session JSON export with 10 Hz state/control samples (up to 36,000), original human commands, applied commands, assistance/history, phase results, mode changes, contact episodes, recoveries and laps. Best times are separate by mode; recovery or a mid-lap mode change invalidates the partial lap. Session JSON includes the model training/data identifiers and limitations.

## Controls

- W / Up: accelerate. S / Down: brake, then reverse after stopping.
- A / D or Left / Right: steering. Space: pause. R: return to track. C: camera. H: controls.
- Standard gamepad: left stick steering; RT throttle; LT brake/reverse. Keyboard remains usable while a gamepad is connected. Focus loss and controller disconnection pause the simulation.
- The Controls panel freezes the car while showing live input feedback. Browsers may require a button press before exposing a connected gamepad.

## Why this vehicle

- [xLab RoboRacer architecture](https://github.com/mlab-upenn/autoware.roboracer/blob/roboracer_humble/docs/architecture.md): documents a 1/10 vehicle with a ZED X Mini stereo camera, Jetson AGX Orin, VESC, ROS 2 and real-vehicle control interfaces.
- [xLab ZED SLAM](https://github.com/mlab-upenn/zed-slam): documents and illustrates a F1TENTH/RoboRacer with a ZED X camera.
- [Vehicle dimensions and mesh](https://github.com/mlab-upenn/autoware_launch.roboracer/tree/f11738ed35a995c0bc046666e3cb9eb0f7bda053/vehicle/roboracer_offroad_launch/roboracer_offroad_description): dimension reference and an original mesh displayed in the pit area. License and provenance are included under `vehicle/`.

These are evidence of supported hardware configurations, not verification of the lab's available inventory today.

## Other xLab simulation routes reviewed

| Repository | What it supplies | Why it is not simply uploaded to Pages |
|---|---|---|
| [roboracer-autodrive-ws](https://github.com/mlab-upenn/roboracer-autodrive-ws) | F1TENTH + AutoDRIVE ROS 2 bridge, including a front camera topic | Separate Unity AutoDRIVE executable and bridge service |
| [f1tenth-3D_environment](https://github.com/mlab-upenn/f1tenth-3D_environment) | Unity 2019 3D rendering around F1TENTH Gym | Python physics and ROS/ZeroMQ bridge; not a ready standalone static WebGL build |
| [NonPlanarMPC](https://github.com/mlab-upenn/NonPlanarMPC) | Nonplanar vehicle control research; links successor simulator | Isaac/ROS runtime, not browser-native |
| [Autoware off-road sim](https://github.com/autowarefoundation/autoware_off-road_sim) | Current 3D Isaac environment, nonplanar track and 1/5 RoboRacer-Max | Native GPU/Isaac/ROS stack; larger vehicle, needs a hosted backend if streamed |

This web demo is a new lightweight **adaptation around xLab vehicle specifications**, not a repackaging of those complete simulators.

## Before real-vehicle human experiments

Confirm the exact small car and camera with the lab, then measure steering calibration, motor response, braking distance, traction, camera extrinsics/FOV, video latency and network delay. Mass, suspension, friction and actuation gains in this prototype are provisional. Browser performance does not demonstrate real-car driving proficiency or sim-to-real transfer.

A future integration needs an authenticated local ROS 2 bridge to the vehicle interface, independent command timeout, bounded speed/steering, a physical emergency stop and a supervised closed course. **No such bridge or remote motor control is enabled here.** Do not expose a bare car control socket on a public static page.

Physical gamepad hardware and real camera feeds have not been verified on this machine. Browser tests use simulated standard gamepad events.

## Earlier September 26 Policy Refresh

After the visual wheel repair, both browser networks were refitted with seed 18
on the unchanged MuJoCo physics. Driver fitting reused the retained 11,980-row
dataset; Coach fitting used 1,048 newly generated branched-rollout examples.
At the validated 1.4-2 m/s limits, 24 new synthetic cases gave 24/24 autonomous
laps, 23/24 adaptive, 24/24 fixed 50%, 22/24 fixed 85%, and 11/24 without help.
Adaptive used 24.4% mean assistance. These are same-track synthetic driving
results, not evidence of human learning, real-car transfer or a universally
better assistance policy. Manual driving's 7 m/s ceiling is unchanged.

## Physical Wheel Contact Follow-Up

The CAD source matches the current AutoDRIVE simulator branch. A separate
defect was found in this prototype's MuJoCo contact setup: steered front tires
were colliding with the coarse chassis box. Four body-pair exclusions now
prevent internal chassis/wheel interference; ground and wall collisions remain
active. A matched slalom regression reduced peak steering jump by 88.1%, with
zero remaining internal-contact frames. It does not eliminate normal suspension
travel, collision impacts or every possible vibration.

Both networks were retrained with seed 19 on fresh corrected-physics datasets
(17,500 driving rows and 1,080 branched assistance rows). On 24 new synthetic
cases at 1.4-2 m/s, Auto, Adaptive and both fixed-help conditions each completed
24/24 laps; no help completed 18/24. Adaptive averaged 24.2% help. The previous
paragraph reports a different, earlier physics/seed cohort and is not a direct
causal comparison. No human-learning or real-car benefit is established.

## Earlier September 27 Chase Camera and Full-Range Auto

The chase camera now follows the interpolated car/wheel pose without
independent translation/target lag or speed-based zoom. Onboard keeps its
body-mounted view. The HUD adds lap percentage and user/expert action cues.
Invalidated laps are explicitly marked; lap progress is not a training reward.

A separate Auto driver was cloned from 140,000 fresh WASM state/action
examples at 1-7 m/s settings (episode-held-out validation). It passed 28
development laps, 12 three-lap endurance runs, and all 168 locked final trials
(24 per speed setting), with zero contacts. At a 7 m/s ceiling, final mean lap
time was 31.34 s and peak observed speed was 4.61 m/s; at 2 m/s, 37.79 s and
1.93 m/s. The short track requires braking, so the ceiling is not a constant
speed or a time-optimal-racing claim. These are same-track simulations only.
The HUD, speed settings and exported telemetry all use m/s. Auto still clones
a conservative reference with anticipatory braking and steering-dependent
speed reductions; full manual throttle can request more speed than Auto.
That earlier Auto had not been selected for lap time.
The original driver/Coach weights and assisted/practice 2 m/s cap are unchanged.

## Current Faster Auto

The current Auto clones a development-selected, faster pure-pursuit controller
in the same 3D MuJoCo physics. It is still imitation learning, not PPO/SAC or
an unrestricted-speed policy. The motor target is capped at 140 rad/s, so
lifting the UI limit cannot provide unlimited speed. No physical parameters
were changed; the 7 m/s speed setting and 2 m/s assisted/practice envelope
remain as before.

On 72 matched held-out one-lap trials (24 each at 2, 4 and 7 m/s), the new
Auto completed 72/72 without contact. At the 7 m/s setting, its mean lap was
22.99 s versus 31.29 s for the prior Auto; peak measured speed was 5.10 m/s
versus 4.16 m/s. Four separate three-lap endurance runs also finished cleanly.
The newer policy uses more of the available track width: maximum centerline
offset at 7 m/s was 0.56 m versus 0.22 m for the prior Auto, both under the
0.82 m evaluation threshold. This is a known-circuit simulation result, not
proof of globally optimal racing or safe performance on other tracks or hardware.
The original driving-assistance and Coach weights are unchanged.

## Dependency Licenses

MuJoCo 3.13.0 (Apache-2.0), Three.js 0.183.2 (MIT), Lucide 0.577.0 (ISC). Copies of their licenses are included in `licenses/`. The `vehicle/` folder includes the xLab pit mesh's Apache-2.0 license and the AutoDRIVE visual model's BSD-2-Clause license. The unused Penn logo asset is documented in `venue/README.md`; other venue logos were provided by the project owner.
