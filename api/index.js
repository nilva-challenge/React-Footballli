import express from "express";
import cors from "cors";
import { leaguesData } from "./data.js";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  const { q } = req.query;
  const keys = ["leagueName"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(q.toLowerCase()))
    );
  };

  res.json(search(leaguesData).splice(0, 10));
});

app.listen(5000, () => {
  console.log("Api is working");
});
