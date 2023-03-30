var express = require("express");
var app = express();
var fs = require("fs");

app.get("/listUsers", (req, res) => {
  fs.readFile(__dirname + "/" + "users.json", "utf8", (err, data) => {
    console.log(data);
    res.end(data);
  });
});

let user = {
  user4: {
    name: "mohit",
    password: "password4",
    profession: "teacher",
    id: 4,
  },
};

app.post("/addUser", (req, res) => {
  fs.readFile(__dirname + "/" + "users.json", "utf-8", (err, data) => {
    data = JSON.parse(data);
    data["user4"] = user["user4"];
    console.log(data);
    res.end(JSON.stringify(data));
  })
})

var server = app.listen(2020, () => {
  console.log("Server running at http://localhost:2020");
});
