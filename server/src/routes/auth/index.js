import express from "express";
import { checkEmail, login, logout } from "../../controllers/auth/index.js";
const allAuthRoutes = express.Router();

// Define routes for posts
allAuthRoutes.post("/check-mail", checkEmail);
allAuthRoutes.post("/login", login);
allAuthRoutes.post("/logout", logout);

export default allAuthRoutes;
