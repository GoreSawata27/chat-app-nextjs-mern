import express from "express";
import {
  registerUser,
  searchUser,
  updateUserDetails,
} from "../../controllers/user/index.js";
const userRoutes = express.Router();
import { validateRegistration } from "../../validators/userValidators.js";

// Define routes for posts
userRoutes.post("/", validateRegistration, registerUser);

export default userRoutes;
