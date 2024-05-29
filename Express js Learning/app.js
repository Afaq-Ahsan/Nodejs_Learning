
! instead of using this app web will use practice.js

// const express = require('express');
// const grocerriesRoute = require('./Routes/groceries');

// const app = express();

// const PORT = 3000;

// app.use(express.json()); //middle
// app.use(express.urlencoded());
// app.use(grocerriesRoute);

// // ! check api calls on postman
// // ! get      getData
// // ! post     post data
// // ! put      update data
// // ! delete   delete data

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// app.get('/', (req, res) => {
//   res.send('Welcome to home page');
// });

app.get('/contact', (req, res) => {
//   res.send([
//     { 'First Name': 'Afaq', LastName: 'Ahsan' },
//     { 'Father FirstName': 'Muhammad', 'Father LastName': 'Irfan' },
//   ]);
// });

const express = require('express');
const groceriesRoute = require('./Routes/groceries');

const app = express();

const PORT = 3000;

app.use(express.json()); // middleware
app.use(express.urlencoded()); // middleware
app.use(groceriesRoute); // Mount the groceries route before other routes

// Your other routes (e.g., app.get('/'), app.get('/contact')) should be defined here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
