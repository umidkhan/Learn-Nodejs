const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/" + "form.html");
});

app.get("/get", (req, res) => {
  response = {
    first_name: req.query.first_name,
    last_name: req.query.first_name,
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api", (req, res) => {
  res.send("API page");
});

const server = app.listen(8080, () => {
  console.log("Server listening at http://localhost:8080");
});
