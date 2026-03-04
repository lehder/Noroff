import { Router } from "express";
import jwt from "jsonwebtoken";

const SECRET = process.env.SECRET;

const users = [
  {
    email: "admin@admin.com",
    password: "admin",
  },
];

const router = Router();
router.get("/", (req, res) => {
  // Bearer <token>
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    res.json({ message: "no token" });
    return;
  }
  try {
    const data = jwt.verify(token, SECRET);
    res.json({ data, personal: "Personal information" });
  } catch {
    res.json({ message: "no token" });
    return;
  }
});

function checkPassword(email, password) {
  for (const user of users) {
    if (email === user.email && password === user.password) {
      return true;
    }
  }
  return false;
}

// /auth/login
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (checkPassword(email, password)) {
    res.json({
      token: jwt.sign({ email }, SECRET),
    });
  } else {
    res.json({ message: "Invalid username or password" });
  }
});
// /auth/register
router.post("/register", (req, res) => {
  // Add a user based on values sent to this endpoint
  const { email, password } = req.body;
  users.push({ email, password });
  res.json({ message: "User created" });
});

export default router;