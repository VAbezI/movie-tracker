const request = require("supertest");
const app = require("../src/app");

describe("Movies API - Integration Flow", () => {
    let createdMovieId;

    it("Treba da prodje kroz kompletan ciklus: kreiranje, izmena i brisanje filma", async () => {
        // 1. KORAK: Proveravamo da li je lista na pocetku prazna
        const getInit = await request(app).get("/movies");
        expect(getInit.statusCode).toBe(200);
        expect(getInit.body.length).toBe(0);

        // 2. KORAK: Kreiramo novi film (POST)
        const newMovie = {
            title: "Inception",
            genre: "Sci-Fi"
        };
        const postRes = await request(app)
            .post("/movies")
            .send(newMovie);
        
        expect(postRes.statusCode).toBe(201);
        expect(postRes.body).toHaveProperty("id");
        expect(postRes.body.title).toBe("Inception");
        expect(postRes.body.watched).toBe(false);
        
        createdMovieId = postRes.body.id;

        // 3. KORAK: Proveravamo da li se film sada nalazi u listi svih filmova
        const getList = await request(app).get("/movies");
        expect(getList.statusCode).toBe(200);
        expect(getList.body.length).toBe(1);
        expect(getList.body[0].id).toBe(createdMovieId);

        // 4. KORAK: Oznacavamo film kao odgledan (PATCH)
        const patchRes = await request(app).patch(`/movies/${createdMovieId}/toggle`);
        expect(patchRes.statusCode).toBe(200);
        expect(patchRes.body.watched).toBe(true);

        // 5. KORAK: Brisemo film (DELETE)
        const deleteRes = await request(app).delete(`/movies/${createdMovieId}`);
        expect(deleteRes.statusCode).toBe(200);
        expect(deleteRes.body.message).toBe("Deleted successfully");

        // 6. KORAK: Proveravamo da li je lista na kraju ponovo prazna
        const getFinal = await request(app).get("/movies");
        expect(getFinal.statusCode).toBe(200);
        expect(getFinal.body.length).toBe(0);
    });
});