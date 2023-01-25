import { ValidationError } from "../../errors";
import { ISignupRequest } from "../interfaces/request.interface";
import {
  validateCellphone,
  validateDocument,
  validateEmail,
  validatePassword,
  validateTellphone,
} from ".";

export const validateBodySignup = (body: ISignupRequest): void => {
  if (!body.name || body.name?.length < 3)
    throw new ValidationError(
      "O nome é obrigatório e deve conter mais de 3 caracteres.",
      "XXX"
    );

  if (!body.last_name || body.last_name?.length < 3)
    throw new ValidationError(
      "O sobrenome é obrigatório e deve conter mais de 3 caracteres.",
      "XXX"
    );

  if (!body.document)
    throw new ValidationError("O documento é obrigatório.", "xxx");

  if (!validateDocument(body.document))
    throw new ValidationError("Documento inválido.", "xxx");

  if (!body.email) throw new ValidationError("Email é obrigatório.", "xxx");

  if (!validateEmail(body.email))
    throw new ValidationError("E-mail inválido.", "XXX");

  if (body.cellphone && !validateCellphone(body.cellphone))
    throw new ValidationError("Celular inválido.", "xxx");

  if (body.tellphone && !validateTellphone(body.tellphone))
    throw new ValidationError("Telefone inválido.", "xxx");

  if (!body.password) throw new ValidationError("Senha é obrigratória.", "xxx");

  if (!validatePassword(body.password))
    throw new ValidationError("A senha está fora dos padrões.", "xxx");

  if (!body.confirm_password)
    throw new ValidationError("Confirmação de senha é obrigatória", "xxx");

  if (body.password !== body.confirm_password)
    throw new ValidationError(
      "A confirmação de senha está diferente da confirmação de senha.",
      "xxx"
    );
};
