# AI Coaching | Driving Lab

A browser-only **3D driving practice prototype**, based on the size and interface family of xLab's small RoboRacer platform. Physics runs locally in MuJoCo WASM; Three.js renders the scene. There is no backend inference, no account requirement, no live-vehicle connection, and no automatic data upload.

## What is implemented

- A free 6-DOF chassis, four rotating tires, spring/damper suspension, two front steering joints, rear wheel motors, ground friction, and solid course barriers.
- Ackermann steering derived from a 0.324 m wheelbase and 0.255 m wheel tread; 0.055 m wheel radius. These dimensions come from xLab's vehicle description.
- The active car uses AutoDRIVE's F1TENTH CAD, converted to a compact GLB with four independently moving wheels. This imports the visual model, **not Unity/PhysX or the AutoDRIVE controller**. Provenance, modifications and BSD-2-Clause license are under `vehicle/autodrive/`.
- Manual keyboard, touch, and standard-mapped browser gamepad controls. Unknown gamepad mappings are not activated.
- Chase, onboard RGB-style perspective, and circuit cameras. The onboard view is a synthetic monocular rendering, **not a calibrated ZED stereo/depth sensor**.
- Camera placement uses the published ZED X Mini body mount, converted from the rear-axle-ground `base_link` frame to the simulator root. The extra camera housing is illustrative. CAD electronics/sensor details are not a measured replica of xLab's current car; camera intrinsics remain uncalibrated.
- Authored practice circuit with straights and connected corners in a 3D room. This flat-ground practice layout is not an imported map of the lab.
- An IL driving network trained by cloning a pure-pursuit reference in this exact MuJoCo WASM environment. It reads simulator state and local route geometry, **not camera pixels**. Autonomous IL driving is available through the Auto driving mode.
- Manual mode defaults to a 7 m/s speed limit, matching the maximum configured in the official F1TENTH simulator, not a measured top speed of this vehicle. The motor model and track are not calibrated for safe 7 m/s laps; brake for corners. Auto, assisted modes and practice tests remain limited to 2 m/s because the learned policies have only been validated in that range.
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

## Dependencies

MuJoCo 3.13.0 (Apache-2.0), Three.js 0.183.2 (MIT), Lucide 0.577.0 (ISC). Copies of their licenses are included in `licenses/`. The `vehicle/` folder includes the xLab pit mesh's Apache-2.0 license and the AutoDRIVE visual model's BSD-2-Clause license. Penn logo provenance is in `venue/README.md`; other venue logos were provided by the project owner.
