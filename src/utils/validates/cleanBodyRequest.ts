import { onlyNumbers } from "..";
import { ISignupRequest } from "../interfaces/request.interface";

export const cleanSignupBodyRequest = (
  body: ISignupRequest
): ISignupRequest => {
  const response: ISignupRequest = {
    name: body.name?.toUpperCase().trim(),
    last_name: body.last_name?.toUpperCase().trim(),
    email: body.email.trim(),
    document: onlyNumbers(body.document),
    cellphone: body.cellphone && onlyNumbers(body.cellphone),
    tellphone: body.tellphone && onlyNumbers(body.tellphone),
    password: body.password.trim(),
    confirm_password: body.confirm_password.trim(),
  };

  return response;
};
