# Architecture

## Demo architecture

```text
Specifier browser
  ├─ Family type configurator
  ├─ Three.js 3D preview (meters = 1:1)
  ├─ LOD / MEP connector display
  ├─ Type catalog + shared parameter + family spec downloads
  └─ Request .rfa lead
        │
        ▼
Node.js demo API
  ├─ /api/product     manufacturer + Revit identity
  ├─ /api/quotes      family requests
  ├─ /api/events      views, BIM downloads
  └─ /api/analytics
        │
        ▼
JSON demo database
```

The demo uses Node core modules only so a manufacturer can run it without installing a BIM toolchain.

## Production family factory

```text
Manufacturer catalog (PIM / ERP)
        │
White-label configurator
        │
        ├─ Type parameters
        ├─ Shared parameters
        ├─ Connector map
        └─ Named-mesh GLB
        │
Family job (Revit add-in or APS Design Automation for Revit)
        │
        ├─ Load family template (.rft)
        ├─ Bind shared parameters
        ├─ Write types from type catalog / JSON
        ├─ Place MEP connectors
        └─ Save loadable .rfa (+ .txt catalog)
        │
Specifier / ACC / BIM 360 library
```

## Multi-tenant manufacturer model

Each supplier manufacturer receives:

- their family naming standard,
- their Revit categories and templates,
- their shared parameter GUIDs,
- their product catalog and nested options,
- their quote routing for `.rfa` requests,
- and a unique embed URL or subdomain.

One platform serves many manufacturers without duplicating the application.
