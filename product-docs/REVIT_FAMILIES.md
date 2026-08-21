# Revit family pipeline

This demo is for **supplier manufacturers** who issue loadable Revit families to specifiers.

## Demo vs native .rfa

| Deliverable | In this demo | Production |
|---|---|---|
| Type catalog `.txt` | Yes — Revit-native tab file | Same file, shipped next to `.rfa` |
| Shared parameter file | Yes | Locked GUID set per manufacturer |
| Family spec JSON | Yes | Input to Design Automation / add-in |
| `.rfa` binary | Not generated in-browser | Written by Revit |

Name the type catalog the same as the family (`Apex_VX-900_CombiOven.txt`). Revit loads it automatically when the user loads the family.

## Type catalog columns

The configurator writes:

- built-in identity: Manufacturer, Model, Type Mark, URL, Description, OmniClass, Assembly Code, Keynote
- instance/type dimensions: Width, Depth, Height (mm)
- manufacturer shared parameters: `EQX_SKU`, finish, door hand, base, hood, shelf, water kit, load, weight

Yes/no values are `1` / `0`.

## Recommended family structure

```text
Apex_VX-900_CombiOven.rfa          Specialty Equipment, level-hosted
  Types                            one type per configurator SKU
  Nested
    Apex_VX-900_Hood               visibility = EQX_Hood
    Apex_VX-900_Shelf
    Apex_VX-900_WaterKit
  Connectors
    Electrical  Power              rear-right, 250 mm AFF
    Pipe        Domestic Cold Water
    Pipe        Sanitary
    Duct        Exhaust            when hood type is on
```

## Production job (APS or desktop add-in)

1. Load `Metric Specialty Equipment.rft` (or the manufacturer's template).
2. Bind the shared parameter file (stable GUIDs).
3. Create or update types from the catalog / JSON.
4. Map named GLB meshes to extrusions or imported SAT/DWG geometry at millimetre scale.
5. Place connectors from the spec origins (mm, family coordinate system).
6. Set IFC Export As / OmniClass / Keynote.
7. Save `.rfa` + `.txt` and publish to ACC or the manufacturer library URL.

## Categories this pattern fits

- Specialty Equipment (foodservice, medical, lockers)
- Mechanical Equipment (AHU, boilers, heat pumps)
- Electrical Equipment (switchgear, panels)
- Plumbing Equipment (pumps, tanks)

Change `familyCategory`, `hostMethod` and connector domains per product line in `/admin`.
