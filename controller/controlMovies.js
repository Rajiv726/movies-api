export const movieIndex = (req, res) => {
  res.send("Get all the list of movies");
};

export const movieCreate = (req, res) => {
  res.send("Create a movie");
};

export const movieUpdate = (req, res) => {
  res.send("Update or Modify a movie by its ID");
};

export const movieDelete = (req, res) => {
  res.send("Delete a movie by its ID");
};
