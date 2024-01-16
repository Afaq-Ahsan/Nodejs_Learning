const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, 'userName must be required'],
    },
    userEmail: {
      type: String,
      required: [true, 'user Email must be required'],
      unique: [true, 'userEmail should be unique'],
    },
    userPassword: {
      type: String,
      required: [true, 'user Password must be required'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('user', userSchema);
