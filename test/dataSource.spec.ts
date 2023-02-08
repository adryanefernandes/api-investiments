import { AppDataSource } from "../src/dataSource";

describe("Conexão com banco de dados", () => {
  test("AppDataSource configurado", async () => {
    await expect(AppDataSource.initialize()).resolves.toEqual(
      expect.objectContaining({
        isInitialized: true,
      })
    );
  });

  afterAll((done) => {
    AppDataSource.destroy();
    done();
  });
});
