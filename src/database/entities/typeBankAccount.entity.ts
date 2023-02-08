import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Timestamp } from "./extendigs/timestamp";
import { BankAccount } from ".";

@Entity("Types_bank_accounts")
export class TypeBankAccount {
  @PrimaryGeneratedColumn({ name: "id_type_bank_account" })
  id: number;

  @Column({ unique: true })
  title: string;

  @OneToMany(() => BankAccount, (bankAccount) => bankAccount.typeBankAccount)
  bankAccounts: BankAccount[];

  @Column(() => Timestamp, { prefix: false })
  times: Timestamp;
}
