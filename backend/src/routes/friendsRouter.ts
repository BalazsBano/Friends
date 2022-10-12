import { Router } from "express";
import { friendsDto } from "../dto/friendsDTO";
import { getAllFriends, postNewFriend, putFriend } from "../services";

export const friendsRouter = Router();

friendsRouter.get('/list', async (req, res) => {
  try {
    const friends = await getAllFriends();
    res.status(200).json(friends);
  } catch (error) {
    res.status(500).send();
  }
})

friendsRouter.post('/new', async (req, res) => {
  try{
    const newFriend = await postNewFriend(req.body)
    res.status(201).send("created");
  } catch (error) {
    res.status(400).send();
  }
})

friendsRouter.put('/modify', async (req, res) => {
  try{
    const modifiedFriend = await putFriend(req.body)
    res.status(201).send("modified");
  } catch (error) {
    res.status(400).send();
  }
})