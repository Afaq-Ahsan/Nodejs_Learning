const mongoose = require('mongoose');

async function connectMongoDB(url) {
  return mongoose
    .connect('mongodb://localhost:27017/EmployeeDB')
    .then(() => console.log('mongo db is connect'))
    .catch((error) => console.log('error is ', error));
}

module.exports = {connectMongoDB};
