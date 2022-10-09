import { AppDataSource } from "../database";
import { Friend } from "../database";

export const getAllFriends = async () => {
  const friends = await AppDataSource.getRepository(Friend).find();
  return friends;
}