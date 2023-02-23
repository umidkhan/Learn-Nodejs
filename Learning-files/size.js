var fs = require("fs"); // Load the filesystem module
var stats = fs.statSync("./image_2023-02-10_10-23-20.png")
var fileSizeInBytes = stats.size;
console.log(fileSizeInBytes);
// Convert the file size to megabytes (optional)
var fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
console.log(fileSizeInMegabytes)