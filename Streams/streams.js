const fs = require("fs");
const http = require("http");

const readMyStream = fs.createReadStream(__dirname + "/text.txt", "utf-8"); //read a file
const writeMyStream = fs.createWriteStream(__dirname + "/newText.txt", "utf-8"); // write a file

readMyStream.pipe(writeMyStream) //pipe method
