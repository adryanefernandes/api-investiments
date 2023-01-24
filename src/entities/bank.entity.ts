import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BankAccount } from "./bankAccount.entity";
import { Timestamp } from "./extendigs/timestamp";

@Entity("Banks")
export class Bank {
  @PrimaryGeneratedColumn({ name: "id_bank" })
  id: number;

  @Column()
  name: string;

  @Column({ length: 3 })
  code: string;

  @Column({ length: 10 })
  ispb: string;

  @OneToMany(() => BankAccount, (bankAccount) => bankAccount.bank)
  bankAccounts: BankAccount[];

  @Column(() => Timestamp, { prefix: false })
  times: Timestamp;
}
