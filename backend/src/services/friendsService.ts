import { AppDataSource } from "../database";
import { Friend, Food } from "../database";

export const getAllFriends = async () => {
  // const friends = await AppDataSource.getRepository(Friend).find();

  const friends = await AppDataSource.getRepository(Friend)
    .createQueryBuilder()
    .select()
    // .from(Friend, "friend")
    // .addFrom(Food, "name")
    .leftJoinAndSelect(Food, "food", "friend.foodId = food.id")
    .getMany();

  console.log(friends)
  return friends;
}