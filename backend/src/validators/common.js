import { AppError } from '../middleware/errors.js';

const MAX_BODY_BYTES = 1024 * 1024;

export function validateJsonObject(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new AppError('VALIDATION_ERROR', 'Request body must be a JSON object.', 400);
  }
  return value;
}

export function assertBodySize(contentLength) {
  if (contentLength && Number(contentLength) > MAX_BODY_BYTES) {
    throw new AppError('PAYLOAD_TOO_LARGE', 'Request body is too large.', 413);
  }
}

export const validationLimits = Object.freeze({ MAX_BODY_BYTES });
