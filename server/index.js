const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

app.use(express.static("dist"));
app.use(express.json());

app.get("/teams", (req, res) => {
  axios
    .get("https://www.balldontlie.io/api/v1/teams")
    .then((data) => res.send(data.data))
    .catch((err) => res.send(err));
});

app.get("/games/:id", (req, res) => {
  const { id } = req.params;
  axios
    .get(
      `https://www.balldontlie.io/api/v1/games/?per_page=100&seasons[]=2021&team_ids[]=${id}`
    )
    .then((data) => res.send(data.data))
    .catch((err) => res.send(err));
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
