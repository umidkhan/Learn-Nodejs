const path = require("path");
const fs = require("fs");

const directoryPath = path.join(__dirname, "../../Learn-Nodejs/Code");

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error("Unable to scan directory: " + err);
  }

  // files.map(file => console.log(file));
  files.map((file) => console.log(file.search(1)));
  console.log(files.length);
});
