import { AppDataSource } from "../../dataSource";
import { Address } from "../../database/entities";

export const addressRepository = AppDataSource.getRepository(Address);
