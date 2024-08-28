import express from "express";
import postsRoutes from "./dummy-posts/index.js";

const allRoutes = express.Router();

// Use individual route files
allRoutes.use("/posts", postsRoutes);

export default allRoutes;
