import { GENERIC_ERROR } from "../utils/constants";

export class ExceptionError extends Error {
  public statusCode = 500;

  constructor(public trace: string, public stack: any) {
    super(GENERIC_ERROR);
  }
}
