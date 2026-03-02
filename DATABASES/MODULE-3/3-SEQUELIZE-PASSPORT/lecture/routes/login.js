var express = require("express");
var passport = require("passport");
var LocalStrategy = require("passport-local");
const { User } = require("../models/index.js");
var router = express.Router();

passport.use(
  new LocalStrategy(async (username, password, callback) => {
    const user = await User.findOne({
      where: {
        username: username,
      },
    });
    if (!user) {
      callback(null, false, { message: "Incorrect username or password" });
    } else if (username === user.username && password === user.password) {
      callback(null, user);
    } else {
      callback(null, false, { message: "Incorrect username or password" });
    }
  }),
);

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, {
      id: user.id,
      username: user.username,
    });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

/* GET login page. */
router.get("/", async function (req, res, next) {
  res.render("login");
});

router.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  }),
);

module.exports = router;