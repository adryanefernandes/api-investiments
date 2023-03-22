/**
 * @example {
 *  "name": "John",
 *  "last_name": "Doe",
 *  "document": "12345678912",
 *  "email": "john_doe@pamafa.com",
 *  "password": "Alterar@123",
 *  "confirm_password": "Alterar@123",
 *  "cellphone": "21999999999",
 *  "tellphone": "2199999999",
 * }
 */
// Requisição para o cadastro
export type ISignupRequest = {
  name: string;
  last_name: string;
  document: string;
  email: string;
  password: string;
  confirm_password: string;
  cellphone?: string;
  tellphone?: string;
};

/**
 * @example {
 *  "email": "john_doe@email.com",
 *  "password": "Alterar@123"
 * }
 */
// Requisição de login
export type ILoginRequest = {
  document: string;
  password: string;
};

// Requisição para cadastro de endereço
export type IAddressRequest = {
  zipcode: string;
  number: number;
  state?: string;
  city?: string;
  neighborhood?: string;
  address?: string;
  complement?: string;
};
