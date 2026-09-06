import { getConfig, assertServerConfiguration } from './config/env.js';
import { handleError, methodNotAllowed, notFound } from './middleware/errors.js';
import { createLogger } from './middleware/logger.js';
import { requestId, securityHeaders, corsHeaders } from './middleware/security.js';
import { assertBodySize } from './validators/common.js';
import { healthResponse } from './routes/health.js';

export function createApp(env = process.env) {
  const config = getConfig(env);
  assertServerConfiguration(config);
  const logger = createLogger(config);

  return async function app(req, res) {
    const id = req.headers['x-request-id'] || requestId();
    const started = Date.now();
    const origin = req.headers.origin;
    const headers = {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      ...securityHeaders(),
      ...corsHeaders(origin, config.corsAllowedOrigins),
      'X-Request-Id': id
    };

    try {
      assertBodySize(req.headers['content-length']);
      if (req.method === 'OPTIONS') {
        res.writeHead(204, headers);
        return res.end();
      }

      const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
      if (url.pathname === '/api/v1/health' && req.method === 'GET') {
        const body = healthResponse({ databaseConfigured: Boolean(config.databaseUrl) });
        res.writeHead(200, headers);
        return res.end(JSON.stringify(body));
      }

      if (url.pathname.startsWith('/api/v1/')) {
        throw methodNotAllowed('This API endpoint is not available yet.');
      }
      throw notFound();
    } catch (error) {
      const result = handleError(error, id, logger);
      res.writeHead(result.status, headers);
      return res.end(JSON.stringify(result.body));
    } finally {
      logger.info('request_complete', {
        requestId: id,
        method: req.method,
        path: req.url,
        durationMs: Date.now() - started
      });
    }
  };
}

export default createApp();
