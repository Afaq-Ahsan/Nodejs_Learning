const mongoose = require('mongoose');

async function connectMongoDB() {
  return mongoose
    .connect('mongodb://localhost:27017/studentManagementSystem')
    .then(() => console.log('MongoDB connected :)'))
    .catch((error) => console.log('error', error));
}

module.exports = { connectMongoDB };
