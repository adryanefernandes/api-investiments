import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Timestamp,
} from "typeorm";
import { UserStatus } from "../utils/enums";
import { Address } from "./address";

@Entity("Users")
export class User {
  @PrimaryGeneratedColumn({ name: "id_user" })
  id: number;

  @PrimaryGeneratedColumn("uuid", { name: "uuid_user" })
  uuid: string;

  @Column()
  name: string;

  @Column({ name: "last_name" })
  lastName: string;

  @Column({ length: 14, unique: true })
  document: string;

  @Column({ unique: true })
  email: string;

  @Column({ length: 14, nullable: true })
  cellphone: string;

  @Column({ length: 14, nullable: true })
  tellphone: string;

  @Column({
    type: "enum",
    enum: UserStatus,
    default: UserStatus.ACTIVE,
  })
  status: string;

  @Column({ default: true })
  active: boolean;

  @OneToMany(() => Address, (address) => address.user, { nullable: true })
  addresses: Address[];

  @Column(() => Timestamp, { prefix: false })
  times: Timestamp;
}
