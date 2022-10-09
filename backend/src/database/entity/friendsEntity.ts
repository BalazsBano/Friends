import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
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

  @Column()
    comment: string;

  @Column()
    favFood: Food;

  @OneToMany(() => Food, (food) => food.friend, {
    cascade: true
  })

  @Column({
    type: "enum",
    enum: RelationshipStatus,
  })
    relationshipStatus: RelationshipStatus;
}