// Resposta ao buscar endereço por cep
export type IZipCodeResponse = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
};

// POST /credential/signup e login
export type CredentialsResponse = {
  access_token: string;
  token_type: string;
};
