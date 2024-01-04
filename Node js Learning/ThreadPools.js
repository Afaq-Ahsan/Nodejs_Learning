// libuv have 4 threads to help the main thread of js
// Question : Can we increase threadpool size ??
// The answer is yes we can in crease it bby using environmental variable
// process.env.UV_THREADPOOL_SIZE = 5; 

// Synchronous

// const fs = require("node:fs");

// console.log("first");

// fs.readFile("./greet.txt","utf-8",(err,data)=>{
//   console.log("File contents");
// })

// console.log("last");
// !----------------------------------------------
// const crypto = require("node:crypto");

// const start = Date.now();

// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");

// console.log("hash : ",Date.now() - start);

// !----------------------------------------------

// const crypto = require("node:crypto");

// // process.env.UV_THREADPOOL_SIZE = 5;

// const max_calls = 3;

// const start = Date.now();
// for (let i = 0; i < max_calls; i++) {
//   crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512', () => {
//     console.log(`hash : , ${i + 1}`, Date.now() - start);
//   });
// }

// console.log("hi");
