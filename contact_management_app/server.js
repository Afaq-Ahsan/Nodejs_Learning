const express = require('express');
const contactRoutes = require('./Routes/contactRoutes');
const userRoutes = require('./Routes/userRoutes');
const mongoose = require('mongoose');

const app = express();
const PORT = 3001;

mongoose
  .connect('mongodb://localhost:27017/contact_management')
  .then(() => {
    console.log('DataBase Connected');
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(express.urlencoded());

app.use('/api/contacts', contactRoutes);
app.use('/api/userRoutes',userRoutes);

app.listen(PORT, () => console.log(`server is running on  port ${PORT}`));
