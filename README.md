# Movie Tracker API

## About

Movie Tracker API is a simple Node.js/Express application for tracking movies — adding, viewing, marking as watched, and deleting. Data is stored in memory, with no real database.

This project was built as a demonstration for **CI/CD pipeline optimization**: it shows how a simple application is containerized with Docker (with image size optimization) and how testing, building, and publishing are automated using GitHub Actions, across three development branches (dev, test, main).

## Running the application

### Locally (Node.js)

```bash
git clone https://github.com/VAbezI/movie-tracker.git
cd movie-tracker
npm install
npm start
```

The application is available at `http://localhost:3000`.

### With Docker

```bash
docker build -t movie-tracker .
docker run -p 3000:3000 movie-tracker
```

The application is available at `http://localhost:3000`.

## What the application does

- `GET /movies` — returns the list of all added movies
- `POST /movies` — adds a new movie (title is required, genre is optional)
- `PATCH /movies/:id/toggle` — marks a movie as watched/unwatched
- `DELETE /movies/:id` — deletes a movie

Example of adding a movie:

```bash
curl -X POST http://localhost:3000/movies -H "Content-Type: application/json" -d '{"title":"Inception","genre":"Sci-Fi"}'
```

> Note for Windows users: in PowerShell, use `curl.exe` instead of `curl`, and escape quotes if needed: `curl.exe -X POST http://localhost:3000/movies -H "Content-Type: application/json" -d '{\"title\":\"Inception\",\"genre\":\"Sci-Fi\"}'`

## Testing

```bash
npm run test              # unit tests
npm run test:integration  # integration tests
```

## Docker Hub

The final application image is automatically published to Docker Hub on every merge into the main branch:
[vabezi/movie-tracker](https://hub.docker.com/r/vabezi/movie-tracker)