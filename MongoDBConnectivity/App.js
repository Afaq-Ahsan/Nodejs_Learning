
const express = require('express');
// const dataRoute = require('./Routers/data');
const mongoose = require('./index')
const Users = require('./Schema');


const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());


// app.use('/', dataRoute);

app.listen(PORT,()=>{
  console.log(`App is running on port : ${PORT}`);
});


app.post('/creating',async (req,res)=>{
   const data  = req.body;
   if(!data){
    return res.status(400).json({ msg: 'All fields are req....0' });
   }

  const result =  await Users.create({
    firstName : data.firstName,
    email:data.email,
    password : data.password,
   })


   console.log("result is : ",result);

   return res.status(201).json({msg : "success"});
})







