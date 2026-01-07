---
header: "Lesson 2.1: Express introduction"
marp: true
theme: default
size: 16:9
paginate: true
color: #111
backgroundColor: #eee
_footer: "@2025 Ludvig Alvir"
---

# Express introduction

---

## Javascript server

```js
import http from "http";
const server = http.createServer((req, res) => {
  res.end("Hello, World!");
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
```

---

## Request methods

<!-- res.appendHeader("Access-Control-Allow-Headers", "Content-Type");-->

**GET**: Retrieve data from the server
**POST**: Send data to the server
**PUT**: Replace data on the server
**PATCH**: Update data on the server
**DELETE**: Remove data from the server

---

## Handling requests

Most of it is setting or checking "text values"

```js
if (method == "GET") {
  // handle GET request
} else if (method == "POST") {
  // handle POST request
  if (contentType == "application/json") {
    // handle JSON data
  } else if (contentType == "application/x-www-form-urlencoded") {
    // handle form data
  }
}
```

---

## Creating a small API

client:

```js
async function postRequest() {
  const response = await fethch("example.com", {
    method: "POST", // Type of request we make
    headers: {
      "Content-Type": "application/json", // Type of data we send
    },
    body: JSON.stringify({ key: "value" }), // The actual data
  });
}
```

---

## Setting up the project

```sh
npm init -y
npm install express
```

Change package.json to use "type":"module"

---

## Index.js

```js
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from express");
});
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
```

---

## Express endpoints

app.get("/path"): matches GET requests to that path
app.post("/path"): matches POST requests to that path

---

## Middleware

```js
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
```

---

## Middleware for handling json

```js
app.use(express.json());
```