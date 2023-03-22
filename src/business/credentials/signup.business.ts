import {
  Example,
  OperationId,
  Tags,
  Response,
  Post,
  Route,
  Body,
} from "@tsoa/runtime";
import { credentialsResponseExample } from "./../../swagger/examples";
import { CredentialsResponse } from "./../../utils/interfaces/response.interface";
import { Password, User } from "../../database/entities";
import { NotFoundError, ExceptionError, ValidationError } from "../../errors";
import { PasswordRepository } from "../../database/repositories/password.repository";
import { UserRepository } from "../../database/repositories/user.repository";
import { HashManager, Authenticator } from "../../services";
import { IAuthenticatorData, ISignupRequest } from "../../utils/interfaces";
import {
  validateCellphone,
  validateDocument,
  validateEmail,
  validatePassword,
  validateTellphone,
} from "../../utils/validate";

@Route("credential")
export class SignupBusiness {
  constructor(
    private _hashManager: HashManager = new HashManager(),
    private _authenticator: Authenticator = new Authenticator(),
    private _userRepository: UserRepository = new UserRepository(),
    private _passwordRepository: PasswordRepository = new PasswordRepository()
  ) {}

  // Decoradores para a documentação
  @Post("signup")
  @Tags("Credenciais")
  @OperationId("credentialSignup")
  @Example<CredentialsResponse>(credentialsResponseExample)
  @Response<ValidationError>(400, "Bad request")
  @Response<NotFoundError>(404, "Not Found")
  @Response<ExceptionError>(500, "Internal Server Error")

  /**
   * Cadastra usuário no sistema.
   */
  async execute(@Body() body: ISignupRequest): Promise<string> {
    this.validateBodyRequest(body);

    const { name, last_name, document, email, cellphone, tellphone, password } =
      body;

    const userWithSameEmail: User = await this._userRepository.findByEmail(
      email
    );
    if (userWithSameEmail !== null) {
      throw new ValidationError("E-mail já cadastrado.", "xxx");
    }

    const userWithSameDocument: User =
      await this._userRepository.findByDocument(document);
    if (userWithSameDocument !== null) {
      throw new ValidationError("Documento já cadastrado.", "xxx");
    }

    const user: Partial<User> = {
      name,
      lastName: last_name,
      document,
      email,
      cellphone,
      tellphone,
    };
    const userSaved: User = await this._userRepository.save(user);
    await this.createPassword(password, userSaved);

    // Geração de JWT
    const payload: IAuthenticatorData = {
      id: userSaved.id,
      uuid: userSaved.uuid,
    };
    const jwt: string = this._authenticator.generateToken(payload);

    return jwt;
  }

  /**
   * Faz um hash da senha e salva no banco de dados
   * @param password
   * @param user
   */
  private async createPassword(password: string, user: User) {
    const hashPassword: string = this._hashManager.create(password.trim());
    const passwordEntity: Partial<Password> = {
      hash: hashPassword,
      user: user,
    };
    await this._passwordRepository.save(passwordEntity);
  }

  private validateBodyRequest(body: ISignupRequest) {
    if (!body.name || body.name?.length < 3) {
      throw new ValidationError(
        "O nome é obrigatório e deve conter mais de 3 caracteres.",
        "XXX"
      );
    }

    if (!body.last_name || body.last_name?.length < 3) {
      throw new ValidationError(
        "O sobrenome é obrigatório e deve conter mais de 3 caracteres.",
        "XXX"
      );
    }

    if (!body.document) {
      throw new ValidationError("O documento é obrigatório.", "xxx");
    }

    if (!validateDocument(body.document)) {
      throw new ValidationError("Documento inválido.", "xxx");
    }

    if (!body.email) {
      throw new ValidationError("E-mail é obrigatório.", "xxx");
    }

    if (!validateEmail(body.email)) {
      throw new ValidationError("E-mail inválido.", "XXX");
    }

    if (body.cellphone && !validateCellphone(body.cellphone)) {
      throw new ValidationError("Celular inválido.", "xxx");
    }

    if (body.tellphone && !validateTellphone(body.tellphone)) {
      throw new ValidationError("Telefone inválido.", "xxx");
    }

    if (!body.password) {
      throw new ValidationError("Senha é obrigatória.", "xxx");
    }

    if (!validatePassword(body.password)) {
      throw new ValidationError("A senha está fora dos padrões.", "xxx");
    }

    if (!body.confirm_password) {
      throw new ValidationError("Confirmação de senha é obrigatória.", "xxx");
    }

    if (body.password !== body.confirm_password) {
      throw new ValidationError(
        "A confirmação de senha está diferente da confirmação de senha.",
        "xxx"
      );
    }
  }
}

export default new SignupBusiness();
