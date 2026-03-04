import jwt from "jsonwebtoken";

const SECRET = "supersecret";
const payload = {
  email: "test@example.com",
  avatar: "example.com/avatar.jpg",
  displayName: "Test",
};

const token = jwt.sign(payload, SECRET, { expiresIn: "1d" });
console.log(token);

console.log(jwt.verify(token, SECRET));
const INVALID_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJhdmF0YXIiOiJleGFtcGxlLmNvbS9hdmF0YXIuanBnIiwiZGlzcGxheU5hbWUiOiJUZXN0IiwiaWF0IjoxNzcyNTM3Mzk4LCJleHAiOjE3NzI2MjM3OTh9.wpuMKXvFuXi8DdYR_ecX8nf_OqbS1drzuDGjr9qG51w";

// Have to wrap in try catch for server not to crash, as if verify fails it throws an error
try {
  console.log(jwt.verify(INVALID_TOKEN, SECRET));
} catch (e) {
  console.log("invalid token");
}