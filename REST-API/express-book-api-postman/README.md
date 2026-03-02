# Books API

## Overview

This is a minimal REST API using in-memory storage.

It supports full CRUD operations for books and is designed to practice:

* HTTP methods
* Status codes
* Request parameters
* JSON request bodies
* Testing with Postman

Default server URL:

```
http://localhost:3000
```

Data is stored in memory and resets every time the server restarts.

---

# Running the Server

From the project root:

```bash
npm install
node app.js
```

If successful, you should see:

```
Server available on http://localhost:3000
```

Keep this running while testing in Postman.

---

# Importing the Postman Collection

You have been given:

```
Books-API.postman_collection.json
```

## Steps (Postman Desktop App)

1. Open Postman.
2. Click **File → Import…**
3. Select the workspace you want to import into.
4. In the Import window, drag the JSON file
   OR click **Upload Files** and select it.
5. Click **Import**.

You should now see a collection named:

```
Books API
```

# API Specification

Base URL:

```
http://localhost:3000
```

All requests and responses use JSON.

## GET /books

**200 OK**

Returns an array of all books.

## GET /books/:id

**200 OK**
Returns a single book when found.

**404 Not Found**
If the book does not exist.

## POST /books

### Body (JSON)

```json
{
  "title": "Book Title",
  "author": "Author Name"
}
```

**201 Created**
Returns the created book (including generated id).

**400 Bad Request**
If title or author is missing.

In Postman:

* Go to Body
* Select **raw**
* Choose **JSON**

## PUT /books/:id

This replaces the entire book.

### Body (JSON)

```json
{
  "id": 1,
  "title": "Updated Title",
  "author": "Updated Author"
}
```

**200 OK**
Returns the updated book.

**404 Not Found**
If the book does not exist.

**400 Bad Request**
If:

* Path id and body id do not match
* Required fields are missing

## DELETE /books/:id

**204 No Content**
If successfully deleted.

**404 Not Found**
If the book does not exist.