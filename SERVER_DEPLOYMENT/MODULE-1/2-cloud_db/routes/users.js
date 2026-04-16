import { Router } from "express";
import { User } from "../models/index";
const router = Router();

router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const user = await User.create({ name });
    res.json({ message: "User created", user });
  } catch {
    console.log("Error");
  }
});

export default router;