# Deployment Notes

## Fastest manufacturer demo

Run locally with `npm start` and screen-share the configurator plus `/admin`.

For a client BIM workshop, host over HTTPS so type URLs can be opened on a second machine.

## Production requirements

- authentication and manufacturer tenancy,
- a real database,
- object storage for `.rfa` / `.rft` / GLB,
- Revit Design Automation or a signed add-in,
- stable shared parameter GUIDs,
- server-side type validation,
- spam protection on family requests,
- library publish (ACC) when required,
- backups, monitoring, consent/retention.

## HTTPS and AR

WebXR AR is optional. Localhost works for development; phone demos need HTTPS.
