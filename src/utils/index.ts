import { GENERIC_ERROR } from "./constants";
import { IError, IErrorResponse } from "./interfaces/error.interface";

/**
 * Lida com o erro enviado e monta a resposta que será enviada
 * para o usuário
 * @param error
 * @returns
 */
export const handleErrorResponse = (error: IError): IErrorResponse => {
  const result: IErrorResponse = {
    statusCode: error?.statusCode ? error.statusCode : 500,
    response: {
      message: error.message ? error.message : GENERIC_ERROR,
    },
  };

  if (error.stack) result.response["stack"] = error.stack;
  if (error.trace) result.response["trace"] = error.trace;

  return result;
};

export const onlyNumbers = (value: string) => {
  return value ? value.replace(/\D/g, "") : value;
};

/*
 * Verifica se as variáveis de ambiente foram configuradas
 * @param env - variáveis de ambiente
 * @returns
 */
export const isEnvConfigure = (env: any): boolean => {
  if (!(env || Object.keys(env).length)) return false;

  const environmentsUndefineds: string[] =
    Object.keys(env).filter((key: string) => !env[key]) || [];

  return !environmentsUndefineds.length;
};
