# EquipXR — Revit families for supplier manufacturers

A self-contained white-label **Revit family configurator** for equipment manufacturers who supply BIM content to architects, engineers and contractors.

Specifiers configure a manufacturer product in the browser. Each selection becomes a Revit type: identity data, type catalog, shared parameters, MEP connectors and a family-request lead. Production turns that spec into a loadable `.rfa`.

## What is included

- Live 3D family preview (procedural demo geometry, GLB-ready in production)
- Type parameters: width, finish, door hand, base, nested accessories
- Revit identity: category, OmniClass, MasterFormat, assembly code, IFC class, keynote, host, LOD
- MEP connector visualization (power, cold water, sanitary, exhaust)
- LOD 200 / 300 / 350 preview
- **Revit type catalog (.txt)** download
- **Shared parameter file** download
- Machine-readable **family spec JSON** for a Revit add-in or APS Design Automation job
- CSV schedule and DXF footprint
- Shareable type URL and local save
- Request `.rfa` workflow with Revit year and project name
- Manufacturer portal for family identity and specifier leads
- Website iframe embed for BIM library / product pages
- Optional 1:1 WebXR AR placement
- No npm dependencies required for the demo runtime

## Try it on a phone (GitHub Pages)

The shop page in `public/` is static. Colour, 3D, PDF, share links, and mailto offers work without the Node server. Quote/analytics APIs are skipped when hosted statically.

1. Push this repo to GitHub.
2. In **Settings → Pages**, set Source to **GitHub Actions**.
3. Open the Pages URL on your phone (HTTPS is required for AR).

WebXR AR works in **Chrome on Android**. iPhone Safari does not support WebXR; the 3D view still works there.

## Run it locally

1. Install Node.js 18 or newer.
2. Open a terminal in this folder.
3. Run:

```bash
npm start
```

4. Open:

- Configurator: `http://localhost:8080/`
- Manufacturer portal: `http://localhost:8080/admin`
- Embed demo: `http://localhost:8080/embed`

## What the demo does not emit

A binary Autodesk `.rfa` file cannot be authored in the browser. The demo downloads the **inputs** a production family factory uses:

- type catalog (same name as the family, Revit-native `.txt`)
- shared parameter file
- family spec JSON (geometry map, connectors, type parameters)

See `docs/REVIT_FAMILIES.md` for the production `.rfa` pipeline.

## AR requirements

WebXR immersive AR needs a compatible Android browser, camera permission, and HTTPS (localhost is accepted for development).

## Production geometry note

The sample equipment is generated in JavaScript so the demo runs immediately. Drop a **GLB** at `public/assets/model.glb` to preview a manufacturer mesh in the existing viewer (see `docs/CUSTOMIZATION_GUIDE.md`). A live manufacturer library should map named meshes in that GLB to family solids and nested components, then drive types from the same parameter set as the Revit family. `.rfa` is not loaded in the browser.
