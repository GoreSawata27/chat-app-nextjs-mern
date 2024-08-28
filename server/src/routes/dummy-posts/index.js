// routes/posts.js

import express from "express";
import { getPosts, createPost } from "../../controllers/dummy-posts/index.js";
const postsRoutes = express.Router();

// Define routes for posts
postsRoutes.get("/", getPosts).post("/", createPost);

export default postsRoutes;
