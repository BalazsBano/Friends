import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Food } from "../../configuration";
import { RelationshipStatus } from "../enum"

@Entity()
export class Friend {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;
  
  @Column()
    email: string;

  @Column()
    comment: string;

  @Column()
    favFood: Food;

  @Column({
    type: "enum",
    enum: RelationshipStatus,
  })
    relationshipStatus: RelationshipStatus;
}