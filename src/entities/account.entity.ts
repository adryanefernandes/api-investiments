import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserStatus } from "../utils/enums";
import { Address } from "./address";
import { BankAccount } from "./bankAccount.entity";
import { Timestamp } from "./extendigs/timestamp";

@Entity("Accounts")
export class Account {
  @PrimaryGeneratedColumn({ name: "id_account" })
  id: number;

  @PrimaryGeneratedColumn("uuid", { name: "uuid_account" })
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

  @OneToMany(() => Address, (address) => address.account, { nullable: true })
  addresses: Address[];

  @OneToMany(() => BankAccount, (bankAccount) => bankAccount.account, {
    nullable: true,
  })
  bankAccounts: BankAccount[];

  @Column(() => Timestamp, { prefix: false })
  times: Timestamp;
}
