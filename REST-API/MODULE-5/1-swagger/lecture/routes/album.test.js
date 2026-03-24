require("dotenv").config({ path: ".env.test" });
const request = require("supertest");
const { sequelize, Album } = require("../models/index");
const app = require("../app");
beforeAll(async () => {
  await sequelize.sync({ force: true });
  await Album.bulkCreate([
    { title: "Ride the Lightning" },
    {
      title: "My Beautiful Dark Twisted Fantasy",
    },
    { title: "Short and Sweet" },
  ]);
});

test("GET /albums", async () => {
  const response = await request(app).get("/albums");
  expect(response.status).toBe(200);
  expect(response.body.albums.length).toBeGreaterThan(0);
  expect(response.body.albums.length).toBeLessThanOrEqual(20);
});

test("POST /albums", async () => {
  const beforeAlbums = await request(app).get("/albums");
  const addAlbum = await request(app)
    .post("/albums")
    .send({ title: "Nevermind" });
  const afterAlbums = await request(app).get("/albums");

  expect(beforeAlbums.status).toBe(200);
  expect(addAlbum.status).toBe(201);
  expect(afterAlbums.status).toBe(200);

  expect(beforeAlbums.body.albums.length).toBeLessThan(
    afterAlbums.body.albums.length,
  );
});

test("GET /albums:id ", async () => {
  const getAlbums = await request(app).get("/albums");
  expect(getAlbums.status).toBe(200);
  expect(getAlbums.body.albums.length).toBeGreaterThan(0);
  const firstAlbum = getAlbums.body.albums[0];
  const response = await request(app).get("/albums/" + firstAlbum.id);
  expect(response.status).toBe(200);
  expect(response.body.album).toStrictEqual(firstAlbum);
});

