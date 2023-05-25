import { Request, Response } from "express";
import Posts from "../../models/Posts";

const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Posts.find();

    res.status(200).json({
      data: posts,
    });
  } catch {
    res.status(400).json({ message: "asd" });
  }
};

export default getAllPosts;
