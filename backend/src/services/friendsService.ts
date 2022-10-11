import { AppDataSource } from "../database";
import { Friend } from "../database";


export const getAllFriends = async () => {
  const friends = await AppDataSource.getRepository(Friend).find();
  return friends;
}

export async function postNewFriend(friend: any){
  const newFriend = await AppDataSource
    .createQueryBuilder()
    .insert()
    .into(Friend)
    .values({
      name: friend.name,
      email: friend.email,
      comment: friend.comment,
      favFood: friend.favFood,
      relationshipStatus: friend.relationshipStatus
    })
    .execute()
}