# Customization Guide

## Branding and Revit identity

Change values in `data/database.json` or `/admin`.

Product fields:

- manufacturer, productName, skuPrefix, accent, contactEmail
- familyName, familyCategory, hostMethod
- omniClass, masterFormat, assemblyCode, ifcClass, keynote, productUrl, lod
- default width / depth / height and price

## Product logic

Configuration behavior is in `public/app.js`.

- `FINISHES` / `WIDTH_PRICE` / `BASE_PRICE` — type options
- `SHARED_PARAMS` — shared parameter GUIDs (keep stable in production)
- `buildEquipment()` — demo geometry
- `updateAll()` — type name, dimensions, LOD visibility
- `familySpec()` / `downloadTypeCatalog()` / `downloadSharedParameters()` — BIM exports
- `startAR()` — optional 1:1 placement

## Replacing demo geometry with manufacturer assets

Use **GLB** for the browser preview. Do not use OBJ or FBX in this demo: the viewer is Three.js in the browser, GLB is a single binary glTF file with materials, and OBJ/FBX need extra loaders and lose PBR/workflow fidelity.

`.rfa` is a separate Revit deliverable. GLB is only the 1:1 web/AR preview; the family binary is produced later by Revit / APS.

### Drop-in GLB test (no rewrite)

1. Export the product as **glTF Binary (.glb)** in **meters**, Y-up, origin on the floor. Blender: File → Export → glTF 2.0 → Format: GLB. If CAD exports millimetres, the viewer auto-scales when the bounding box is larger than 10 m.
2. Copy the file to `public/assets/model.glb` (or another name in that folder).
3. The demo already vendors Three.js **r164** plus `GLTFLoader` at `public/vendor/addons/`. No npm install.
4. Run `npm start` and open `http://localhost:8080/`.
5. If `model.glb` is present, it replaces the procedural oven. Otherwise the oven stays. Use `http://localhost:8080/?glb=sample-cube.glb` to load the bundled 1 m test cube at `public/assets/sample-cube.glb`, or `?glb=bin.glb` for any other file in that folder.
6. Verify: toast “Loaded /assets/model.glb”, no red errors in DevTools, object sits on the grid, finish swatches recolor untextured meshes, console logs size in meters.

For production:

1. Author the `.rfa` template in Revit (category, connectors, nested families).
2. Export or model a named-mesh GLB for the browser preview.
3. Map the same parameter names in the configurator and the family.
4. Generate `.rfa` types from the type catalog / family spec JSON.

See `docs/REVIT_FAMILIES.md` and the full Revit → Blender → GitHub checklist in `docs/REVIT_TO_WEB.md`.
