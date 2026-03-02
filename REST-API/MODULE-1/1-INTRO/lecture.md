---
header: "Lesson 1.1: Intorudction"
marp: true
theme: default
size: 16:9
paginate: true
color: #111
backgroundColor: #eee
_footer: "@2026 Ludvig Alvir"
---

# Introduction to REST APIs

---

## Separating the frontend and backend

- Client asks the server for data
- Server responds with data
- How is this different from last application?

---

## Resources and changing them

- Resources should be found at a URL's that makes sense
- Resources should be able to be changed with HTTP methods that make sense

---

## URL's

domain.com/resource/identifier?optional=information

---

## HTTP methods

- GET: Get a resource
- POST: Create a resource
- PUT: Update/replace a resource
- DELETE: Delete a resource
- PATCH: update/replace part of a resource

---

## HTTP status codes

**100-199**: Informational
**200-299**: Success
**300-399**: Redirection
**400-499**: Client error
**500-599**: Server error

---

## Stateless

- The server should not have to remember anything about the client
- Each request should contain all the information needed to process it