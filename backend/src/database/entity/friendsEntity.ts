import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable } from "typeorm";
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

  @Column()
    favFood: string;

  @Column({
    type: "enum",
    enum: RelationshipStatus,
  })
    relationshipStatus: RelationshipStatus;
}