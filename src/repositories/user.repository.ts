import { AppDataSource } from "../dataSource";
import { User } from "../entities";

export const userRepository = AppDataSource.getRepository(User).extend({
  findByEmail(email: string) {
    return this.createQueryBuilder("user")
      .where("user.email = :email", { email })
      .getMany();
  },
  findByDocument(document: string) {
    return this.createQueryBuilder("user")
      .where("user.document = :document", { document })
      .getMany();
  },
});
