import http from "http";

const someHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <title>HELLO WORLD</title>
</head>
<body>
    <h1>Home page</h1>
    </body>
</html>
`;
const customers = [
  {
    name: "Henrik",
    orders: 1,
  },
  {
    name: "Ola",
    orders: 10,
  },
];

/* const server = http.createServer((req, res) => {
  console.log(req.method);
  if (req.method == "GET") {
    if (req.url == "/") {
      res.end(someHTML);
    } else if (req.url == "/users") {
      res.end("USERS ENDPOINT");
    } else if (req.url == "/customers") {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(customers));
    } else {
      res.end("GET METHOD: " + req.url);
    }
  }
  if (req.method == "POST") {
    res.end("POST METHOD");
  }
}); */

// USING SWITCH STATEMENTS INSTEAD: easier to read code
const server = http.createServer((req, res) => {
  switch (req.method) {
    case "GET":
      getMethods(req, res);
      break;
    case "POST":
      res.end("POST METHOD");
      break;
    case "PUT":
      res.end("PUT METHOD");
      break;
    default:
      res.end("NOT ACCEPTED METHOD");
  }
});
function getMethods(req, res) {
  switch (req.url) {
    case "/":
      res.end(someHTML);
      break;
    case "/customers":
      res.end("CUSTOMER PAGE");
      break;
    default:
      res.end("NOT FOUND");
  }
}
server.listen(3000, () => {
  console.log("Server started on port 3000");
});