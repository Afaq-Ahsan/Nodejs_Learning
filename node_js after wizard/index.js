const express = require('express');

const app = express();

const PORT = 3000;



// app.use((req,res,next)=>{
//   console.log("current time is" + Date.now());
//   next();
// })

// app.use("/things",(req,res,next)=>{
//   console.log("A request for things received for : "+Date.now());
//   next();
// })


// app.get('/',(req,res)=>{
//   res.send('welcome to home page');
// });

// app.get('/contacts',(req,res)=>{
//   res.send([
//         { 'First Name': 'Afaq', "LastName": 'Ahsan' },
//         { 'Father FirstName': 'Muhammad', 'Father LastName': 'Irfan' },
//       ])
// });

// app.post('/',(req,res)=>{
//   res.send("you just clicked on post method");
// })

// // app.get("/:id",(req,res)=>{
// //   res.send(`The id you specified is : ${req.params.id}`)
// // })

// app.get("/:id/:name",(req,res)=>{
//   res.send(`your selected id is ${req.params.id} and your name is ${req.params.name}`);
// })

// app.get("*",(req,res)=>{
//   res.send("invalid route");
// })

// app.get("/things/a/a",(req,res)=>{
//   res.send("things");
// })


app.use(function(req, res, next){
  console.log("Start");
  next();
});

//Route handler
app.get('/', function(req, res, next){
  res.send("Middle");
  next();
});

app.use('/', function(req, res){
  console.log('End');
});

app.listen(PORT,()=>{
console.log(`server is running on PORT ${PORT}`);
})