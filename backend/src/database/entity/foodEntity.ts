import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Friend } from "./friendsEntity";

@Entity()
export class Food {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;

  @ManyToOne(() => Friend, (food) => food.favFood)
    friend: Friend;
}