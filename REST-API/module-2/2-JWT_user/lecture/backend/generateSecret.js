import crypto from "crypto";

const randomBytes = crypto.randomBytes(40);

const SECRET = randomBytes.toString("base64");

console.log(SECRET);