 
import express from "express";

import cors from "cors";

import connection from "../db/connection.js";
import models from "mongoose";

const app = express();
app.use(express());
app.use(cors({ origin: "http://localhost:5173" }));
 app.use(express.urlencoded({
    extended: true
 }))
app.post("/register", (req, res) => {
  console.log(req.body);
});

connection.then(() =>
  app.listen(8000, () => console.log("Server has started on port 8000"))
);
