const mongoose = require('mongoose');
//schemas : our database should have
const userSchema = new mongoose.Schema({
  // userName: {
  //   type: mongoose.SchemaTypes.String,
  //   required: true,
  // },

  email: {
    type: mongoose.SchemaTypes.String,
    required: true,
    unique : true,
  },
  password: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },

  createdAt: {
    type: mongoose.SchemaTypes.Date,
    required: true,
    default: new Date(),
  },
});

module.exports = mongoose.model('users', userSchema);
