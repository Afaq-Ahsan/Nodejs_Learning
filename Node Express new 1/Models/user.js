const mongoose = require('mongoose');

// DB Schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    class: {
      type: String,
    },
    gender: {
      type: String,
    },
  },
  { timestamps: true } //in order to set created at timestamp on each data entry.
);

// DB Model
const User = mongoose.model('user', userSchema);

module.exports = User;
