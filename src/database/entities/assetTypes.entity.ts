import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Asset } from ".";
import { Timestamp } from "./extendigs/timestamp";

@Entity("Asset_types")
export class AssetTypes {
  @PrimaryGeneratedColumn({ name: "id_asset_type" })
  id: number;

  @Column({ unique: true })
  title: string;

  @OneToMany(() => Asset, (asset) => asset.assetType)
  assets: Asset[];

  @Column(() => Timestamp, { prefix: false })
  times: Timestamp;
}
