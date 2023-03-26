const buf = new Buffer(256);

// Concatenate Buffers
/* const buf1 = new Buffer("I'm ")
const buf2 = new Buffer(" learning NodeJS")
const concatBuf = Buffer.concat([buf1, buf2])
console.log("Concatenate buffers: " + concatBuf); */

// Buffer to JSON
/* const jsonBuf = new Buffer("This is JSON data")
const json = jsonBuf.toJSON(jsonBuf);

console.log(json); */

/* for (var i = 0; i < 26; i++){
    buf[i] = i + 97;
}
console.log(buf.toString("ascii"));
console.log(buf.toString("ascii", 0, 5));
console.log(buf.toString("utf8", 0, 5));
console.log(buf.toString(undefined, 0, 5)); */

/* const wrote = buf.write("Learn NodeJS");

console.log("Octets written"); */