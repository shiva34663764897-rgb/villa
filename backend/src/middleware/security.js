import { randomUUID } from 'node:crypto';

export function requestId() {
  return randomUUID();
}

export function securityHeaders() {
  return {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
  };
}

export function corsHeaders(origin, allowedOrigins) {
  const allow = origin && allowedOrigins.includes(origin) ? origin : '';
  return {
    ...(allow ? { 'Access-Control-Allow-Origin': allow, Vary: 'Origin' } : {}),
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Request-Id',
    'Access-Control-Max-Age': '600'
  };
}
