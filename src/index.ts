import "reflect-metadata";
import { AppDataSource } from "./dataSource";
import express, { Express } from "express";
import router from "./routes";

const SERVER_PORT = process.env.SERVER_PORT || 3000;

// Inicia o back-end
const main = async () => {
  try {
    // Inicia conexão com o banco de dados
    await AppDataSource.initialize();

    const app: Express = express();
    app.use(express.json());

    app.use("/api", router);

    app.listen(SERVER_PORT, () => console.log("Servidor de pé"));
  } catch (error) {
    console.log(error);
  }
};

main();
