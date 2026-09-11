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
- A pure-pursuit demo driver. It reads perfect simulator state; it is **not** a vision policy, transferred expert, or adaptive AI coach.
- Session JSON export with 10 Hz state/control samples (up to 36,000), mode changes, contact episodes, recoveries and laps. Manual/demo best times are separate; a recovery or mid-lap mode change invalidates the partial lap.

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
