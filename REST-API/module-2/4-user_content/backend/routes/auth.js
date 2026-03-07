import { Router } from "express";
import crypto from "crypto";
import jwt from "jsonwebtoken";

import { User } from "../models/index.js";

const SECRET = process.env.SECRET;

const router = Router();

router.post("/login", async (req, res) => {
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

router.post("/register", async (req, res) => {
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

export default router