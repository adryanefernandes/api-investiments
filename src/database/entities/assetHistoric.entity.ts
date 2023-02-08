import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { VariationAsset } from "../../utils/enums";
import { Asset } from "./asset.entity";
import { Timestamp } from "./extendigs/timestamp";
import { Investment } from "./investment.entity";

@Entity("Asset_history")
export class AssetHistoric {
  @PrimaryGeneratedColumn({ name: "id_asset_historic" })
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
