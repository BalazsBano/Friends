import { Router } from "express";
import { friendsDto } from "../dto/friendsDTO";
import { getAllFriends } from "../services";

export const friendsRouter = Router();

friendsRouter.get('/list', async (req, res) => {
  try {
    const friends = await getAllFriends();
    res.status(200).json({ friends });
  } catch (error) {
    res.status(500).send()
  }
})