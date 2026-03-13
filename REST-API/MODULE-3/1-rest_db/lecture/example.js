/* const text = "something <token>";
const split = text.split(" ");
console.log(split);
console.log(split[1]);
 */



// 
const payload = atob(
  "eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJkaXNwbGF5TmFtZSI6IlN1cGVyQ29vbFVzZXIiLCJhdmF0YXIiOiJleGFtcGxnZS5qcGciLCJpYXQiOjE3NzMxNDQxNjV9",
);

console.log(JSON.parse(payload));

const newPayload = btoa(
  JSON.stringify({ displayName: "hello", email: "exa@example.com" }),
);

console.log(newPayload);