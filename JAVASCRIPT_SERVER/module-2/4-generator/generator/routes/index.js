var express = require("express");
var router = express.Router();
const fs = require("node:fs");

const temp = fs.readFileSync("data/users.json").toString();
const users = JSON.parse(temp);
/* GET home page. */
router.get("/", function (req, res) {
  res.render("index", {
    title: "BED",
    content: "Content from server",
    users: users,
  });
});
router.get("/add/:name", (req, res) => {
  users.push(req.params.name);
  fs.writeFileSync("data/users.json", JSON.stringify(users));
  res.send("User created: " + req.params.name);
});

module.exports = router;
