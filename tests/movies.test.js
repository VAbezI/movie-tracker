const request = require("supertest");
const app = require("../src/app");

describe("Movies API", () => {
    it("GET / should return message", async () => {
        const res = await request(app).get("/");
        expect(res.statusCode).toBe(200);
    });

    it("GET /movies should return array", async () => {
        const res = await request(app).get("/movies");
        expect(Array.isArray(res.body)).toBe(true);
    });
});