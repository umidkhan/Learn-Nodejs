// var fs = require("fs");
// var rs = fs.createReadStream("./demofile.txt");
// rs.on("open", function () {
//   console.log("The file is open");
// });

const events = require('events');
const evenEmitter = new events.EventEmitter();

const setEvent = () => {
    console.log("I'm a scream")
}

evenEmitter.on("screan", stream => {
    console.log(stream)
})

evenEmitter.emit("screa-sm-")

console.log(evenEmitter);