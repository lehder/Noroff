const swaggerAutoGen = require("swagger-autogen")();

const output = "./swagger-output.json";
const input = ["./app.js"];

swaggerAutoGen(output, input);