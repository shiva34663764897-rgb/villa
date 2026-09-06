# VR Real Estates — Backend Foundation

This directory contains the Phase 1 server boundary for the existing Vite frontend.

## Rules

- The existing frontend remains protected; no property/project data is migrated in Phase 1.
- Browser code must never receive database credentials or private service secrets.
- All future business-state changes go through the server and database rules.
- `DATABASE_URL` is server-side only.
- The database migration files define the future source-of-truth model but contain no production data.

## Local development

The backend uses the Node.js built-in HTTP server for the foundation so the repository does not need a large framework before the first business feature is approved.

```bash
node backend/src/server.js
```

The health endpoint is available at `GET /api/v1/health`.

## Database

Phase 1 defines PostgreSQL-oriented migrations and a provider-neutral connection boundary. A concrete managed PostgreSQL provider/driver should be selected and installed before Phase 2 data migration. No credentials are committed.
