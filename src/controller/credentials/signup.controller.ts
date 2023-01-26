import { Request, Response } from "express";
import signupBusiness from "../../business/signup.business";
import { handleErrorResponse } from "../../utils";
import { IErrorResponse, ISignupRequest } from "../../utils/interfaces";

class Signup {
  async handle(req: Request, res: Response): Promise<void> {
    try {
      const body: ISignupRequest = req.body;

      await signupBusiness.execute(body);

      res.send({ message: "Deu tudo certo" });
    } catch (error) {
      console.log(error);
      const { statusCode, response }: IErrorResponse =
        handleErrorResponse(error);

      res.status(statusCode).send(response);
    }
  }
}

export default new Signup();
