import express from "express";
import {
  registerUser,
  searchUser,
  updateUserDetails,
} from "../../controllers/user/index.js";
const userRoutes = express.Router();

// Define routes for posts
userRoutes.post("/", registerUser);

export default userRoutes;
