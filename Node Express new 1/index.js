const express = require('express');
const { connectMongoDB } = require('./connection');
const userRouter = require('./Routes/userRoutes');
const { logReqRes } = require('./MiddleWares/index');

const app = express();
const PORT = 8000;

connectMongoDB('mongodb://localhost:27017/StudentDB');

app.use(express.urlencoded());
app.use(logReqRes('./log.txt'));
app.use('/users', userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// app.use((req, res, next) => {
//   console.log('hi my name is afaq ahsan !');
//   next();
// });


//! DataBase connectivity with mongoDB

//! 1. schema define the structure
//! 2. Schema Model
//! 3. Using model we do CRUD operations
//! 4. create db

// mongoose
//   .connect('mongodb://localhost:27017/StudentDB')
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.log('error', err));

// // DB Schema
// const userSchema = new mongoose.Schema(
//   {
//     firstName: {
//       type: String,
//       required: true,
//     },
//     lastName: {
//       type: String,
//       required: false,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     class: {
//       type: String,
//     },
//     gender: {
//       type: String,
//     },
//   },
//   { timestamps: true } //in order to set created at timestamp on each data entry.
// );

// // DB Model
// const User = mongoose.model('user', userSchema);

//!Routes

//! we can also within the same block who have the same url
// app
//   .route('/api/users/:id')
//   .get((req, res) => {
//     const id = Number(req.params.id);

//     const user = users.find((user) => user.id === id);
//     return res.send(user);
//   })
//   .patch((req, res) => {
//     const id = Number(req.params.id);

//     return res.send({ status: 'pending' });
//   })
//   .delete((req, res) => {
//     const id = Number(req.params.id);

//     return res.send({ status: 'pending' });
//   });

// Middleware

// Middleware is such a thing which will first call on each api call like a person send get request first it goes to the middleware and
// then go to its actual calling address

// app.use((req, res, next) => {
//   fs.appendFile(
//     'log.txt',
//     `${Date.now()} : ${req.method} : ${req.path}`,
//     (err, data) => {
//       next();
//     }
//   );
// });

// app.get('/api/users', (req, res) => {
//   res.setHeader('my-Name', 'Afaq Ahsan'); //custom header
//   return res.send(users);
// });

// // app.get('/users', (req, res) => {
// //   const html = `<ul>${users
// //     .map((user) => `<li>${user.first_name}</li>`)  on the local storage
// //     .join('')}</ul>`;
// //   res.send(html);
// // });

// app.get('/users', async (req, res) => {
//   //fetch from the db

//   const allDBUsers = await User.find({});

//   const html = `<ul>${allDBUsers
//     .map((user) => `<li>${user.firstName} - ${user.email}</li>`)
//     .join('')}</ul>`;
//   res.send(html);
// });

// app.post('api/users', (req, res) => {
//   return res.send({ status: 'pending' });
// });

// app.get('/api/users/:id', (req, res) => {
//   const id = Number(req.params.id);

//   const user = users.find((user) => user.id === id);
//   return res.send(user);
// });

// app.patch('api/users/:id', (req, res) => {
//   const id = Number(req.params.id);

//   return res.send({ status: 'pending' });
// });

// app.delete('api/users/:id', (req, res) => {
//   const id = Number(req.params.id);

//   return res.send({ status: 'pending' });
// });

// app.post('/api/users', (req, res) => {
//   const body = req.body;
//   users.push({ id: users.length + 1, ...body });

//   fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
//     return res.json({ status: 'Success', id: users.length });
//   });

//   console.log('Data is : ', body);
// });
// app.post('/api/users', async (req, res) => {
//   const body = req.body;

//   if (
//     !body ||
//     !body.firstName ||
//     !body.lastName ||
//     !body.email ||
//     !body.class ||
//     !body.gender
//   ) {
//     // return res.status(400).send({ msg: 'All fields are req....0' });
//     return res.status(400).json({ msg: 'All fields are req....0' });
//   }

//   const result = await User.create({           //!creating Database
//     //creating DB
//     firstName: body.firstName,
//     lastName: body.lastName,
//     email: body.email,
//     class: body.class,
//     gender: body.gender,
//   });

//   console.log('result', result);

//   return res.status(201).json({ msg: 'success' });
// });

// app.get('/api/fetching', async (req, res) => {         //! List all the values
//   const fetchValue = await User.find();
//   console.log(fetchValue);
//   res.status(201).json(fetchValue);
// });

// app.get('/api/fetchingOne', async (req, res) => {
//   const fetchOneValue = await User.findOne({ firstName: 'Umar ' });     //! Find one entry using any of value

//   console.log(fetchOneValue);
//   res.status(201).send(fetchOneValue);
// });

// app.get('/api/users/:id', async(req, res) => {       //! In order to find a user from his data ID

//   const userData = await User.findById(req.params.id);

//   console.log(userData);

//   res.status(201).send(userData);
// });

// app.patch('/api/users/:id',async(req,res)=>{
//   const userData = await User.findByIdAndUpdate(req.params.id,{lastName:"value is changed"});
//   console.log("value is changed" , userData);
//   res.status(201).send({msg:"success"});
// })

// app.delete('/api/users/:id',async(req,res)=>{

//   const userData = await User.findByIdAndDelete(req.params.id);

//   console.log("value is deleted : ",userData);

//   res.status(201).send({msg:"value is deleted"});

// })

// app.use('/user', userRouter); // any request like /user then it will be forwarded as userRouter

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
