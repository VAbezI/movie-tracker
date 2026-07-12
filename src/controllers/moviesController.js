const movies = require("../data/movies");
const { v4: uuidv4 } = require("uuid");

exports.getAllMovies = (req, res) => {
    res.json(movies);
};

exports.addMovie = (req, res) => {
    const { title, genre } = req.body;

    if (!title) {
        return res.status(400).json({ message: "Title is required" });
    }

    const newMovie = {
        id: uuidv4(),
        title,
        genre: genre || "unknown",
        watched: false
    };

    movies.push(newMovie);

    res.status(201).json(newMovie);
};

exports.deleteMovie = (req, res) => {
    const { id } = req.params;

    const index = movies.findIndex(m => m.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Movie not found" });
    }

    movies.splice(index, 1);

    res.json({ message: "Deleted successfully" });
};

exports.toggleWatched = (req, res) => {
    const { id } = req.params;

    const movie = movies.find(m => m.id === id);

    if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
    }

    movie.watched = !movie.watched;

    res.json(movie);
};