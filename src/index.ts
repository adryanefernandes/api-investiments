import "reflect-metadata";
import { AppDataSource } from "./dataSource";
import express, { Express } from "express";
import router from "./routes";

// Inicia o back-end
const main = async () => {
  try {
    // Inicia conexão com o banco de dados
    await AppDataSource.initialize();

    const app: Express = express();
    app.use(express.json());

    app.use("/api", router);

    app.listen(3000, () => console.log("Servidor de pé"));
  } catch (error) {
    console.log(error);
  }
};

main();
