import express from "express";
import movieRouter from "./routes/routeMovies.js";
import connectDB from "./config/db.js";

const app = express();
const port = 8080;

// Connect with DB
connectDB();

app.get("/", (req, res) => {
  res.json({ msg: "Hello world!" });
});

// Data Understanding Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Creating Middleware
app.use("/api", movieRouter);

app.listen(port, () => {
  console.log(`I'm listening to ${port}`);
});
