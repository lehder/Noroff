require("dotenv").config({ path: ".env.test" });
const request = require("supertest");
const app = require("../app");
const { Album } = require("../models/index");

test("GET /albums gives back albums", async () => {
  const response = await request(app).get("/albums");
  expect(response.status).toBe(200);
  expect(response.body.albums.length).toBeLessThanOrEqual(20);
  expect(response.body.albums[0].title).toMatch("Ride the Lightning");
});

test("POST /albums add album to db", async () => {
  Album.create = jest.fn();
  Album.create.mockResolvedValue({ title: "Test" });
  const response = await request(app).post("/albums").send({ title: "Test" });
  expect(response.body).toStrictEqual({
    album: { title: "Test" },
  });
  expect(Album.create).toHaveBeenCalled();
  expect(Album.create).toHaveBeenCalledWith({ title: "Test" });
});

test("Env is loaded correctly", () => {
  expect(process.env.EXAMPLE).toBe("1");
});
