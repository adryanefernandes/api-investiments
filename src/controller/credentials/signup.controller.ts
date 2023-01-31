import { Request, Response } from "express";
import signupBusiness from "../../business/credentials/signup.business";
import { handleErrorResponse } from "../../utils";
import { IErrorResponse, ISignupRequest } from "../../utils/interfaces";

class Signup {
  async handle(req: Request, res: Response): Promise<void> {
    try {
      const body: ISignupRequest = req.body;

      const token: string = await signupBusiness.execute(body);

      res.status(201).send({ token });
    } catch (error) {
      const { statusCode, response }: IErrorResponse =
        handleErrorResponse(error);

      res.status(statusCode).send(response);
    }
  }
}

export default new Signup();
