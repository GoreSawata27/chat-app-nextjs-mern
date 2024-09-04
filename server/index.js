import dotenv from "dotenv";

dotenv.config();

import express from "express";
import cors from "cors";
import cookiesParser from "cookie-parser";
// import { app, server } from './socket/index'

import connectDB from "./src/db/conn.js";
import allRoutes from "./src/routes/index.js";

const app = express();

const port = 6002;

app.use(cors());

// const app = express()
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(cookiesParser());

app.use("/api/v1/", allRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Home route</h1>");
});

connectDB().then(() => {
  app.listen(port, () => {
    console.log("listening on http://localhost:6002");
  });
});
