const path = require("path");
const fs = require("fs");

const directoryPath = path.join(__dirname, "../../Learn-Nodejs/Code");

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error("Unable to scan directory: " + err);
  }

  fs.lstat(directoryPath, (err, stats) => {
    if (err) {
      console.error(err)
    } else {
      const file = stats.isFile()
      console.log(file === true ? file.valueOf() : undefined);
    }
  })

  // files.map(file => console.log(file));
  // console.log(files.length);
});
