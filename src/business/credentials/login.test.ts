import userRepositoryMock from "../../test/mocks/repositories/userRepository.mock";
import authenticatorMock from "../../test/mocks/services/authenticator.mock";
import hashManagerMock from "../../test/mocks/services/hashManager.mock";
import { ILoginRequest } from "../../utils/interfaces";
import { LoginBusiness } from "./login.business";

describe("Regra de negócio do login", () => {
  test("Em caso de sucesso", async () => {
    const loginBusiness: LoginBusiness = new LoginBusiness(
      hashManagerMock,
      authenticatorMock,
      userRepositoryMock
    );

    const request: ILoginRequest = {
      document: "60234460601",
      password: "Alterar@123",
    };

    const res = await loginBusiness.execute(request);
    console.log(res);
  });
});
