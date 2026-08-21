# Demo API

## GET /api/product
Returns manufacturer branding plus Revit identity (family name, category, OmniClass, MasterFormat, IFC class, host, LOD).

## POST /api/product
Updates product, branding and family identity fields.

## GET /api/quotes
Returns `.rfa` / specification requests.

## POST /api/quotes
Creates a family request. The payload includes the current type, BIM spec, Revit version and project name.

## POST /api/events
Stores analytics events (`view`, `bim_download`, `ar_launch`, `share`, `quote_submit`).

## GET /api/analytics
Aggregated views, BIM downloads, AR launches and family requests.

## GET /api/health
Server health response.
