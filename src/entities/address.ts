import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";

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

  @ManyToOne(() => User, (user) => user.addresses)
  @JoinColumn([
    { name: "id_user", referencedColumnName: "id" },
    { name: "uuid_user", referencedColumnName: "uuid" },
  ])
  user: User;
}
