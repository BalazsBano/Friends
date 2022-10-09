import { 
  IsNotEmpty,
  IsOptional,
  MinLength,
  MaxLength,
  IsInt } from "class-validator";

export class friendsDto {
  constructor(
    name: string,
    email: string,
    comment: string,
    food: number,
    relationshipStatus: number
  ){
    this.name = name;
    this.email = email;
    this.comment = comment;
    this.food = food;
    this.relationshipStatus = relationshipStatus;
  }

  @IsNotEmpty()
  @MinLength(4, {
    message: 'Name is too short',
  })
    name: string;
   
  @IsNotEmpty()
    email: string;

  @IsOptional()
  @MaxLength(30, {
    message: 'Comment is too long',
  })
    comment: string;

  @IsNotEmpty()
  @IsInt()
  food: number;
  
  @IsNotEmpty()
  @IsInt()
    relationshipStatus: number;
}