import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from ".";
import { Timestamp } from "./extendigs/timestamp";

@Entity("Passwords")
export class Password {
  @PrimaryGeneratedColumn({ name: "id_password" })
  id: number;

  @Column()
  hash: string;

  @OneToOne(() => User)
  @JoinColumn([
    { name: "id_user", referencedColumnName: "id" },
    { name: "uuid_user", referencedColumnName: "uuid" },
  ])
  user: User;

  @Column(() => Timestamp, { prefix: false })
  times: Timestamp;
}
