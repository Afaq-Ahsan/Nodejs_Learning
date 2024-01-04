// Creating a Server

// const http = require('node:http');

// const server = http.createServer((req, res) => {
//   res.writeHead(200);
//   res.end("Hello Afaq");
// });

// server.listen(3000,()=>{console.log("Server running on port 3000")});

// const http = require('node:http');

// const server = http.createServer((req, res) => {
//   res.writeHead(200,{"content-type":"text/plain"});
//   res.end('Hello World !');
// });

// server.listen(3000, () => {
//   console.log('SeRvEr is running on port 3000');
// });

//! _________________________________________________________________________________________________________
//! JSON Response

// const http = require('node:http');

// const server = http.createServer((req, res) => {
//   const superHero = { firstName: 'Afaq', secondName: 'Ahsan' };

//   res.writeHead(200, { 'content-type': 'application/json' });
//   res.end(JSON.stringify(superHero));
// });

// server.listen(3000, () => {
//   console.log('server is running on port 3000');
// });

//! _________________________________________________________________________________________________________
//! HTML Response

// const http = require('node:http');

// const server = http.createServer((req, res) => {
//   res.writeHead(200,{"content-type":"text/html"});
//   res.end("<h1>hi everyone<h1/>");
// });

// server.listen(3000, () => {
//   console.log('SeRvEr is running on port 3000');
// });

//! _________________________________________________________________________________________________________
//! HTML Response from a separate HTML File

// const http = require('node:http');
// const fs = require("node:fs");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'content-type': 'text/html' });

//   // fs.createReadStream("./index.html").pipe(res);

//  const HTMLFile = fs.readFileSync("./index.html","utf-8");

//   res.end(HTMLFile);
// });

// server.listen(3000, () => {
//   console.log('SeRvEr is running on port 3000');
// });

//! _________________________________________________________________________________________________________
//! HTML Template

// const http = require('node:http');
// const fs = require('node:fs');

// const server = http.createServer((req, res) => {
//   const name = 'Afaq Ahsan';

//   res.writeHead(200, { 'content-type': 'text/html' });

//   // fs.createReadStream("./index.html").pipe(res);

//   let HTMLFile = fs.readFileSync('./index.html', 'utf-8');

//   HTMLFile = HTMLFile.replace('{{name}}', name);

//   res.end(HTMLFile);
// });

// server.listen(3000, () => {
//   console.log('SeRvEr is running on port 3000');
// });

//! _________________________________________________________________________________________________________
//! HTML Routing

const http = require('node:http');
const fs = require('node:fs');
 
const server = http.createServer((req, res) => {
  // res.end(req.url);

  // const html = fs.readFileSync('./index.html', 'utf-8');

  if (req.url === '/') {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Home Page');
  } else if (req.url === '/about') {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('About Page');
  } else if (req.url === '/api') {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ 'First Name': 'Afaq', 'Last Name': 'Ahsan' }));
  } else {
    res.writeHead(404);
    res.end('Page Not Found');
  }
});

server.listen(3000, () => {
  console.log('server running on port 3000');
});
