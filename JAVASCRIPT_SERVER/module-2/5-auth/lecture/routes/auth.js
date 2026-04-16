const passport = require("passport");
const LocalStrategy = require("passport-local");

const express = require("express");
const router = express.Router();

const users = [
  {
    username: "admin",
    password: "admin",
  },
  {
    username: "user",
    password: "user",
  },
];

passport.serializeUser((user, callback) => {
  callback(null, user);
});

passport.deserializeUser((user, callback) => {
  const userId = user ? user.username : "";
  callback(null, userId);
});

passport.use(
  new LocalStrategy(function verify(username, password, cb) {
    let filteredArray = users.filter((x) => x.username == username);
    if (filteredArray.length) {
      let usersData = filteredArray[0];
      if (usersData.password == password) {
        return cb(null, usersData);
      }
    } else {
      return cb(null, false);
    }
  })
);

/* GET auth page. */
router.get("/", function (req, res, next) {
  res.render("auth", { title: "Auth" });
});

router.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/auth",
  }),
  (req, res) => {
    req.session.currentUser = req.user;
    res.redirect("/");
  }
);

// Our old post handler
router.put("/", (req, res) => {
  // Check if the users input is valid
  // Send back "success" if it is
  // Send back "denied" it it is not

  console.log(req.body);
  let isValid = false;
  users.forEach((user) => {
    if (
      user.username === req.body.username &&
      user.password === req.body.password
    ) {
      isValid = true;
    }
  });
  if (isValid) {
    res.send("success");
  } else {
    res.send("DENIED");
  }
});
module.exports = router;
