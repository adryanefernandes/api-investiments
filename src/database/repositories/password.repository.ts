import { FindOptionsWhere } from "typeorm";
import { AppDataSource } from "../../dataSource";
import { Password } from "../../database/entities";

export class PasswordRepository {
  protected readonly repository = AppDataSource.getRepository(Password);

  async save(entity: Partial<Password>): Promise<Password> {
    return await this.repository.save(entity);
  }

  async create(entity: Partial<Password>): Promise<Password> {
    return await this.repository.create(entity);
  }

  async findByUserId(userId: number, userUUID: string): Promise<Password> {
    return await this.repository.findOne({
      where: {
        id_user: userId,
        uuid_user: userUUID,
      } as FindOptionsWhere<Password>,
    });
  }
}
