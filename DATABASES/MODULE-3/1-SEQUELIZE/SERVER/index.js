import express from "express";
import { sequelize, User, Post } from "./models/index.js";

const app = express();

app.get("/", async (req, res) => {
  const [data] = await sequelize.query("SELECT * FROM Users");
  res.json(data);
});

app.get("/users", async (req, res) => {
  try {
    const data = await User.findAll({ include: Post });
    res.json(data);
  } catch (e) {
    res.json(e);
  }
});

app.get("/posts", async (req, res) => {
  try {
    const data = await Post.findAll();
    res.json(data);
  } catch (e) {
    res.json(e);
  }
});

app.listen(3000, () => {
  console.log("server running on port: 3000");
});