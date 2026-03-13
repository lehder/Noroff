const { Router } = require("express");

const router = Router();

// Grab the first word of a text
// eg: "hello world!"
// out: "hello"

function firstWordFromText(text) {
  //manual solution: harder to read, but faster if the text is very long
  let out = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] != " ") {
      out += text[i];
    } else {
      return out;
    }
  }
  return text;

  //easy solution: easy to read, easy to change
  return text.split(" ")[0];
}

router.post("/first", (req, res) => {
  const { text } = req.body;
  const firstWord = firstWordFromText(text);
  res.json({ data: firstWord });
});

// takes in text, sends out the text reversed
// input: hello world
// output: dlrow olleh
function reverse(input) {
  return input.split("").reverse().join("");
}
router.post("/reverse", (req, res) => {});

//Endpoint for checking if text is pallindrome
// eg: Anna == true
// eg: hello == false
// eg: racecar == true

module.exports = router;