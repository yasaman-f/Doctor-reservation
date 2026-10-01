/** Normalized API error matching backend AllExceptionsFilter. */
export type ApiErrorBody = {
  statusCode: number;
  message: string | string[];
};

export class ApiError extends Error {
  readonly statusCode: number;
  readonly messages: string[];

  constructor(statusCode: number, message: string | string[]) {
    const messages = Array.isArray(message) ? message : [message];
    super(messages.join(', '));
    this.name = 'ApiError';
    this.statusCode = statusCode;
    this.messages = messages;
  }

  get isUnauthorized(): boolean {
    return this.statusCode === 401;
  }

  get isForbidden(): boolean {
    return this.statusCode === 403;
  }

  get isNotFound(): boolean {
    return this.statusCode === 404;
  }
}
