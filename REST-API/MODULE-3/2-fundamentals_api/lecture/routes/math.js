const { Router } = require("express");

const router = Router();

function sum(num1, num2) {
  return num1 + num2;
}

router.get("/sum", (req, res) => {
  // url.com/?num1=1&num2=2
  const { num1, num2 } = req.query;
  // result becomes 45 with input = num1:4, num2: 5
  // fix code so result becomes 9
  const number1 = Number(num1);
  const number2 = Number(num2);
  const result = sum(number1, number2);
  res.json({ data: result });
});

// Returns the sum of two numbers
router.post("/sum", (req, res) => {
  const { num1, num2 } = req.body;
  const result = sum(num1, num2);
  res.json({ data: result });
});

function multiply(num1, num2) {
  return num1 * num2;
}
// POST ROUTE for multiplying two numbers, use function for multiplying
router.post("/multiply", (req, res) => {
  const { num1, num2 } = req.body;
  const result = multiply(num1, num2);
  res.json({ data: result });
});

// takes in ONE number, and checks if it is a prime
// checking if number is prime should be done in a separate function
// eg: 3 is only divisible by 7 and 1, so it's a prime. 3%1 == 0 3%2 == 1 3%3 == 0.
// only it self and 1 is 0, all other numbers between give values, it's a prime
// req.body = {number: <number>}
// response = {data: true/false}

function isPrime(num) {
    // 5
    // 5%2 = 1
    // 5%3 = 2
    // 5%4 = 1

    // 9%2 = 1
    // 9%3 = 0 -- NOT A PRIME

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

router.post("/prime", (req, res) => {
  const { number } = req.body;
  const result = isPrime(number);
  res.json({ data: result });
});

module.exports = router;