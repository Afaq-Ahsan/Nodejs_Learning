const mongoose = require('mongoose');

const grocceryItemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  buyerName: {
    type: String,
    required: true,
  },
  itemWeight:{
    type:String,
    required:true
  },
  itemPricePerKG:{
    type:Number, // Changed data type to Number
    required:true
  },
  itemTotalPrice:{
    type:Number, // Changed data type to Number
    required:true
  }
},{timestamps:true});

const GrocceryItem = mongoose.model('grocceryItem', grocceryItemSchema);

module.exports = GrocceryItem;
