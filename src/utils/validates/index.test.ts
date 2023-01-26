import {
  validateCellphone,
  validateDocument,
  validateEmail,
  validatePassword,
  validateTellphone,
} from ".";

describe("funções de validação", () => {
  test("validador de email", () => {
    expect(validateEmail("upchh@example.com")).toBe(true);
    expect(validateEmail("john_doe")).toBe(false);
  });

  test("validador de documento", () => {
    expect(validateDocument("33820764038")).toBe(true);
    expect(validateDocument("338.207.640-38")).toBe(true);
    expect(validateDocument("12345678912")).toBe(false);
    expect(validateDocument("08416171000108")).toBe(true);
    expect(validateDocument("08.416.171/0001-08")).toBe(true);
    expect(validateDocument("08416171000000")).toBe(false);
  });

  test("validador de senha", () => {
    expect(validatePassword("Alterar@123")).toBe(true);
    expect(validatePassword("12345678")).toBe(false);
    expect(validatePassword("Altera@")).toBe(false);
    expect(validatePassword("Alterar")).toBe(false);
    expect(validatePassword("alterar@")).toBe(false);
  });

  test("validador de celular", () => {
    expect(validateCellphone("84998444667")).toBe(true);
    expect(validateCellphone("(84)99844-4667")).toBe(true);
    expect(validateCellphone("(00)9844-4667")).toBe(false);
    expect(validateCellphone("9844-4667")).toBe(false);
  });

  test("validador de telefone", () => {
    expect(validateTellphone("6725554946")).toBe(true);
    expect(validateTellphone("(67)2555-4946")).toBe(true);
    expect(validateTellphone("25554946")).toBe(false);
    expect(validateTellphone("725554946")).toBe(false);
  });
});
