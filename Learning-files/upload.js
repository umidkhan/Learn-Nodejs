const http = require("http");
const formidable = require("formidable");
const fs = require("fs");
const Fs = require('fs/promises');

const fileSize = async (path) => {
    const stat = await Fs.stat(path)
    return stat.size
}

http
  .createServer((req, res) => {
    if (req.url == "/fileupload") {
      const form = new formidable.IncomingForm();
      form.parse(req, (err, fields, files) => {
        const oldpath = files.filetoupload.filepath;
        const newpath =
              "C:/Users/umidx/" + files.filetoupload.originalFilename;
          const size = files.filetoupload.size;
          console.log(fileSize(oldpath));
        fs.rename(oldpath, newpath, (err) => {
          if (err) {
            throw err;
          }
          res.write("File uploaded and move!");
          res.end();
        });
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(
        '<form action="fileupload" method="post" enctype="multipart/form-data">'
      );
      res.write('<input type="file" name="filetoupload"><br>');
      res.write('<input type="submit">');
      res.write("</form>");
      return res.end();
    }
  })
  .listen(2007);
