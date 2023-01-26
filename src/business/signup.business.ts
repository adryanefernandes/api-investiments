import { onlyNumbers } from "../utils";
import { ISignupRequest } from "../utils/interfaces";
import { validateBodySignup } from "../utils/validates/validateRequestBody/signupValidateRequestBody";

class SignupBusiness {
  constructor() {}

  async execute(request: ISignupRequest): Promise<void> {
    validateBodySignup(request);

    // Limpa a requisição
    const signup: ISignupRequest = {
      name: request.name?.toUpperCase().trim(),
      last_name: request.last_name?.toUpperCase().trim(),
      email: request.email.trim(),
      document: onlyNumbers(request.document),
      cellphone: request.cellphone && onlyNumbers(request.cellphone),
      tellphone: request.tellphone && onlyNumbers(request.tellphone),
      password: request.password.trim(),
      confirm_password: request.confirm_password.trim(),
    };

    // TODO - Api para cadastro de endereço
    // TODO - VERIFICA SE EMAIL JÁ FOI CADASTRADO
    // TODO - Verificar se documento já foi cadastrado
    // TODO - Hashear a senha

    return;
  }
}

export default new SignupBusiness();
