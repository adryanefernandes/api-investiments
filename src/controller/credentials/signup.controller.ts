import { Request, Response } from "express";
import { handleErrorResponse } from "../../utils";
import { cleanSignupRequestBody } from "../../utils/cleanRequests/cleanSignupRequest";
import { IErrorResponse, ISignupRequest } from "../../utils/interfaces";
import { validateBodySignup } from "../../utils/validates/validateRequestBody/signupValidateRequestBody";

class Signup {
  handle(req: Request, res: Response) {
    try {
      const body: ISignupRequest = req.body;

      validateBodySignup(body);

      const handleBody: ISignupRequest = cleanSignupRequestBody(body);

      // TODO - Api para cadastro de endereço
      // TODO - VERIFICA SE EMAIL JÁ FOI CADASTRADO
      // TODO - Verificar se documento já foi cadastrado
      // TODO - Hashear a senha

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