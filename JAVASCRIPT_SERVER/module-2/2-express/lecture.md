---
header: "Lesson 2.2: Express"
marp: true
theme: default
size: 16:9
paginate: true
color: #111
backgroundColor: #eee
_footer: "@2025 Ludvig Alvir"
---

# Express

---

## Why servers

- Data can change, and users will get the "up to date" data.
- Users can send data to the server (e.g., forms, uploads).
- You can get data based on who you are.

---

## HTTP Requests

- GET: Retrieve data from the server
- POST: Send data to the server
- PUT: Replace data on the server
- PATCH: Update data on the server
- DELETE: Remove data from the server

---

## HTTP requests examples

Online blog platform:

- GET: retrieve a blog post, list of posts or a profile
- POST: create a new user account, create a post or comment
- PUT: replace a blog post, edit a comment
- PATCH: update user profile information
- DELETE: delete a blog post or comment

---

## HTTP requests examples

```http
GET /users HTTP/1.1
Host: example.com
```

```http
POST /users HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "email": "ola@example.com",
  "password": "password123"
}
```

---

## Do the request type matter?

- Can the server delete something with a GET request?
- Can the server create something with a DELETE request?
- Can the server update something with a POST request?

---

## Do the request type matter?

- Can the server delete something with a GET request? YES
- Can the server create something with a DELETE request? YES
- Can the server update something with a POST request? YES

It's all to make it easier for us developers.

---

## URL's

```
       domain       path       query
          |           |          |
          v           v          v
https://example.com/animals?sortOrder=DESC
```

---

##

## URL's

```
       domain       path     dynamic segments
          |           |          |
          v           v          v
https://example.com/animals/dogs/42
```

In express

```
       domain       path      params    query
          |           |          |       |
          v           v          v       v
https://example.com/animals/dogs/42?language=EN
```

---

## Example

```js
app.get("/:name", (req, res) => {
  console.log(req.query);
  console.log(req.params);
  res.send("Name path");
});
```