import { Password, User } from "../../database/entities";
import { ValidationError } from "../../errors";
import { PasswordRepository } from "../../database/repositories/password.repository";
import { UserRepository } from "../../database/repositories/user.repository";
import { HashManager, Authenticator } from "../../services";
import { onlyNumbers } from "../../utils";
import { IAuthenticatorData, ISignupRequest } from "../../utils/interfaces";
import { validateBodySignup } from "../../utils/validates/validateRequestBody/signupValidateRequestBody";

export class SignupBusiness {
  constructor(
    private _hashManager: HashManager = new HashManager(),
    private _authenticator: Authenticator = new Authenticator(),
    private _userRepository: UserRepository = new UserRepository(),
    private _passwordRepository: PasswordRepository = new PasswordRepository()
  ) {}

  async execute(request: ISignupRequest): Promise<string> {
    validateBodySignup(request);

    // Criação de usuário
    const user: Partial<User> = {
      name: request.name?.toUpperCase().trim(),
      lastName: request.last_name?.toUpperCase().trim(),
      document: onlyNumbers(request.document),
      email: request.email.trim(),
      cellphone: request.cellphone && onlyNumbers(request.cellphone),
      tellphone: request.tellphone && onlyNumbers(request.tellphone),
    };

    const userWithSameEmail: User = await this._userRepository.findByEmail(
      user.email
    );
    if (userWithSameEmail && Object.keys(userWithSameEmail).length > 0) {
      throw new ValidationError("E-mail já cadastrado.", "xxx");
    }

    const userWithSameDocument: User =
      await this._userRepository.findByDocument(user.document);
    if (userWithSameDocument && Object.keys(userWithSameDocument).length > 0) {
      throw new ValidationError("Documento já cadastrado.", "xxx");
    }

    const userSaved: User = await this._userRepository.save(user);

    // Criação de senha
    const hashPassword: string = this._hashManager.create(
      request.password.trim()
    );

    const password: Partial<Password> = {
      hash: hashPassword,
      user: userSaved,
    };
    await this._passwordRepository.save(password);

    // Geração de JWT
    const payload: IAuthenticatorData = {
      id: userSaved.id,
      uuid: userSaved.uuid,
    };
    const jwt: string = this._authenticator.generateToken(payload);

    return jwt;
  }
}

export default new SignupBusiness();
