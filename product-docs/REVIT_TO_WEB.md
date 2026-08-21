# Revit family → Blender GLB → GitHub test

Browser preview uses **GLB only**. Revit `.rfa` is the BIM family. OBJ/FBX are interchange files you convert in Blender, not files this demo loads.

```text
Revit (.rfa)  →  FBX or SAT  →  Blender  →  GLB  →  public/assets/  →  GitHub  →  npm start
```

---

## 1. Set up the family in Revit

Use the Family Editor, not a project file, as the source of truth.

1. **File → New → Family**.
2. Pick a metric template that matches the product:
   - Outdoor bin / street furniture: `Metric Generic Model.rft` or Specialty Equipment, then set **Category** under Family Category and Parameters.
   - For the CityLine-style bin: category **Specialty Equipment** or **Site**, **Work Plane-Based** off, **Always vertical** on, hosted on a **level**.
3. **Insertion origin:** the intersection of the three reference planes on the reference level is the insert point. Put the **bottom of the bin on the reference level**, centred on the origin. That is what Blender and the web viewer treat as the floor.
4. Model with **solids** (extrusion / blend / revolve). Avoid imported exploded CAD meshes inside the family if you can.
5. Name geometry clearly (select the solid → Properties → Subcategory or use nested families):
   - `BODY`
   - `HOOD` or `LID`
   - `LOGO_PLATE`
6. **Materials:** create a material parameter `BodyColor` (type parameter, Material). Create **types**, one per RAL, e.g. `CL120-RAL7021`. Do not bake eight separate families.
7. **Identity Data** (type): Manufacturer, Model, URL, Description, OmniClass, Keynote.
8. **Save** as `Mfr_CityLine120_LitterBin.rfa`.
9. Load into a blank metric project, place **one instance** on Level 1, isolate it, open a **3D view**, set Visual Style to **Shaded** or **Realistic**.

You now have the family. Next you export a mesh for Blender — Revit does not export GLB.

---

## 2. Export from Revit (for Blender)

**Preferred: FBX** (built into Revit).

1. In the project 3D view, hide levels, grids, and crop region. Only the family should be visible.
2. **File → Export → FBX**.
3. Options:
   - Without lights/cameras if offered
   - Use the view’s 3D orientation
4. Save as `CityLine120.fbx` next to the `.rfa` (not in `public/` yet).

**If FBX looks wrong:** **File → Export → CAD Formats → DWG**, export the 3D view as **ACIS solids** (not “polymesh” if you have the choice). Blender imports DWG less reliably than FBX; use DWG only as fallback.

Do **not** export `.rfa` into this web app. The configurator cannot open it.

---

## 3. Import into Blender and export GLB

1. Install [Blender](https://www.blender.org/) 4.x.
2. File → New → General. Delete the default cube.
3. **File → Import → FBX** (`CityLine120.fbx`).
4. In the import panel:
   - Scale: start at **1.0**. After import, select all → check dimensions in the Sidebar (**N**). A 120 L bin should be about **0.4–0.6 m wide** and **0.8–1.2 m tall**. If it is ~500–1200 units tall, it is in millimetres: select all → **S** then type `0.001` → Enter.
5. **Object → Set Origin → Origin to 3D Cursor** after putting the cursor at the bottom centre (Shift+S). Rotation: **Object → Apply → Rotation & Scale**.
6. In Outliner, rename meshes: `BODY`, `LID`, `LOGO_PLATE`.
7. Assign a simple Principled BSDF to `BODY` (untextured). The configurator recolors untextured meshes from the finish swatches.
8. **File → Export → glTF 2.0**:
   - Format: **glTF Binary (.glb)**
   - Include: Selected Objects (select the bin only)
   - Transform: **+Y Up**
   - Geometry: apply modifiers
   - Do **not** enable Draco unless you also add a Draco decoder (this demo does not).
9. Save as `model.glb`.

---

## 4. Drop it into this project (local test)

1. Copy `model.glb` to:

```text
Product configurator/public/assets/model.glb
```

2. In this folder, run:

```bash
npm start
```

3. Open `http://localhost:8080/`
4. You should see the GLB on the grid, a toast `Loaded /assets/model.glb (meters, 1:1)`, and DevTools console size in meters.
5. Other filenames: put `bin.glb` in the same folder and open `http://localhost:8080/?glb=bin.glb`.
6. Hard-refresh (Ctrl+Shift+R) if an old service worker is caching `app.js`.

If the model is a giant blob, CAD units were mm (the app tries to scale when the box is larger than 10 m). If it is a speck, re-export from Blender in **meters**.

---

## 5. Test using GitHub

This folder is not a git repo yet. GitHub is how you share the GLB and run the same test on another PC or in Codespaces. GitHub Pages will **not** run `npm start` (the API needs Node). Use clone or Codespaces.

### First push

On GitHub: **New repository** (empty, no README if you already have files). Then in this project folder:

```bash
git init
git add .
git commit -m "Add configurator and GLB preview."
git branch -M main
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main
```

If `model.glb` is larger than ~50 MB, use [Git LFS](https://git-lfs.com/):

```bash
git lfs install
git lfs track "*.glb"
git add .gitattributes public/assets/model.glb
git commit -m "Track GLB with Git LFS."
git push
```

Do not commit `.rfa` / `.fbx` source unless the manufacturer wants them in a private repo. Keep source CAD in a `source/` folder or outside the web repo.

### Test on another machine

```bash
git clone https://github.com/YOUR_USER/YOUR_REPO.git
cd YOUR_REPO
npm start
```

Open `http://localhost:8080/`. If `public/assets/model.glb` is on `main`, the viewer loads it.

### Test in GitHub Codespaces

1. On the GitHub repo page: **Code → Codespaces → Create codespace on main**.
2. In the Codespace terminal: `npm start`.
3. When it says the app is on port **8080**, use **Ports** → Open in Browser.
4. Confirm the GLB loads the same as locally.

### Pull a new GLB after you re-export

```bash
# on your workstation, after replacing public/assets/model.glb
git add public/assets/model.glb
git commit -m "Update family preview GLB."
git push
```

On the test machine or Codespace: `git pull` then refresh the browser.

---

## What each file is for

| File | Who uses it |
|---|---|
| `.rfa` | Revit. Specifiers load this. Not the web viewer. |
| `.fbx` / `.dwg` | Blender import only. |
| `.glb` | This configurator (`public/assets/model.glb`). |
| Type catalog `.txt` / shared params | Downloaded from the demo for the later `.rfa` factory. |
