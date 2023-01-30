import { compareSync, genSaltSync, hashSync } from "bcryptjs";

export class HashManager {
  /**
   * Cria hash da senha
   * @param password
   * @returns
   */
  create(password: string): string {
    const cost: number = Number(process.env.BCRYPT_COST);
    const salt: string = genSaltSync(cost);
    const hash: string = hashSync(password, salt);

    return hash;
  }

  /**
   * compara a senha com o hash salvo
   * @param password
   * @param hash
   * @returns
   */
  compareHash(password: string, hash: string): boolean {
    return compareSync(password, hash);
  }
}
