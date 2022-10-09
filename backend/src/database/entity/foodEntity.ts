import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Friend } from "./friendsEntity";

@Entity()
export class Food {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;

  @OneToMany(() => Friend, (friend) => friend.food)
    friends: Friend[];
}