# Phase 1 database migration process

Migrations are ordered SQL files under `database/migrations`.

Recommended execution contract for the future migration runner:

1. Open a server-side PostgreSQL connection using `DATABASE_URL`.
2. Ensure `schema_migrations` exists.
3. Read migration files in lexical order.
4. Apply each version exactly once in a transaction.
5. Record the filename/version only after the transaction succeeds.
6. Never run migrations from browser code.
7. Never put production data in migration files.

Phase 1 includes only schema foundation. Property/project/inventory data migration is explicitly deferred to Phase 2.
