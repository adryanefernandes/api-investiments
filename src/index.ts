import "reflect-metadata";
import { AppDataSource } from "./config/dataSource";
import express, { Express } from "express";

// Inicia o back-end
const main = async () => {
  try {
    // Inicia conexão com o banco de dados
    await AppDataSource.initialize();

    const app: Express = express();
    app.use(express.json());

    app.get("/", (req, res) => res.send({ message: "Tamo funcionando" }));

    app.listen(3000, () => console.log("Servidor de pé"));
  } catch (error) {
    console.log(error);
  }
};

main();
