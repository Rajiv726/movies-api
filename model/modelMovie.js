import { model, Schema } from "mongoose";

const shema = new Schema({
  title: String,
  desc: String,
});

// Creare Our Model
const Movie = model("Movie", shema)

export default Movie;