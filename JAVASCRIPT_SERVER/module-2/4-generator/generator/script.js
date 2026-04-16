const fs = require("node:fs");
const temp = fs.readFileSync("data/users.json");
console.log(temp);
