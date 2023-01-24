import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Account } from "./account.entity";
import { Timestamp } from "./extendigs/timestamp";

@Entity("Bank_accounts")
export class BankAccount {
  @PrimaryGeneratedColumn({ name: "id_bank_account" })
  id: number;

  @Column({ length: 5 })
  agency: string;

  @Column({ name: "account_number", length: 12 })
  accountNumber: string;

  @ManyToOne(() => Account, (account) => account.addresses)
  @JoinColumn([
    { name: "id_account", referencedColumnName: "id" },
    { name: "uuid_account", referencedColumnName: "uuid" },
  ])
  account: Account;

  @Column(() => Timestamp, { prefix: false })
  times: Timestamp;
}
