const request = require("supertest");
const app = require("../app");
const { Book } = require("../models/index");

/* jest.mock("../models/index", () => {
  return {
    sequelize: {},
    Book: {
      findAll: () => {
        return [{ title: "The Bible" }];
      },
    },
  };
}); */
jest.mock("../models/index", () => {
  return {
    Book: {
      findAll: jest.fn(),
      create: jest.fn(),
    },
  };
});

beforeEach(() => {
  jest.clearAllMocks(); // clears "metadata" of mock functions before each test
  jest.resetAllMocks(); // Removes all mock data from mock functions
});

test("GET /books should return books", async () => {
  Book.findAll.mockResolvedValue([
    {
      title: "The Bible",
    },
    { title: "Harry Potter" },
  ]);
  const data = await request(app).get("/books");
  expect(data.body.books.length).toBe(2);
  expect(data.body.books[0].title).toBe("The Bible");
  expect(Book.findAll).toHaveBeenCalledWith({ limit: 10 });
});

test("POST /boooks test that book gets created", async () => {
  Book.create.mockResolvedValue({
    id: 2,
    title: "The Hobbit",
    updatedAt: "2026-03-18T13:01:15.773Z",
    createdAt: "2026-03-18T13:01:15.773Z",
  });
  const response = await request(app)
    .post("/books")
    .send({ title: "The Hobbit" });
  expect(response.body.data.title).toBe("The Hobbit");
  expect(response.status).toBe(201);
});

test("POST /boooks test that book needs title", async () => {
  // Mock is "redundant" as the indpoint never should hit the create method
  Book.create.mockResolvedValue({
    id: 2,
    title: "The Hobbit",
    updatedAt: "2026-03-18T13:01:15.773Z",
    createdAt: "2026-03-18T13:01:15.773Z",
  });
  const response = await request(app).post("/books").send({ title: "" });
  /* expect(response.body.data.title).toBe("The Hobbit"); */
  expect(response.status).toBe(400);
  expect(Book.create).not.toHaveBeenCalled();
});