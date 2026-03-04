import crypto from "node:crypto";

const SECRET = crypto.randomBytes(42);
// Creates a "strong" secret for us
console.log(SECRET.toString("base64"));