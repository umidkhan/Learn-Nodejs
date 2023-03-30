const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static("public"));

// get data
app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/" + "form.html");
});

// app.get("/get", (req, res) => {
//   response = {
//     first_name: req.query.first_name,
//     last_name: req.query.last_name,
//   };
//   console.log(response);
//   res.end(JSON.stringify(response));
// });

// post data
app.post("/post", urlencodedParser, (req, res) => {
  response = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  };
  console.log(response);
  res.end(JSON.stringify(response));
  let firstName = req.body.first_name
  let lastName = req.body.last_name

  let data = `${firstName} ${lastName}`
  fs.writeFile("data.html", data, (err) => {
    if (err) {
      console.error(err);
    }
  });
});

app.get("/data", (req, res) => {
  res.sendFile(__dirname + "/" + "data.html");
});

const server = app.listen(2000, () => {
  console.log("Server is running at http://localhost:2000");
});
