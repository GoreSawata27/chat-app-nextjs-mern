import express from "express";
import postsRoutes from "./dummy-posts/index.js";
import userRoutes from "./user/index.js";
import allAuthRoutes from "./auth/index.js";

const allRoutes = express.Router();

// Use individual route files
allRoutes.use("/posts", postsRoutes);
allRoutes.use("/user", userRoutes);
allRoutes.use("/auth", allAuthRoutes);

export default allRoutes;
