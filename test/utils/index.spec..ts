import { handleErrorResponse, onlyNumbers } from "../../src/utils";
import { ExceptionError } from "../../src/errors";
import { GENERIC_ERROR } from "../../src/utils/constants";
import { IErrorResponse } from "../../src/utils/interfaces";
import dotenv from "dotenv";

describe("Funcões da utils", () => {
  test("handleErrorResponse deve verificar erro e monstar uma resposta com isso", () => {
    const error: ExceptionError = new ExceptionError("ERRTEST", "error");
    const response: IErrorResponse = handleErrorResponse(error);

    expect(response.statusCode).toEqual(500);
    expect(response.response.trace).toEqual("ERRTEST");
    expect(response.response.message).toEqual(GENERIC_ERROR);
    expect(response.response.stack).toEqual("error");
  });

  test("onlyNumber deve retornar apenas números", () => {
    expect(onlyNumbers("@123df")).toHaveLength(3);
    expect(onlyNumbers("asdf")).toHaveLength(0);
    expect(onlyNumbers("123")).toHaveLength(3);
  });

  test("isEnvConfigure deve verificar se env foi configurada", () => {
    // TODO
  });
});
