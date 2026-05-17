import express from "express";

const app = express();
const port = 8080;

// CRUD functionality of movies
// R - Read the movies
app.get("/movies", () => {});

// C - Create new movie
app.post("/movies", () => {});

// U - Update for particular movie
app.put("/movies/:id", () => {});

// D - Delete older movie
app.delete("/movies/:id", () => {});

app.listen(port, () => {
  console.log(`I'm listening to ${port}`);
});
