import { ValidationError } from "../../../errors";
import { signupBodyRequest } from "../../../test/mocks/requests.mock";
import { validateBodySignup } from "./signupValidateRequestBody";

describe("Funções para validar body vinda da requisição de cadastro (signup)", () => {
  test("Tudo preeenchido corretamente", () => {
    expect(validateBodySignup(signupBodyRequest)).toBeUndefined();
  });

  test("Nome vazio e com menos de 3 caracteres", () => {
    const body = { ...signupBodyRequest };
    try {
      body.name = "";
      validateBodySignup(body);
    } catch (error) {
      expect(error instanceof ValidationError).toBe(true);
      expect(error.message).toMatch(/nome/);
    }

    try {
      body.name = "fu";
      validateBodySignup(body);
    } catch (error) {
      expect(error instanceof ValidationError).toBe(true);
      expect(error.message).toMatch(/nome/);
    }
  });

  test("Sobrenome vazio e com menos de 3 caracteres", () => {
    const body = { ...signupBodyRequest };
    try {
      body.last_name = "";
      validateBodySignup(body);
    } catch (error) {
      expect(error instanceof ValidationError).toBe(true);
      expect(error.message).toMatch(/sobrenome/);
    }

    try {
      body.last_name = "tal";
      validateBodySignup(body);
    } catch (error) {
      expect(error instanceof ValidationError).toBe(true);
      expect(error.message).toMatch(/sobrenome/);
    }
  });

  test("Documento vazio ou inválido", () => {
    const body = { ...signupBodyRequest };
    try {
      body.document = "";
      validateBodySignup(body);
    } catch (error) {
      expect(error instanceof ValidationError).toBe(true);
      expect(error.message.toLowerCase()).toMatch(/documento/);
    }

    try {
      body.document = "12345678901";
      validateBodySignup(body);
    } catch (error) {
      expect(error instanceof ValidationError).toBe(true);
      expect(error.message.toLowerCase()).toMatch(/documento/);
    }

    try {
      body.document = "12345678901234";
      validateBodySignup(body);
    } catch (error) {
      expect(error instanceof ValidationError).toBe(true);
      expect(error.message?.toLowerCase()).toMatch(/documento/);
    }
  });

  test("Email vazio ou inválido", () => {
    const body = { ...signupBodyRequest };
    try {
      body.email = "";
      validateBodySignup(body);
    } catch (error) {
      expect(error instanceof ValidationError).toBe(true);
      expect(error.message.toLowerCase()).toMatch(/e-mail/);
    }

    try {
      body.email = "Raimundo_rezende";
      validateBodySignup(body);
    } catch (error) {
      expect(error instanceof ValidationError).toBe(true);
      expect(error.message.toLowerCase()).toMatch(/e-mail/);
    }

    try {
      body.email = "raimundo.marcelo.rezende@";
      validateBodySignup(body);
    } catch (error) {
      expect(error instanceof ValidationError).toBe(true);
      expect(error.message?.toLowerCase()).toMatch(/e-mail/);
    }
  });

  test("Celular inválido", () => {
    const body = { ...signupBodyRequest };
    try {
      body.cellphone = "12345678";
      validateBodySignup(body);
    } catch (error) {
      expect(error instanceof ValidationError).toBe(true);
      expect(error.message.toLowerCase()).toMatch(/celular/);
    }
  });

  test("Telefone inválido", () => {
    const body = { ...signupBodyRequest };
    try {
      body.tellphone = "12345678";
      validateBodySignup(body);
    } catch (error) {
      expect(error instanceof ValidationError).toBe(true);
      expect(error.message.toLowerCase()).toMatch(/telefone/);
    }
  });

  test("Senha vazia ou inválida", () => {
    const body = { ...signupBodyRequest };
    try {
      body.password = "";
      validateBodySignup(body);
    } catch (error) {
      expect(error instanceof ValidationError).toBe(true);
      expect(error.message.toLowerCase()).toMatch(/senha/);
    }

    try {
      body.password = "12345678";
      validateBodySignup(body);
    } catch (error) {
      expect(error instanceof ValidationError).toBe(true);
      expect(error.message.toLowerCase()).toMatch(/senha/);
    }
  });

  test("Confirmação de senha vazia ou diferente da senha", () => {
    const body = { ...signupBodyRequest };
    try {
      body.confirm_password = "";
      validateBodySignup(body);
    } catch (error) {
      expect(error instanceof ValidationError).toBe(true);
      expect(error.message.toLowerCase()).toMatch(/senha/);
    }

    try {
      body.confirm_password = "12345678";
      validateBodySignup(body);
    } catch (error) {
      expect(error instanceof ValidationError).toBe(true);
      expect(error.message.toLowerCase()).toMatch(/senha/);
    }
  });
});
