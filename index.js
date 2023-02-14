var http = require("http");
var dt = require("./myFirstModule"); // import my custom module
var url = require("url");
var fs = require("fs");
var adr = "http://localhost:8080/summer";
var q = url.parse(adr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

// create a server object
http
  .createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
    //   fs.appendFile("myNewFile1.txt", "Hello Content!", (err) => {
    //     if (err) throw err;
    //     console.log("Saved!");
    //   }); // create a file
        // fs.unlink("myNewFile1.txt", err => {
        //     if (err) throw err;
        //     console.log('File deleted');
        // }); // delete a file
        // fs.rename("myNewFile1.txt", "myNewFile2.txt", err => {
        //     if (err) throw err;
        //     console.log("File renamed");
        // }); // rename a file
    // fs.readFile("summer.html", function (err, data) {
    //   res.writeHead(200, { "Content-Type": "text/plain" });
    //   res.write(data);
    //   return res.end();
    // }); // view a file

// res.write("The date and time are currently: " + dt.myFirstModule()); // using my module
//   var txt = q.year + " " + q.month;
//   var q = url.parse(req.url, true).query;