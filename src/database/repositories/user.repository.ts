import { FindOptionsRelations } from "typeorm";
import { AppDataSource } from "../../dataSource";
import { User } from "../entities";
import { onlyNumbers } from "../../utils";

export class UserRepository {
  protected readonly repository = AppDataSource.getRepository(User);

  async save(entity: Partial<User>): Promise<User> {
    return await this.repository.save(entity);
  }

  async findByEmail(email: string): Promise<User> {
    return await this.repository.findOne({
      where: { email },
    });
  }

  async findByDocument(
    document: string,
    relations: FindOptionsRelations<User> = {}
  ): Promise<User> {
    return await this.repository.findOne({
      where: { document },
      relations,
    });
  }
}
