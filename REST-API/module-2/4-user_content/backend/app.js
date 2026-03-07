import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";

import { sequelize, User, Post } from "./models/index.js";
import authRouter from "./routes/auth.js";

const SECRET = process.env.SECRET;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);

app.get("/", async (req, res) => {
  const data = await Post.findAll();
  res.json(data);
});

app.post("/", async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; // "Bearer <token>"
    const { email } = jwt.verify(token, SECRET);
    const { content } = req.body;
    console.log(email);
    const user = await User.findOne({ where: { email: email } });
    console.log(user);
    if (!user) {
      throw new Error("User does not exist");
    }
    const post = await Post.create({
      UserId: user.id,
      content: content,
    });
    if (!post) {
      throw new Error("Error creating post");
    }
    res.json({ message: "Post created successfully" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Something went wrong" });
  }
});

app.listen(3000, () => {
  console.log("server running on port: 3000");
});