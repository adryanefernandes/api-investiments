export class NotFoundError extends Error {
  public statusCode = 404;

  constructor(
    public message: string,
    public trace: string,
    public stack: any = undefined
  ) {
    super(message);
  }
}
