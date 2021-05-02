import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import memoryRoutes from "./routes/memory.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true })); // bodyParser is now a part of express, again.
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/memory", memoryRoutes);

app.use("/", (req, res) => {
  res.send(`Welcome to the Backend`);
});

const ATLAS_CONNECTION = process.env.ATLAS_CONNECTION;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(ATLAS_CONNECTION, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error));

mongoose.set("useFindAndModify", false); // no warnings in the console.
