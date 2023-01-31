import { FindOptionsRelations } from "typeorm";
import { User } from "../../../entities";
import { UserResponseMock } from "./responseRepository.mock";

class UserRepository {
  protected readonly repository = null;

  async save(entity: Partial<User>): Promise<User> {
    return UserResponseMock;
  }

  async findByEmail(email: string): Promise<User> {
    return UserResponseMock;
  }

  async findByDocument(
    document: string,
    relations: FindOptionsRelations<User> = {}
  ): Promise<User> {
    return UserResponseMock;
  }
}
export default new UserRepository();
