---
header: "Lesson 1: Module 1"
marp: true
theme: default
size: 16:9
paginate: true
color: #111
backgroundColor: #eee
_footer: "@2025 Ludvig Alvir"
---

# Module 1: JavaScript Servers

---

## Client vs server

**Client** (frontend)

- Runs on the user's device (browser)
- What the user interacts with
- Limited access to system resources for security reasons
- Can't hide code from the user

**Server** (backend)

- Runs on a remote machine (server)
- Handles requests from clients
- Full access to system resources
- Can hide code and logic from users

---

## Server-side JavaScript

- JavaScript can be used on the server-side using environments like Node.js
- Node.js allows JavaScript to interact with the file system and databases

To install Node.js, go to [nodejs.org](https://nodejs.org/) and download the latest LTS version.

- After installation, verify by running `node -v` and `npm -v` in your terminal(if you see version numbers, you're good to go!)

---

## Creating a simple program and running it with node

1. Create a new file named `app.js`
2. Add the following code to `app.js`:

```js
console.log("This code is running outside the browser!");
```

3. Open your terminal and navigate to the directory where `app.js` is located
4. Run the program using the command:

```sh
node app.js
```

---

## Filetypes

**Node can run a few different types of files, the most common you will see are:**

- `.js`: Standard JavaScript files
- `.ts`: TypeScript files
- `.mjs`: JavaScript modules (ES6 modules)
- `.cjs`: CommonJS modules (Node.js default module system)

---

## File system access

- Node.js provides a built-in `fs` module to interact with the file system
- You can read, write, and manipulate files using this module

Create text.txt with some content.

```js
import fs from "node:fs";
fs.readFile("text.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file");
  } else {
    console.log(data);
  }
});
```

---

Example of taking input and writing it to a file:

```js
import fs from "node:fs";

console.log("Write some text");

process.stdin.on("data", (data) => {
  writeInputToFile(data.toString());
});

function writeInputToFile(text) {
  fs.writeFile("example.txt", text, (err) => {
    if (err) {
      console.log("Error creating file");
    } else {
      console.log("File created successfully");
    }
    process.exit();
  });
}
```

---

## NPM - Node Package Manager

When you installed node, you also got NPM (Node Package Manager) which is a tool to help you manage libraries and packages for your Node.js projects.

Create a new project directory and navigate into it.

To be able to use NPM, you need to create a `package.json` file in your project directory. You can do this by running:

```sh
npm init -y
```

This will create a basic `package.json` file with default values.

---

You can then install packages using the command:

```sh
npm install <package-name>
```

As an example, we install the package 'is-even' which checks if a number is even:

```sh
npm install is-even
```

A new folder named `node_modules` will be created in your project directory, containing the installed package and its dependencies. The `package.json` file will also be updated to include the installed package as a dependency.

---

You can then use the package in your code like this:

```js
const isEven = require("is-even");
console.log(isEven(4)); // true
console.log(isEven(5)); // false
```

---

## Creating a simple server

```js
import http from "http";
const server = http.createServer((req, res) => {
  res.end("Hello, World!");
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
```

To fetch data from a web-app: res.setHeader("Access-Control-Allow-Origin", "\*");