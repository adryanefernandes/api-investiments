import * as jwt from "jsonwebtoken";
import { UnauthorizedError } from "../errors";
import { IAuthenticatorData } from "../utils/interfaces";

export class Authenticator {
  /**
   * Gera token com id e uuid
   * @param payload
   * @returns
   */
  generateToken(payload: IAuthenticatorData): string {
    const token = jwt.sign(payload, process.env.JWT_KEY as string, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    return token;
  }

  /**
   * Pega informações do toke
   * @param token
   * @returns
   */
  getTokenData(token: string): IAuthenticatorData {
    try {
      const result: any = jwt.verify(token, process.env.JWT_KEY as string);
      return result;
    } catch (error) {
      throw new UnauthorizedError("XXX");
    }
  }
}

export default new Authenticator();
