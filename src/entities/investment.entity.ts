import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { InvestmentMovement } from "../utils/enums";
import { Timestamp } from "./extendigs/timestamp";
import { HistoricAsset } from "./historicAsset.entity";

@Entity("Investments")
export class Investment {
  @PrimaryGeneratedColumn({ name: "id_investment" })
  id: number;

  @Column({ name: "qty_quotas", default: 0 })
  qtyQuotas: number;

  @Column({ name: "quota_price" })
  quotaPrice: number;

  @Column({ default: 0 })
  amount: number;

  @Column({
    type: "enum",
    enum: InvestmentMovement,
    nullable: false,
  })
  movement: InvestmentMovement;

  @ManyToOne(() => HistoricAsset, (historicAsset) => historicAsset.investments)
  @JoinColumn({ name: "id_historic_asset" })
  historic: HistoricAsset;

  @Column(() => Timestamp, { prefix: false })
  times: Timestamp;
}
