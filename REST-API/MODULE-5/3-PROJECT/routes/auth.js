const crypto = require("crypto");
const { Router } = require("express");
const { User } = require("../models/index");

const router = Router();

/**
 * returns false if input is valid
 * @param {string} username
 * @param {string} password
 * @returns {[boolean, object]}
 */
function validRequest(username, password) {
  let error = false;
  let message = "";
  if (!username) {
    error = true;
    message = "Username required";
  } else if (!password) {
    error = true;
    message = "Password required";
  }
  return [error, message];
}

router.post("/login", async (req, res) => {});

// try to make the register route
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const [err, message] = validRequest(username, password);
    if (err) {
      return res.status(400).json({ message: message });
    }
    const salt = crypto.randomBytes(16).toString("hex");
    const hashedPassword = crypto
      .createHash("sha256")
      .update(salt + password)
      .digest("hex");
    const user = await User.create({
      username,
      hashedPassword,
      salt,
      role: "user"
    });
    res.status(201).json({ user });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
