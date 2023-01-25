import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Timestamp } from "./extendigs/timestamp";
import { User, Wallet } from ".";

@Entity("Extracts")
export class Extract {
  @PrimaryGeneratedColumn({ name: "id_asset_historic" })
  id: number;

  @Column({ default: 0 })
  amount: number;

  @ManyToOne(() => User, (user) => user.extracts)
  @JoinColumn([
    { name: "id_user", referencedColumnName: "id" },
    { name: "uuid_user", referencedColumnName: "uuid" },
  ])
  user: User;

  @ManyToOne(() => Wallet, (wallet) => wallet.extracts)
  @JoinColumn({ name: "id_wallet" })
  wallet: Wallet;

  @Column(() => Timestamp, { prefix: false })
  times: Timestamp;
}
