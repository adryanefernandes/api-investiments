import { User } from "../../database/entities";
import { ValidationError } from "../../errors";
import { UserRepository } from "../../database/repositories/user.repository";
import { Authenticator, HashManager } from "../../services";
import { IAuthenticatorData, ILoginRequest } from "../../utils/interfaces";
import { validateDocument } from "../../utils/validate";
import { UserStatus } from "../../utils/enums";

export class LoginBusiness {
  constructor(
    private _hashManager: HashManager = new HashManager(),
    private _authenticator: Authenticator = new Authenticator(),
    private _userRepository: UserRepository = new UserRepository()
  ) {}

  async execute({ document, password }: ILoginRequest): Promise<string> {
    this.validateBodyRequest(document, password);

    const user: User = await this._userRepository.findByDocument(document, {
      passwords: true,
    });
    if (!user) {
      throw new ValidationError(
        "Senha ou documento incorretos, por favor tente novamente.",
        "xxx"
      );
    }

    if (user.status.toLowerCase() !== UserStatus.ACTIVE) {
      throw new ValidationError("Sua conta está inativa.", "xxx");
    }

    // Autentica a senha
    const { hash } = user.passwords;
    const isAuthenticated: boolean = this._hashManager.compareHash(
      password,
      hash
    );
    if (!isAuthenticated) {
      throw new ValidationError(
        "Senha ou documento incorretos, por favor tente novamente.",
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

  private validateBodyRequest(document: string, password: string) {
    if (!document) {
      throw new ValidationError("Documento é obrigatório para o login.", "xxx");
    }

    if (!validateDocument(document)) {
      throw new ValidationError("Documento está inválido.", "XXX");
    }

    if (!password) {
      throw new ValidationError("Senha é obrigatória para o login.", "xxx");
    }
  }
}

export default new LoginBusiness();
