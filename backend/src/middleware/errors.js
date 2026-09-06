export class AppError extends Error {
  constructor(code, message, status = 500, details = undefined) {
    super(message);
    this.name = 'AppError';
    this.code = code;
    this.status = status;
    this.details = details;
  }
}

export function notFound(message = 'Route not found') {
  return new AppError('NOT_FOUND', message, 404);
}

export function methodNotAllowed(message = 'Method not allowed') {
  return new AppError('METHOD_NOT_ALLOWED', message, 405);
}

export function handleError(error, requestId, logger) {
  if (error instanceof AppError) {
    logger.warn('request_error', { requestId, code: error.code, status: error.status });
    return {
      status: error.status,
      body: { error: { code: error.code, message: error.message, requestId } }
    };
  }

  logger.error('unhandled_error', { requestId, error: error instanceof Error ? error.message : String(error) });
  return {
    status: 500,
    body: { error: { code: 'INTERNAL_ERROR', message: 'An unexpected server error occurred.', requestId } }
  };
}
