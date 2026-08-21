# Demo vs Production

This package is a **manufacturer BIM demonstrator**, not a finished family factory.

Before selling it as a live Revit content platform, harden:

1. Replace the JSON file database with PostgreSQL.
2. Add manufacturer and specifier authentication.
3. Store `.rfa`, `.rft`, GLB and shared parameter files in object storage.
4. Add a Revit add-in or Autodesk APS Design Automation job that writes loadable `.rfa` files.
5. Lock shared parameter GUIDs per manufacturer; never regenerate them.
6. Validate type combinations so illegal nested options cannot be requested.
7. Map types to ERP/CPQ SKUs when pricing is required.
8. Route family requests to email/CRM and a library fulfilment queue.
9. Publish to Autodesk Construction Cloud / BIM 360 libraries when required.
10. Add IFC mapping tests and connector unit checks.
11. Rate limiting, monitoring, backups, consent/retention.
12. Automated tests and CI/CD.
