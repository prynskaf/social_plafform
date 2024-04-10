import express from 'express';
import { getUserFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from '../middleware/auth';

const router = express.Router();

//READ
router.get("/", verifyToken, getUserFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

//UPDATE
router.patch('/:id/like', verifyToken, likePost);

export default router;