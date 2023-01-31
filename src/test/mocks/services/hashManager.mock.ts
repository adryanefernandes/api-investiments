export class HashManager {
  create(password: string): string {
    return "hash";
  }

  compareHash(password: string, hash: string): boolean {
    return true;
  }
}

export default new HashManager();
