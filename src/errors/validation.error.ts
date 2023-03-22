/**
 * Classe customizada para erros 400 ( Bad Request )
 *
 * Seu construtor possui:
 *      message: Mensagem mostrado no erro
 *      trace: Código de erro para restreio ao debuggar
 *      stack: Caminho do erro ( opcional )
 *
 * @example {
 *  "message": "Campo é obrigatório.",
 *  "trace": "ERR999",
 *  "stack": null
 * }
 */
export class ValidationError extends Error {
  public statusCode = 400;

  constructor(
    public message: string,
    public trace: string,
    public stack: any = undefined
  ) {
    super(message);
  }
}
