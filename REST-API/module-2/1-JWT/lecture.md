---
header: "Lesson 2.1: JWT"
marp: true
theme: default
size: 16:9
paginate: true
color: #111
backgroundColor: #eee
_footer: "@2026 Ludvig Alvir"
---

# JWT

---

## JWT

JWT(JSON Web Token) is a standard for securely transmitting information between parties.
We will use the jsonwebtoken library to generate and verify JWTs. https://www.npmjs.com/package/jsonwebtoken

---

## Create a token

1. Create a new project folder
2. Initialize a new project with npm
3. Install jsonwebtoken
4. Change package.json to use ES6 modules
5. Create a js file we will use to generate and verify tokens.

<!-- prettier-ignore -->
```js
import jwt from "jsonwebtoken";
const SECRET = "thisWillBeOurSecretToken";
const user = { name: "ola" };
```

---

For the API to be secure we need to use a secret key, for now we use this simple string just as an example. In a real project we would generate a more complex key.

To generate a token we can use the sign method from the jsonwebtoken library.

<!-- prettier-ignore -->
```js
const myToken = jwt.sign(user, SECRET);
console.log(myToken);

```

The token i now created looks like this:

<!-- prettier-ignore -->
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJuYW1lIjoibHVkdmlnIiwiaWF0IjoxNzA2NTcxODIwfQ.
Lcr8Rl0HjMf7mDcHJ5Ie-XU-fBefMVy-JgMJ0NtdEtk
```

---

## What is the token?

If we open the token in a decoder we can look at the content of the token.

https://jwt.io/

Get a token from any site and view it in the decoder.

Now lets add som more info to the user object, and create a new token.

<!-- prettier-ignore -->
```js
const user = { id: 10, name: "ola", email: "ola@norman.no" };
const myToken = jwt.sign(user, SECRET);
```

---

View the new token in the decoder.

The "iat" field is the time the token was created. We can create a tokens with an expiration date as a security measure.

<!-- prettier-ignore -->
```js
const myToken = jwt.sign(user, SECRET, { expiresIn: "1d" });
console.log(myToken);
```

When viewing the token in the decoder we can see that the "exp" field is added. After the expiration date the token will no longer work on our service.
Try to create a token with a shorter expiration date, and try to use it before and after the expiration time. (example: "1m" for 1 minute)

---

## Verify

To verify a token we can use the verify method from the jsonwebtoken library.

<!-- prettier-ignore -->
```js
const verifiedToken = jwt.verify(myToken, SECRET);
console.log(verifiedToken);
```

---

## Using JWT in our API

### Steps

1. Install express, jsonwebtoken and dotenv.
2. Create a .env file and add a secret token.
3. Create a login route that returns a JWT.
4. Create a function to verify the token.
5. Create a route that requires a valid token.

---

## Importing dependencies

<!-- prettier-ignore -->
```js
import express from "express";
import jwt from "jsonwebtoken";
const port = process.env.PORT;
const app = express();
app.use(express.json());
```

In the example project i have fallback values for .env variables. It is only there as an example.
app = express() creates an express app.
express.json() is a middleware that parses json data from the request body.

---

## Mock data

<!-- prettier-ignore -->
```js
const users = [
	{
		username: "admin",
		password: "admin123",
	},
	{
		username: "user",
		password: "user123",
	},
];

const DATABASE_DATA = [
	{ id: 1, content: "secret 1"},
	{ id: 2, content: "secret 2"}
];
```

---

## Testing the API

To consume the api with a front-end applications we will need to add CORS headers to our express app. Easiest way is to use the cors library.

<!--prettier-ignore -->
```bash
npm i cors
```

<!-- prettier-ignore -->
```js
import cors from "cors";
app.use(cors());
```

---

## Login

We will create a login route that returns a JWT. This route will take a username and password and check if they match one of the users in our mock database.

---

<!-- prettier-ignore -->
```js
function checkPassword(username, password) {
	for (const user of users) {
		if (user.username === username && user.password === password){
			return true;
		}
	}
	return false;
}
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (checkPassword(username, password)) {
        const token = jwt.sign({ username },
        process.env.SECRET_TOKEN);
        res.json({ token });
    } else {
        res.status(401).json({ error: "Wrong username or password" });
    }
});

```

---

## Getting data

We will create a route that returns the data from our mock database. This route will require a valid token.

<!-- prettier-ignore -->
```js
app.get("/data", (req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    try {
        const payload = jwt.verify(token, process.env.SECRET_TOKEN);
        res.json(DATABASE_DATA);
    } catch (error) {
        res.status(401).json({ error: "Invalid token" });
    }
});
```

---

## Tasks

- Create a route that returns a single item from the mock database.This route should require a valid token.

- Create a route that adds a new item to the mock database. This route should require a valid token.

- Create a route that deletes an item from the mock database. This route should require a valid token.

- Update the delete route to only allow users to delete their own items.