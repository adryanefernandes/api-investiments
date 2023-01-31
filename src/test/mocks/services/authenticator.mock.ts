import * as jwt from "jsonwebtoken";
import { IAuthenticatorData } from "../../../utils/interfaces";

export class Authenticator {
  generateToken(payload: IAuthenticatorData): string {
    return "token";
  }

  getTokenData(token: string): IAuthenticatorData {
    const result: IAuthenticatorData = {
      id: 1,
      uuid: "123",
    };
    return result;
  }
}

export default new Authenticator();
