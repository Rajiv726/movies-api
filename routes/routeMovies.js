import express from "express";

const router = express.Router();
// CRUD functionality of movies
// C - Create new movie
router.post("/movie", (req, res) => {
  res.send("Create a movie");
});

// R - Read the movies
router.get("/movies", (req, res) => {
  res.send("Get all the list of movies");
});

// U - Update for particular movie
router.put("/movies/:id", (req, res) => {
  res.send("Update or Modify a movie by its ID");
});

// D - Delete older movie
router.delete("/movies/:id", (req, res) => {
  res.send("Delete a movie by its ID");
});

export default router;
