const express = require('express');
const groceriesRoute = require('./Routes/groceries');
const marketsRoutes = require('./Routes/markets');
const authRoute = require('./Routes/auth');
const cookieParser = require('cookie-parser');
const session = require('express-session');

require('./DataBase/index')

// we have to install this package in order to get cookies from server - cookie-parser

const app = express();

const PORT = 3000;



app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser()); //middleware

app.use(
  session({
    // secret: 'hdsnilfhviosgcnfogfsxogsvbyfusxruovrbs',
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
  })
);

// app.use((req, res, next) => {
//   if (req.session.user) {
//     next();
//   } else {
//     res.send(401);
//   }
// });

app.use('/api/v1/groceries', groceriesRoute);
app.use('/api/v1/markets', marketsRoutes);
app.use('/api/v1/auth', authRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port # ${PORT}`);
});
