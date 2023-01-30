import axios, { AxiosResponse } from "axios";
import { ExceptionError } from "../errors";
import { handleErrorResponse, onlyNumbers } from "../utils";
import { IErrorResponse, IZipCodeResponse } from "../utils/interfaces";

// Documentação: http://viacep.com.br/
export class ZipcodeService {
  private baseURL: string = "http://viacep.com.br/ws";

  /**
   * Encontra as informações de endereço
   * @param zipcode
   */
  async find(zipcode: string): Promise<IZipCodeResponse> {
    try {
      zipcode = onlyNumbers(zipcode);
      const { data }: AxiosResponse = await axios.get(
        `${this.baseURL}/${zipcode}/json`
      );

      const address: IZipCodeResponse = data;
      return address;
    } catch (error) {
      throw new ExceptionError("XXX", error.response);
    }
  }
}
