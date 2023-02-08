import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TypeBankAccount, User } from ".";
import { Bank } from "./bank.entity";
import { Timestamp } from "./extendigs/timestamp";

@Entity("Bank_accounts")
export class BankAccount {
  @PrimaryGeneratedColumn({ name: "id_bank_account" })
  id: number;

  @Column({ length: 5 })
  agency: string;

  @Column({ name: "account_number", length: 12 })
  accountNumber: string;

  @ManyToOne(() => User, (user) => user.addresses)
  @JoinColumn([
    { name: "id_user", referencedColumnName: "id" },
    { name: "uuid_user", referencedColumnName: "uuid" },
  ])
  user: User;

  @ManyToOne(() => Bank, (bank) => bank.bankAccounts)
  @JoinColumn({ name: "id_bank" })
  bank: Bank;

  @ManyToOne(
    () => TypeBankAccount,
    (typeBankAccount) => typeBankAccount.bankAccounts
  )
  @JoinColumn({ name: "id_type_bank_account" })
  typeBankAccount: TypeBankAccount;

  @Column(() => Timestamp, { prefix: false })
  times: Timestamp;
}
