const mongoose = require('mongoose'); //In order to connect application with mongodb we have to use Mongoose library


mongoose.connect('mongodb://localhost:27017/expressJSTutorials')
.then(()=>{console.log("DB connected")})
.catch((err)=>{console.log(err)}); 