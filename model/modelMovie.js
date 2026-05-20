import { model, Schema } from "mongoose";

const shema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  desc: { type: String, required: true },
});

// Creare Our Model
const Movie = model("Movie", shema);

export default Movie;
