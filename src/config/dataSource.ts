import { DataSource } from "typeorm";
import dotenv from "dotenv";

const { parsed } = dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "127.0.0.1",
  port: 3306,
  username: "root",
  password: "123456",
  database: "INVESTIMENTS_TODAY",
  synchronize: true,
  logging: true,
  entities: [`${__dirname}/**/entities/*.{ts,js}`],
  migrations: [],
});
