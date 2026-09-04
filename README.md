# Movie Tracker API

Jednostavan Node.js/Express API za evidenciju filmova (dodavanje, pregled, oznacavanje kao odgledano, brisanje). Projekat demonstrira CI/CD pipeline sa Docker optimizacijom i automatizacijom preko GitHub Actions.

## Pokretanje...

```bash
npm install
npm start
```

Aplikacija radi na `http://localhost:3000`.

## Docker

```bash
docker build -t movie-tracker .
docker run -p 3000:3000 movie-tracker
```

## Rute

- `GET /movies` - lista filmova
- `POST /movies` - dodavanje filma
- `PATCH /movies/:id/toggle` - oznaci kao odgledano
- `DELETE /movies/:id` - brisanje filma

## Testiranje

```bash
npm run test
npm run test:integration
```

## Docker Hub

[vabezi/movie-tracker](https://hub.docker.com/r/vabezi/movie-tracker)


<!-- Test PR ka test grani -->