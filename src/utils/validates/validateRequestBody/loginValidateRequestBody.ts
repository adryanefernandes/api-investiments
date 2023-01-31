import { validateDocument, validatePassword } from "..";
import { ValidationError } from "../../../errors";
import { ILoginRequest } from "../../interfaces";

export const validateBodyLogin = (body: ILoginRequest): void => {
  if (!body.document) {
    throw new ValidationError("Documento é obrigatório para o login.", "xxx");
  }

  if (!validateDocument(body.document)) {
    throw new ValidationError("Documento está inválido.", "XXX");
  }

  if (!body.password) {
    throw new ValidationError("Senha é obrigatória para o login.", "xxx");
  }

  if (!validatePassword(body.password)) {
    throw new ValidationError("A senha está fora dos padrões.", "xxx");
  }
};
