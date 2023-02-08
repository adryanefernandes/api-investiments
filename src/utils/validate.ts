import { CPF, CNPJ } from "cpf_cnpj";
import { onlyNumbers } from ".";

export const validateEmail = (email: string): boolean => {
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;

  return regex.test(email);
};

export const validateDocument = (document: string): boolean => {
  document = onlyNumbers(document);
  if (!document) return false;

  return document.length === 11
    ? CPF.isValid(document)
    : CNPJ.isValid(document);
};

/**
 * A senha deve conter:
 * - Ao menos uma letra minúscula.
 * - Ao menos uma letra maiúscula
 * - Ao menos um caractere especial
 */
export const validatePassword = (password: string): boolean => {
  const regex: RegExp =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

  return regex.test(password);
};

export const validateCellphone = (cellphone: string): boolean => {
  const regex =
    /^([14689][0-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])[0-9]{9}$/;

  cellphone = onlyNumbers(cellphone);
  return regex.test(cellphone);
};

export const validateTellphone = (tellphone: string): boolean => {
  const regex =
    /^([14689][0-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])[0-9]{8}$/;

  tellphone = onlyNumbers(tellphone);
  return regex.test(tellphone);
};
