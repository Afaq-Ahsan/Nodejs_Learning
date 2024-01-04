const express = require('express');
const { getAllDBUsers, postData, fetchAll, fetchOne, FetchByID,fetchByIDAndUpdate, fetchByIDandDelete } = require('../Controllers/user');

const router = express.Router();


router.use(express.urlencoded());
router.get('/',getAllDBUsers);
router.post('/', postData);
router.get('/fetchingAll', fetchAll);
router.get('/fetchingOne', fetchOne);
router.get('/:id', FetchByID);
router.patch('/:id',fetchByIDAndUpdate);
router.delete('/:id',fetchByIDandDelete);

module.exports = router;



// app.get('/users', (req, res) => {
//   const html = `<ul>${users
//     .map((user) => `<li>${user.first_name}</li>`)  on the local storage
//     .join('')}</ul>`;
//   res.send(html);
// });


// router.get('/',getAllDBUsers);
// router.get('/', async (req, res) => {
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

// router.patch('/:id', (req, res) => {
//   const id = Number(req.params.id);

//   return res.send({ status: 'pending' });
// });

// router.delete('/:id', (req, res) => {
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

// router.post('/', postData);
// router.post('/', async (req, res) => {
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


// router.get('/fetchingAll', fetchAll);

// router.get('/fetchingOne', fetchOne);
// router.get('/fetchingAll', async (req, res) => {         //! List all the values
//   const fetchValue = await User.find();
//   console.log(fetchValue);
//   res.status(201).json(fetchValue);
// });

// router.get('/fetchingOne', async (req, res) => {
//   const fetchOneValue = await User.findOne({ firstName: 'Umar ' });     //! Find one entry using any of value

//   console.log(fetchOneValue);
//   res.status(201).send(fetchOneValue);
// });



// router.get('/:id', FetchByID);
// router.get('/:id', async(req, res) => {       //! In order to find a user from his data ID

//   const userData = await User.findById(req.params.id);
  
//   console.log(userData);

//   res.status(201).send(userData);
// });


// router.patch('/:id',fetchByIDAndUpdate)
// router.patch('/:id',async(req,res)=>{
//   const userData = await User.findByIdAndUpdate(req.params.id,{lastName:"value is changed"});
//   console.log("value is changed" , userData);
//   res.status(201).send({msg:"success"});
// })

// router.delete('/:id',fetchByIDandDelete);
// router.delete('/:id',async(req,res)=>{

//   const userData = await User.findByIdAndDelete(req.params.id);

//   console.log("value is deleted : ",userData);
                                        
//   res.status(201).send({msg:"value is deleted"});

// })


// module.exports = router;
