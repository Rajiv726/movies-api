import express from "express";
import {
  movieCreate,
  movieDelete,
  movieDetail,
  movieIndex,
  movieUpdate,
} from "../controller/controlMovies.js";

const router = express.Router();
// CRUD functionality of movies
// C - Create new movie
router.post("/movie", movieCreate);

// R - Read the movies
router.get("/movies", movieIndex);
router.get("/movies/:id", movieDetail);

// U - Update for particular movie
router.put("/movies/:id", movieUpdate);

// D - Delete older movie
router.delete("/movies/:id", movieDelete);

export default router;
