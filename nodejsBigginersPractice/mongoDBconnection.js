const mongoose = require('mongoose');

async function connectMongoDB() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/Groccery'); // No options needed
    console.log('MongoDB is connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

module.exports = { connectMongoDB };
