import { FindManyOptions, FindOptionsRelations } from "typeorm";
import { AppDataSource } from "../dataSource";
import { User } from "../entities";

class UserRepository {
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
export default new UserRepository();
