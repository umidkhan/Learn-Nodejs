const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname;
  console.log("Request for " + pathname + "received.");

  fs.readFile("../summer.html", (err, data) => {
    if (err) {
      console.error(err);

      res.writeHead(404, { "Content-Type": "text/html" });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data.toString());
        console.log(pathname)
    }

    res.end();
  });
});

server.listen(8080, () =>
  console.log("Server running at http://localhost:8080/")
);
