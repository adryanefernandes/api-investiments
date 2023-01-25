export class ValidationError extends Error {
  public statusCode = 400;

  constructor(
    public message: string,
    public trace: string,
    public stack: any = undefined
  ) {
    super(message);
  }
}
