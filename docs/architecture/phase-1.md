# VR Real Estates Architecture

## Current state

The customer website remains the existing Vite frontend. Its static project/property data and current UI are intentionally unchanged in Phase 1.

## Phase 1 boundary

```text
Browser / Vite frontend
        |
        | HTTPS JSON API
        v
/api/v1/*
        |
        v
Server foundation
  - validation
  - security headers/CORS
  - request IDs
  - structured logs
  - centralized errors
        |
        v
Server-only database boundary
        |
        v
PostgreSQL (provider/driver selected before Phase 2)
```

The browser never connects directly to PostgreSQL. Secrets such as `DATABASE_URL` are server-side only.

## API versioning

All application endpoints use `/api/v1`. Phase 1 exposes only `GET /api/v1/health`; future domain routes are reserved for later phases.

## Database model

The foundation defines relational boundaries for projects, properties, inventory, leads, site visits, bookings, follow-ups, AI conversations/messages, and WhatsApp conversations/messages. No existing frontend records are migrated in Phase 1.

## State ownership

Future customer/AI/WhatsApp requests may create requests through the backend, but authoritative business-state transitions must be controlled by the server-side business rules and owner/CRM authorization. Channels do not become independent sources of truth.

## Deployment

The API entry point under `api/` is compatible with Vercel's serverless function model. The same application can be run locally with the Node HTTP adapter in `backend/src/server.js`.

## Dependency policy

Phase 1 deliberately uses Node's built-in HTTP/runtime APIs for the backend foundation. No large framework or AI/WhatsApp SDK is introduced before the relevant phase. A managed PostgreSQL driver will be selected and installed immediately before the database is actually connected in a later phase.
