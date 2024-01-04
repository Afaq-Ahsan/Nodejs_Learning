const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/Afaq_DB_Learning')
  .then(() => {
    console.log('DataBase Connected');
  })
  .catch((err) => {
    console.log(err);
  });
