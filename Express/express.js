const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Main page");
  console.log(req);
});

app.get("/api", (req, res) => {
  res.send("Asadbek");
  console.log(req);
});

const server = app.listen(8081, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log("Server running at http://localhost:8081");
});
