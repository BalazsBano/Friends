import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable } from "typeorm";
import { Food } from "./foodEntity";
import { RelationshipStatus } from "../enum"

@Entity()
export class Friend {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;
  
  @Column()
    email: string;

  @Column({ nullable: true })
    comment: string;

  @ManyToOne(() => Food, (food) => food.friends)
  @JoinTable({
    name: 'food'
  })
    food: Food;

  @Column({
    type: "enum",
    enum: RelationshipStatus,
  })
    relationshipStatus: RelationshipStatus;
}