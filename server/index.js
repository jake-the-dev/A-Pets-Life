import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

require("dotenv").config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded.json({ limit: "30mb", extended: true }));
app.use(cors());

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
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", False); // no warnings in the console.
