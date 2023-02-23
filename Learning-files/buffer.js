const buf = new Buffer("Simply Easy Learning");
const json = buf.toJSON(buf);

console.log(json);
