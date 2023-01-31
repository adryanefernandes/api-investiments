// Requisição para o cadastro
export interface ISignupRequest {
  name: string;
  last_name: string;
  document: string;
  email: string;
  password: string;
  confirm_password: string;
  cellphone?: string;
  tellphone?: string;
}

// Requisição de login
export interface ILoginRequest {
  document: string;
  password: string;
}

// Requisição para cadastro de endereço
export interface IAddressRequest {
  zipcode: string;
  number: number;
  state?: string;
  city?: string;
  neighborhood?: string;
  address?: string;
  complement?: string;
}
