# Client Pitch — Revit families for supplier manufacturers

## One-line proposition

Give each manufacturer a white-label configurator where specifiers **build a Revit family type, see connectors at LOD 350, download a type catalog, and request the exact `.rfa`**.

## 60-second demo flow

1. Open the configurator as if it were the manufacturer's BIM library page.
2. Change width and finish — type name, OmniClass identity and 3D update together.
3. Switch base to casters and turn on the condensation hood (nested family).
4. Toggle LOD 200 / 300 / 350 to show how BIM detail is controlled.
5. Show MEP connectors (power, water, sanitary, exhaust).
6. Download the **type catalog** and **shared parameter** files.
7. Download family spec JSON and explain that production writes the `.rfa` from this payload.
8. Share the type URL with a project BIM lead.
9. **Request .rfa** with Revit year and project name.
10. Open the manufacturer portal: identity data, specifier leads, embed snippet.

## What the manufacturer gains

- One family definition instead of dozens of one-off `.rfa` files
- Specifiers pick valid types instead of exploding geometry in Revit
- Identity data (OmniClass, MasterFormat, IFC) stays consistent
- Connector placement is visible before the family hits the model
- Structured BIM leads instead of "please send Revit family" emails
- Embed on the existing product or BIM library site

## Commercial packaging example

- White-label manufacturer workspace
- Per-product family authoring (category, connectors, nested types)
- Type catalog + shared parameter standard
- Production `.rfa` factory (Revit add-in or Autodesk APS Design Automation)
- Optional IFC / COBie / ACC library publish
- Optional ERP / CPQ mapping for quoted types
