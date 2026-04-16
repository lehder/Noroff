---
header: "Lesson 2.5: Auth"
marp: true
theme: default
size: 16:9
paginate: true
color: #111
backgroundColor: #eee
_footer: "@2025 Ludvig Alvir"
---

# Auth

---

## Different auth methods

- Something you know
- Something you have
- Something you are

---

## Storing passwords

- What are some considerations

---

## Hashing

- One-way function
- Salt

```js
import crypto from "crypto";

const password = "password123";
const hashed = crypto.createHash("sha256").update(password).digest("hex");
console.log(hashed);
```
