const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hurrah, Just created my first app with express");
});

app.get("/data", (req, res) => {
  res.send("The data will come soon!");
});

app.listen(port, () => {
  console.log(`My app running with port ${port}`);
});
