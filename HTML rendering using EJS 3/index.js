const express = require('express');
const path = require("path");


const app = express();

const PORT = 3000;



// ! This is not a good approach for rendering HTML documents
// app.get("/",(req,res)=>{
//   res.end(`<h1>Hi my name is afaq ahsan ! </h1>`)
// })
 
// ! For redering HTML we are going to use EJS => npm i EJS

//! for using ejs we first have to set our view engine as ejs 

app.set("view engine" , "ejs");    //! Step 1 

//! after that we have to give the path of where is our ejs files are located

app.set('views',path.resolve('./views'));   //! step 2


app.get("/",(req,res)=>{
  return res.render('home');    //! now render that HTML page
})  


app.listen(PORT,()=>{
  console.log(`server is running on port # ${PORT}`);
})

