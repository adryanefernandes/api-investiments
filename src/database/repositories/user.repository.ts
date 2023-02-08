import { FindOptionsRelations } from "typeorm";
import { AppDataSource } from "../../dataSource";
import { User } from "../entities";
import { onlyNumbers } from "../../utils";

export class UserRepository {
  protected readonly repository = AppDataSource.getRepository(User);

  async create(entity: User): Promise<User> {
    const user: User = new User();
    user.name = entity.name?.toUpperCase().trim();
    user.lastName = entity.lastName?.toUpperCase().trim();
    user.document = onlyNumbers(entity.document);
    user.email = entity.email.trim();
    user.cellphone = entity.cellphone && onlyNumbers(entity.cellphone);
    user.tellphone = entity.tellphone && onlyNumbers(entity.tellphone);

    return await this.repository.create(user);
  }

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
