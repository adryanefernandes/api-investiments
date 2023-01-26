import dotenv from "dotenv";
import { AppDataSource } from "./dataSource";
import { DataSource } from "typeorm";

describe("Conexão com banco de dados", () => {
  test(".env configurado", () => {
    const { parsed: enviroments } = dotenv.config();

    const enviromentsExpects: string[] = [
      "DB_HOST",
      "DB_USER",
      "DB_PASSWORD",
      "DB_DATABASE",
      "DB_PORT",
      "SERVER_PORT",
    ];

    const keys: string[] = Object.keys(enviroments);
    const haveKeys: boolean = keys.length > 0;

    expect(keys).toHaveLength(enviromentsExpects.length);
    expect(haveKeys).not.toBe(false);

    if (haveKeys) {
      enviromentsExpects.forEach((env: string) => {
        expect(enviroments[env]).not.toBeUndefined();
      });
    }
  });

  test("AppDataSource configurado", () => {
    expect(AppDataSource).toBeInstanceOf(DataSource);
  });

  test("Banco de dados está sendo inicializado", async () => {
    await expect(AppDataSource.initialize()).resolves.not.toThrow();
  });

  afterAll((done) => {
    // Fecha conexão com o banco de dados após os testes serem concluidos
    AppDataSource.destroy();
    done();
  });
});
