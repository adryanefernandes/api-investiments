import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { VariationAsset } from "../utils/enums";
import { Asset } from "./asset.entity";
import { Timestamp } from "./extendigs/timestamp";
import { Investment } from "./investment.entity";

@Entity("Historic_asset")
export class HistoricAsset {
  @PrimaryGeneratedColumn({ name: "id_historic_asset" })
  id: number;

  @Column({ default: 0 })
  amount: number;

  @Column({ type: "enum", enum: VariationAsset, nullable: false })
  variation: VariationAsset;

  @OneToMany(() => Investment, (investment) => investment.historic)
  investments: Investment[];

  @ManyToOne(() => Asset, (asset) => asset.historicAsset)
  @JoinColumn({ name: "id_asset" })
  asset: Asset;

  @Column(() => Timestamp, { prefix: false })
  times: Timestamp;
}
