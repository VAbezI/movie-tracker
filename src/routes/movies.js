const express = require("express");
const router = express.Router();

const controller = require("../controllers/moviesController");

router.get("/", controller.getAllMovies);
router.post("/", controller.addMovie);
router.delete("/:id", controller.deleteMovie);
router.patch("/:id/toggle", controller.toggleWatched);

module.exports = router;