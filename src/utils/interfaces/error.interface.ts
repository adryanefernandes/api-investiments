// Erro vindo do catch
export interface IError {
  statusCode: number;
  message: string;
  stack?: any;
  trace?: string;
}

// Erro que será mandado ao cliente
export interface IErrorResponse {
  statusCode: number;
  response: {
    message: string;
    trace?: string;
    stack?: any;
  };
}
