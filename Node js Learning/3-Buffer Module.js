const {Buffer} = require("node:buffer");

const buf = Buffer.alloc(5);


console.log("Buffer : ", buf);


const buf2 = Buffer.alloc(20, 'AZ');
console.log("Buffer 2 : ",buf2);


const buf3 = Buffer.alloc(11, 'aGVsbG8gd29ybGQ=', 'base64');

console.log(buf3);