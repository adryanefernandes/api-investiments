import { NextFunction, Request, Response } from "express";
import { IAuthenticatorData, IErrorResponse } from "../utils/interfaces";
import authenticatorService from "../services/authenticator.service";
import { UnauthorizedError } from "../errors";
import { handleErrorResponse } from "../utils";

export const claimsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.url.includes("credential")) {
      next();
      return;
    }

    const token: string = req.headers.authorization;
    if (!token) {
      throw new UnauthorizedError("XXX");
    }

    const tokenData: IAuthenticatorData =
      authenticatorService.getTokenData(token);

    req["claims"] = tokenData;
    next();
  } catch (error) {
    if (!(error instanceof UnauthorizedError)) {
      throw new UnauthorizedError("XXX");
    }

    const { statusCode, response }: IErrorResponse = handleErrorResponse(error);
    res.status(statusCode).send(response);
  }
};
