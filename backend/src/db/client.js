export function createDatabaseClient(env = process.env) {
  const connectionString = env.DATABASE_URL || '';

  return Object.freeze({
    configured: Boolean(connectionString),
    connectionStringPresent: Boolean(connectionString),
    // Provider-specific driver/query implementation is intentionally deferred.
    // Phase 1 establishes this server-only boundary; Phase 2 selects the managed PostgreSQL provider.
    async query() {
      throw new Error('Database driver is not configured. Select and configure the production PostgreSQL provider before Phase 2.');
    }
  });
}
