const crypto = require("crypto");

// Code for generating salt
/* const salt = crypto.randomBytes(16).toString("hex");
console.log(salt);
const password = "password123";
const hashedPassword = crypto
  .createHash("sha256")
  .update(salt + password)
  .digest("hex");

console.log(hashedPassword);
 */

const [, , second, third] = [3, 87, 123, 321];

console.log(second, third);