import Movie from "../model/modelMovie.js";

export const movieIndex = (req, res) => {
  res.send("Get all the list of movies");
};

export const movieCreate = async (req, res) => {
  // create movie info
  // validate the data
  const newMovie = new Movie({ title: req.body.title, desc: req.body.desc });

  // Success || Fauiler
  try {
    const movie = await newMovie.save();
    return res.status(201).json(movie);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const movieUpdate = (req, res) => {
  res.send("Update or Modify a movie by its ID");
};

export const movieDelete = (req, res) => {
  res.send("Delete a movie by its ID");
};
