import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { UserStatus } from "../../utils/enums";
import { Address, BankAccount, Extract, Password } from ".";
import { Timestamp } from "./extendigs/timestamp";
import { Wallet } from "./wallet.entity";

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

  @OneToMany(() => Address, (address) => address.user)
  addresses: Address[];

  @OneToMany(() => BankAccount, (bankAccount) => bankAccount.user)
  bankAccounts: BankAccount[];

  @OneToMany(() => Wallet, (wallet) => wallet.user)
  wallets: Wallet[];

  @OneToMany(() => Extract, (extract) => extract.user)
  extracts: Extract[];

  @OneToOne(() => Password)
  @JoinColumn({ name: "id_password" })
  passwords: Password;

  @Column(() => Timestamp, { prefix: false })
  times: Timestamp;
}
