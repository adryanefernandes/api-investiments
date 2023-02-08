import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { FrequencyProceeds } from "../../utils/enums";
import { Timestamp } from "./extendigs/timestamp";
import { User, Asset, Extract } from ".";

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

  @ManyToOne(() => User, (user) => user.wallets)
  @JoinColumn([
    { name: "id_user", referencedColumnName: "id" },
    { name: "uuid_user", referencedColumnName: "uuid" },
  ])
  user: User;

  @ManyToOne(() => Asset, (asset) => asset.wallets)
  @JoinColumn({ name: "id_asset" })
  asset: Asset;

  @OneToMany(() => Extract, (extract) => extract.wallet)
  extracts: Extract[];

  @Column(() => Timestamp, { prefix: false })
  times: Timestamp;
}
