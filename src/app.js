import 'dotenv/config';
import express from "express";
import applyMiddlewares from "./middlewares/index.js";


const app = express();

applyMiddlewares(app)

// Routing Handling
app.use(userRoute)



app.get("/", (req, res) => {
  res.status(200).send({ massage: "Server is running" });
});

app.all("*", (req, res, next) => {
  const error = new Error(`Can't find requested ${req.originalUrl} in our server`)
  error.status = 404;
  next(error)
})

app.use(globalErrorHandler)

export default app;