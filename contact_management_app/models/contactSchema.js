const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    user_id:{
       type:mongoose.Schema.Types.ObjectId,
       required:true,
       ref:"user"
    },
    name: {
      type: String,
      required: [true, 'Please enter contact name'],
    },
    email: {
      type: String,
      required: [true, 'Please enter your email'],
    },
    phone_no: {
      type: String,
      required: [true, 'Please enter the phone no'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Contact', contactSchema);
