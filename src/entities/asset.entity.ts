import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AssetTypes, HistoricAsset, Wallet } from ".";
import { AssetCategory, AssetRisc } from "../utils/enums";
import { Timestamp } from "./extendigs/timestamp";

@Entity("Assets")
export class Asset {
  @PrimaryGeneratedColumn({ name: "id_asset" })
  id: number;

  @Column()
  name: string;

  @Column({
    type: "enum",
    enum: AssetCategory,
    nullable: false,
  })
  type: AssetCategory;

  @Column({
    type: "enum",
    enum: AssetRisc,
    nullable: false,
  })
  risc: AssetRisc;

  @Column({ name: "annual_income", nullable: true })
  annualIncome: number;

  @Column({ name: "monthly_income", nullable: true })
  monthlyIncome: number;

  @Column({ name: "due_date", nullable: true })
  dueDate: Date;

  @OneToMany(() => Wallet, (wallet) => wallet.asset)
  wallets: Wallet[];

  @ManyToOne(() => AssetTypes, (assetType) => assetType.assets)
  @JoinColumn({ name: "id_asset_type" })
  assetType: AssetTypes;

  @OneToMany(() => HistoricAsset, (historicAsset) => historicAsset.investments)
  historicAsset: HistoricAsset[];

  @Column(() => Timestamp, { prefix: false })
  times: Timestamp;
}
