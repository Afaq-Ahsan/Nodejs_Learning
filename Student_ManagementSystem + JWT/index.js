const express = require('express');
const { connectMongoDB } = require('./mongoDBconnection');
const path = require('path');
const cookieParser = require('cookie-parser');
const getRoutes = require('./routes/getRoutes');
const postRoutes = require('./routes/postRoutes');


const app = express();
const PORT = 3000;

connectMongoDB('mongodb://localhost:27017/studentManagementSystem');

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.use('/', getRoutes);   //get
app.use('/', postRoutes); //add

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});
