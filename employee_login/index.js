const  express = require('express');
const { connectMongoDB } = require('./mongoDBconnection');
const getRoutes = require('./Routes/getRoutes.js');
const postRoutes = require('./Routes/postRoutes.js');
const putRoutes = require('./Routes/putRoutes.js');

const app = express();

const PORT = 3000;

connectMongoDB('mongodb://localhost:27017/EmployeeDB');

app.use(express.json());
app.use(express.urlencoded());

app.use("/",getRoutes);
app.use("/",postRoutes);
app.use("/",putRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});