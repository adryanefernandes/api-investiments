import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { FrequencyProceeds } from "../utils/enums";
import { Timestamp } from "./extendigs/timestamp";
import { User } from "./user.entity";

@Entity("Wallets")
export class Wallet {
  @PrimaryGeneratedColumn({ name: "id_wallet" })
  id: number;

  @Column({ name: "total_invested", default: 0 })
  totalInvested: number;

  @Column({ name: "magic_number", default: 0 })
  magicNumber: number;

  @Column({ name: "proceeds_to_receive", default: 0 })
  proceedsToReceive: number;

  @Column({
    type: "enum",
    enum: FrequencyProceeds,
    default: FrequencyProceeds.MONTHLY,
  })
  frequency: FrequencyProceeds;

  @ManyToOne(() => User, (user) => user.wallet)
  @JoinColumn([
    { name: "id_user", referencedColumnName: "id" },
    { name: "uuid_user", referencedColumnName: "uuid" },
  ])
  user: User;

  @Column(() => Timestamp, { prefix: false })
  times: Timestamp;
}
