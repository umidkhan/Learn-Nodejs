const url = require('url');
const myURL = "https://localhost:8081/default.htm?year=2023&month=march";
const parsedURL = url.parse(myURL, true);

console.log(parsedURL);