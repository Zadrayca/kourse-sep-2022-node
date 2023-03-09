import express from "express";
import * as mongoose from "mongoose";

import { userRouter } from "./routers/user.router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);

app.get("/welcome", (req, res) => {
  res.send("WELCOME");
});

const PORT = 5100;

app.listen(PORT, () => {
  mongoose.connect("mongodb://127.0.0.1:27017/sep-2022");
  console.log(`Server has started on PORT ${PORT} 🚀🚀🚀`);
});
