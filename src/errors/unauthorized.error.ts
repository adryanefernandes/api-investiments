export class UnauthorizedError extends Error {
  public statusCode = 401;

  constructor(public trace: string) {
    super("Ação não permitida");
  }
}
