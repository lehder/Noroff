import express from "express";
import crypto from "crypto";
import jwt from "jsonwebtoken";

import { sequelize, User } from "./models/index.js";

const SECRET = "mTF2nK565dJ3RBOTCA46J6BIj8iWo1N+T7CxoBzFjbo=";

const app = express();
app.use(express.json());
app.get("/", async (req, res) => {
  const data = await User.findAll();
  res.json(data);
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email: email } });
  console.log(user);
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const hashedPassword = crypto
    .createHash("sha256")
    .update(password + user.salt)
    .digest("base64");

  if (hashedPassword !== user.hashedPassword) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  // The parts of the user we want to send to the client, and have in the token
  const data = {
    email: user.email,
  };
  const token = jwt.sign(data, SECRET);
  res.json({ message: "Correct credentials", user: data, token: token });
});

app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password is required" });
  }
  const salt = crypto.randomBytes(16).toString("base64");

  const hashedPassword = crypto
    .createHash("sha256")
    .update(password + salt)
    .digest("base64");

  const user = await User.create({
    email: email,
    hashedPassword: hashedPassword,
    salt: salt,
  });

  res.json({ message: "User created", user: user });
});

app.listen(3000, () => {
  console.log("server running on port: 3000");
});