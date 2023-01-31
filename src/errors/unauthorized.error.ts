export class UnauthorizedError extends Error {
  public statusCode = 401;

  constructor(
    public message: string,
    public trace: string,
    public stack: any = undefined
  ) {
    super(message);
  }
}
