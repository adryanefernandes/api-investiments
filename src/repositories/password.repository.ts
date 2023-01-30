import { AppDataSource } from "../dataSource";
import { Password } from "../entities";

export const passwordRepository = AppDataSource.getRepository(Password);
