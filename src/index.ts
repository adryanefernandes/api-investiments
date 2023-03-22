import "reflect-metadata";
import { AppDataSource } from "./dataSource";
import express, { Express } from "express";
import router from "./routes";
import swaggerUi from "swagger-ui-express";
import { readFileSync } from "fs";

const SERVER_PORT = process.env.SERVER_PORT || 3000;

// Inicia o back-end
const main = async () => {
  try {
    // Inicia conexão com o banco de dados
    await AppDataSource.initialize();

    const app: Express = express();
    app.use(express.json());

    app.use("/api", router);

    // Api para a documentação
    const swaggerDocument = JSON.parse(
      readFileSync("./public/swagger.json", "utf-8")
    );
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    app.listen(SERVER_PORT, () =>
      console.log("Servidor de pé em: http://localhost:3000/")
    );
  } catch (error) {
    //TODO - mudar
    console.log(error);
  }
};

main();
