const express = require('express');
const { connectMongoDB } = require('./connection');
const path = require('path');
const cookieParser = require('cookie-parser');
const userRoute = require('./routes/userRoute');
const staticRoute = require('./routes/staticRoute');


const app = express();

const PORT = 3000;

connectMongoDB('mongodb://localhost:27017/Authentication');

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
  
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
         
app.use('/', userRoute);  //post data
app.use('/', staticRoute); //get data
    
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


