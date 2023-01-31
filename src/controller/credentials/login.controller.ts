import { Request, Response } from "express";
import loginBusiness from "../../business/credentials/login.business";
import { handleErrorResponse, onlyNumbers } from "../../utils";
import { IErrorResponse, ILoginRequest } from "../../utils/interfaces";

class Login {
  async handle(req: Request, res: Response) {
    try {
      const { document, password }: ILoginRequest = req.body;
      const payload: ILoginRequest = {
        document: document && onlyNumbers(document),
        password: password && password.trim(),
      };

      const token: string = await loginBusiness.execute(payload);

      res.status(200).send({ token });
    } catch (error) {
      const { statusCode, response }: IErrorResponse =
        handleErrorResponse(error);

      res.status(statusCode).send(response);
    }
  }
}

export default new Login();
