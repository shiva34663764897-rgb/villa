const DEFAULT_PORT = 3001;

function parseList(value) {
  return String(value || '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

export function getConfig(env = process.env) {
  return Object.freeze({
    nodeEnv: env.NODE_ENV || 'development',
    port: Number(env.API_PORT || DEFAULT_PORT),
    databaseUrl: env.DATABASE_URL || '',
    corsAllowedOrigins: parseList(env.CORS_ALLOWED_ORIGINS || 'http://localhost:3000')
  });
}

export function assertServerConfiguration(config = getConfig()) {
  if (!Number.isInteger(config.port) || config.port < 1 || config.port > 65535) {
    throw new Error('Invalid API_PORT configuration.');
  }
}
