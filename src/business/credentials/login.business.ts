import { User } from "../../entities";
import { ValidationError } from "../../errors";
import userRepository from "../../repositories/user.repository";
import { Authenticator, HashManager } from "../../services";
import { IAuthenticatorData, ILoginRequest } from "../../utils/interfaces";
import { validateBodyLogin } from "../../utils/validates/validateRequestBody/loginValidateRequestBody";

class LoginBusiness {
  constructor(
    private _hashManager: HashManager = new HashManager(),
    private _authenticator: Authenticator = new Authenticator()
  ) {}

  async execute(body: ILoginRequest): Promise<string> {
    validateBodyLogin(body);

    const { document, password }: ILoginRequest = body;

    // Valida senha
    const user: User = await userRepository.findByDocument(document, {
      passwords: true,
    });

    const {
      passwords: { hash },
    } = user;
    const isAuthenticator: boolean = this._hashManager.compareHash(
      password,
      hash
    );

    if (!isAuthenticator) {
      throw new ValidationError(
        "Senha incorreta, por favor tente novamente.",
        "xxx"
      );
    }

    // Geração de JWT
    const payload: IAuthenticatorData = {
      id: user.id,
      uuid: user.uuid,
    };
    const jwt: string = this._authenticator.generateToken(payload);

    return jwt;
  }
}

export default new LoginBusiness();
