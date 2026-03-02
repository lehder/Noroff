/*
    Simple REST API using Express.

    Purpose:
    - Demonstrate CRUD operations (Create, Read, Update, Delete)
    - Show how routing works
    - Show how request data flows (params, body)
    - Use an in-memory array as a fake database

    Note:
    Data is NOT persisted. When the server restarts, all books reset.
*/

const express = require('express')
const app = express()

// Middleware:
// Parses incoming JSON request bodies and makes them available on req.body
app.use(express.json())

// Use environment port if deployed, otherwise default to 3000
const port = process.env.PORT || 3000

// In-memory store of books (acts as our "database")
let books = [
    { id: 1, title: "Dune", author: "Frank Hubert" },
    { id: 2, title: "Lord of the Rings", author: "JRR Tolkein" }
]

// Simple ID generator so each new book gets a unique id
let nextId = 3

// Centralized base route so we avoid repeating "/books" everywhere
let baseURL = "/books"


// CRUD - Create, Read, Update, Delete


// READ - Get all books
// GET /books
app.get(`${baseURL}`, (req, res) => {

    // 200 = OK (successful retrieval)
    res.status(200).json(books)
})


// READ - Get book by id
// GET /books/:id
app.get(`${baseURL}/:id`, (req, res) => {

    // Route parameters always arrive as strings
    // We convert to Number so we can compare properly
    let id = Number(req.params.id)

    // Array.find returns the first matching element or undefined
    let book = books.find(b => b.id == id)

    if (!book) {
        // 404 = Resource not found
        return res.status(404).json({ message: `Book with id ${id} not found` })
    }

    res.status(200).json(book)
})


// CREATE - Add a new book
// POST /books
app.post(`${baseURL}`, (req, res) => {

    // Destructure safely in case req.body is undefined
    let { title, author } = req.body ?? {}

    // Basic validation (ensures required fields exist)
    if (!title || !author) {
        // 400 = Bad request (client sent invalid data)
        return res.status(400).json({ message: "Please supply a valid title and author" })
    }

    // Create new object
    let newBook = { id: nextId, title, author }

    // Increment ID for next creation
    nextId++

    // Add to our "database"
    books.push(newBook)

    // 201 = Resource created
    res.status(201).json(newBook)
})


// DELETE - Remove a book
// DELETE /books/:id
app.delete(`${baseURL}/:id`, (req, res) => {

    let id = Number(req.params.id)

    // findIndex returns index or -1 if not found
    let indexOfBookToDelete = books.findIndex(b => b.id == id)

    if (indexOfBookToDelete === -1) {
        return res.status(404).json({ message: `Book with id ${id} was not found` })
    }

    // Remove 1 element at the found index
    books.splice(indexOfBookToDelete, 1)

    // 204 = No Content (successful but nothing returned)
    res.status(204).send()
})


// UPDATE (Replace entire resource)
// PUT /books/:id
app.put(`${baseURL}/:id`, (req, res) => {

    // ID from URL
    let pathId = Number(req.params.id)

    // ID and data from request body
    let { id, title, author } = req.body ?? {}

    // In PUT, the body represents the full replacement.
    // We ensure the URL id and body id match to avoid inconsistencies.
    if (pathId !== id) {
        return res.status(400).json({ message: `Path and Body Id do not match` })
    }

    if (!title || !author) {
        return res.status(400).json({ message: `Please supply a valid title and author` })
    }

    let indexOfBookToUpdate = books.findIndex(b => b.id == id)

    if (indexOfBookToUpdate === -1) {
        return res.status(404).json({ message: `Book with id ${pathId} not found` })
    }

    // Replace entire object (PUT semantics)
    let updatedBook = { id, title, author }

    books[indexOfBookToUpdate] = updatedBook

    res.status(204).send()
})


// Start server
// Server listens for incoming HTTP requests
app.listen(port, () => {
    console.log(`Server available on http://localhost:${port}`)
})