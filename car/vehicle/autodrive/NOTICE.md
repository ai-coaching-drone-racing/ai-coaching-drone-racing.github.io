# AutoDRIVE F1TENTH visual model

Upstream: Tinker Twins, AutoDRIVE, BSD-2-Clause (see `LICENSE`).
Commit: `bb0c5018b48b888faea405a0b0342729b5841dc9`.
Source: https://github.com/Tinker-Twins/AutoDRIVE/blob/bb0c5018b48b888faea405a0b0342729b5841dc9/Assets/Models/Vehicle/F1TENTH/F1TENTH.fbx
Original FBX SHA-256: `fe21bb814e8a4bf9572f4b95f0de159ca780a1ce31b0907d1a1d22d4eda7f283`.

The FBX was converted with Assimp to GLB, simplified with meshoptimizer, and
regrouped into a chassis and four independent wheels for browser rendering.
The Y-up source is converted to X-forward, Y-left, Z-up. Axle spacing and wheel
dimensions follow xLab's published 1/10 RoboRacer hardware configuration.
CAD detail heights are retained from the upstream model. The sensor kit and
collision shapes are not a measured replica of a specific lab vehicle.

Material colors are converted from the FBX's sRGB values. Wheel-*-solid1 uses
the upstream prefab's `Tire.mat` override (dark gray); HDRP shaders are not copied.
A small additional camera housing is illustrative, placed at the configured
ZED X Mini body mount. The onboard camera is monocular and not optically calibrated.

Only the **visual model** is adapted from AutoDRIVE. Vehicle dynamics, contact
solving and actuation remain the existing **MuJoCo** implementation. This is not
AutoDRIVE's Unity/PhysX simulator, a port of its controller, or a calibrated digital twin.
`model-report.json` records output size, geometry count and checksum.

Reproduction, from `car_mujoco/web` with Node 22, npm dependencies and Assimp:

```bash
assimp export /path/to/F1TENTH.fbx /tmp/F1TENTH.glb -fglb2
node scripts/prepare-autodrive.mjs /tmp/F1TENTH.glb
node tests/vehicle.mjs
```
