import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Account } from "./account.entity";
import { Timestamp } from "./extendigs/timestamp";

@Entity("Addresses")
export class Address {
  @PrimaryGeneratedColumn({ name: "id_address" })
  id: number;

  @Column({ length: 9 })
  zipcode: string;

  @Column({ length: 2 })
  state: string;

  @Column()
  city: string;

  @Column()
  neighborhood: string;

  @Column()
  address: string;

  @Column({ nullable: true })
  complement: string;

  @Column()
  number: number;

  @Column({ default: true })
  isCurrent: boolean;

  @ManyToOne(() => Account, (account) => account.addresses)
  @JoinColumn([
    { name: "id_account", referencedColumnName: "id" },
    { name: "uuid_account", referencedColumnName: "uuid" },
  ])
  account: Account;

  @Column(() => Timestamp, { prefix: false })
  times: Timestamp;
}
