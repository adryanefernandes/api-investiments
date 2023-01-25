import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { isEnvConfigure } from "./utils";
import { ExceptionError } from "./errors";

const { parsed } = dotenv.config();
if (!isEnvConfigure(parsed)) {
  throw new ExceptionError("XXX", null);
}

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;
export const AppDataSource = new DataSource({
  type: "mysql",
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  entities: [`${__dirname}/**/entities/*.{ts,js}`],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
  migrationsTableName: "Migrations",
});
