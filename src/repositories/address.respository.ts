import { AppDataSource } from "../dataSource";
import { Address } from "../entities";

export const addressRepository = AppDataSource.getRepository(Address);
