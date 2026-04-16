const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("animals router");
});

router.get("/:name", (req, res) => {
  res.send(req.params.name);
});

module.exports = router;
