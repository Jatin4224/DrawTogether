import express from "express";

const app = express();

app.post("/signup", () => {});

app.post("/signin", (req, res) => {});

app.listen(3001, () => {
  console.log("server is running fine ");
});
