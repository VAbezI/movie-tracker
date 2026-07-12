const express = require("express");
const movieRoutes = require("./routes/movies");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Movie Tracker API is running!" });
});

app.use("/movies", movieRoutes);

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;