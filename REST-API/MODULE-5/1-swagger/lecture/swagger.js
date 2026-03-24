const swaggerAutogen = require("swagger-autogen")();

const out = "./swagger-output.json";
const input =  ["./app.js"];

swaggerAutogen(out, input);