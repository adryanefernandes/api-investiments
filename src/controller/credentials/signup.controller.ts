import { onlyNumbers } from "./../../utils/index";
import { Request, Response } from "express";
import signupBusiness from "../../business/credentials/signup.business";
import { handleErrorResponse } from "../../utils";
import { IErrorResponse, ISignupRequest } from "../../utils/interfaces";

class Signup {
  async handle(req: Request, res: Response): Promise<void> {
    try {
      const body: ISignupRequest = req.body;
      const user: ISignupRequest = {
        name: body.name?.toUpperCase().trim(),
        last_name: body.last_name?.toUpperCase().trim(),
        document: onlyNumbers(body.document),
        email: body.email?.trim(),
        cellphone: body.cellphone && onlyNumbers(body.cellphone),
        tellphone: body.tellphone && onlyNumbers(body.tellphone),
        password: body.password,
        confirm_password: body.confirm_password,
      };

      const token: string = await signupBusiness.execute(user);

      res.status(201).send({ token });
    } catch (error) {
      const { statusCode, response }: IErrorResponse =
        handleErrorResponse(error);

      res.status(statusCode).send(response);
    }
  }
}

export default new Signup();
