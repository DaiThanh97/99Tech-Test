import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { EntityName } from "./../../../shared/enums";

@Entity({ name: EntityName.Item })
export class ItemEntity {
  @PrimaryGeneratedColumn("increment")
  @Index("IDX_ID")
  id!: number;

  @Column({ type: "varchar", unique: true })
  @Index("IDX_NAME", { unique: true })
  name!: string;

  @Column({ type: "varchar", nullable: true })
  description?: string;

  @Column({ type: "bigint" })
  quantity!: number;

  @CreateDateColumn({ type: "timestamp" })
  createdDate!: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedDate!: Date;

  @DeleteDateColumn({ type: "timestamp" })
  deletedDate?: Date;
}
