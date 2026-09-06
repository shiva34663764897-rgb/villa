export function healthResponse({ databaseConfigured = false } = {}) {
  return {
    status: 'ok',
    service: 'vr-real-estates-api',
    version: 'v1',
    database: { configured: databaseConfigured },
    timestamp: new Date().toISOString()
  };
}
