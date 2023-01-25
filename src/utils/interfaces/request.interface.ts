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
  address?: IAddressRequest;
}

// Requisição para cadastro de endereço
interface IAddressRequest {
  zipcode: string;
  state: string;
  city: string;
  neighborhood: string;
  address: string;
  number: number;
  complement?: string;
}
