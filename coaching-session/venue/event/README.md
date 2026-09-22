# Trackside Details

Three Quaternius CC0 characters, converted into nine static poses for a
24-person crowd. Source URLs and SHA256 hashes are in `provenance.json`;
licensing is recorded in `LICENSE.txt`.

The original GLBs are used offline by `tests/export_spectators.mjs`. The
published `spectators.json.gz` contains positions, normals, indices and color
roles only (approximately 0.44 MB compressed). Material regions are welded
and simplified offline before normals are recomputed. Clothing, skin and hair
colors are assigned in `src/event.js`.
Static poses avoid per-frame skeleton evaluation. Cameras, equipment table
and low spectator rails are original Three.js geometry, not imported assets.
All static details are merged into one vertex-colored render mesh, including
their shadow pass, while per-object bounds remain available to layout tests.

All objects are visual-only. They add no MuJoCo collision bodies and are not
part of the HCI controllers or skill inference. Settings > Trackside details
or `?event=off` hides them without resetting the flight.
