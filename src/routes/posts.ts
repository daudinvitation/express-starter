import express from "express";
import getAllPosts from "../controllers/posts/getAllPosts";

const router = express.Router();

router.get("/", getAllPosts);

export default router;
