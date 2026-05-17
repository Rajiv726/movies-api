import express from "express";
import movieRouter from "./routes/routeMovies.js";

const app = express();
const port = 8080;

app.get('/', (req, res)=>{
  res.json({msg:"Hello world!"})
})

// Creating Middleware
app.use('/api', movieRouter)

app.listen(port, () => {
  console.log(`I'm listening to ${port}`);
});
