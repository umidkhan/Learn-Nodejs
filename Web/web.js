const http = require("http");
const url = require("url");
const fs = require("fs");

http
  .createServer((req, res) => {
    const pathname = url.parse(req.url).pathname;

    console.log(pathname);

    fs.readFile("./summer.html", (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-type": "text/html" });
      } else {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write(`<h1>${data.toString()}</h1>`);
      }

      res.end();
    });
  })
  .listen(8080);

console.log("Server is running at http://localhost:8080/");
