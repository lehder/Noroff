---
header: "Lesson 1.1: Docker"
marp: true
theme: default
size: 16:9
paginate: true
color: #111
backgroundColor: #eee
_footer: "@2026 Ludvig Alvir"
---

# Containers

---

## Containers

- Standarized boxes
- Run anywhere
- Isolated environments
- Faster and more efficient than virtual machines

Fixes the "it works on my machine" problem

---

## Install docker desktop

verify by running `docker -v` in terminal

---

## Create a Continously running node app

```js
setInterval(() => {
  console.log(Date.now());
}, 5000);
```

---

## Create a Dockerfile

```Dockerfile
FROM node:alpine
WORKDIR /app
COPY . .
CMD ["node", "index.js"]
```

---

## Build image

```bash
docker build -t my-first-app .
```

---

## Hosting a simple application through docker