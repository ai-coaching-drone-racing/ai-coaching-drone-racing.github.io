# RoboRacer visual asset

`roboracer_max.stl` is redistributed unmodified from:

- Repository: https://github.com/mlab-upenn/autoware_launch.roboracer
- Commit: f11738ed35a995c0bc046666e3cb9eb0f7bda053
- Path: vehicle/roboracer_offroad_launch/roboracer_offroad_description/mesh/roboracer_max.stl
- License: Apache License 2.0, reproduced in `LICENSE`.

The original package's `vehicle.xacro` displays this mesh at scale 0.5. The browser displays it at that scale on a pit-area platform, not as the collision model. The drivable car has independently authored box/cylinder geometry and MuJoCo rigid-body physics. Its dimensions are based on this repository's `vehicle_info.param.yaml` (0.324 m wheelbase, 0.255 m tread, 0.055 m wheel radius, 0.041 m tire width, 0.4 rad center-steering limit). This is not a validated port of the original Isaac model or a claim that the STL precisely matches current lab hardware.

The authored track and room are not a scan of an xLab facility. Lab logos are supplied by the project owner and retained for identification; they are not licensed by the vehicle package.
