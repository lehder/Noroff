var express = require("express");
const { User } = require("../models/index.js");
var router = express.Router();

/* GET register page. */
router.get("/", async function (req, res, next) {
  const users = await User.findAll();
  res.render("register", { users });
});

router.post("/", async (req, res, next) => {
  try {
    const user = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    res.redirect("/register");
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;