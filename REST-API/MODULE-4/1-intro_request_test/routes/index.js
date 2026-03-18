var express = require('express');
var router = express.Router();
const generateDeckOfCards =  require("../util/generateDeckOfCards");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get("/deck", (req, res) => {
  // function
  // generate a deck of cards
  // Generate it sorted

  const deck = generateDeckOfCards();
  res.json(deck);
});

module.exports = router;
