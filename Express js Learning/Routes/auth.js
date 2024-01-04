const { Router } = require('express');

const User = require('../DataBase/schema/User.js');
const hashPassword = require('../utils/helper.js');

const router = Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(email,password);
  if (!email || !password) return res.send(400);
  const userDB = await User.findOne({ email });
  if (!userDB) return res.send(401);

  const isValid = hashPassword.comparePassword(password,userDB.password);
  console.log("isValid : ",isValid);
  if(isValid){
    console.log("authentication successful");
    req.session.user = userDB;
    return res.send(200);
  }else{
    console.log("authentication unSuccessful");
    return res.send(401);

    
  }
  // if (userName && Password) {
  //   if (req.session.user) {
  //     res.send(req.session.user);
  //   } else {
  //     req.session.user = {
  //       userName,
  //     };
  //     res.send(req.session);
  //   }
  // } else {
  //   res.send(400);
  // }
});

router.post('/register', async (req, res) => {
  const { email } = req.body;
  // console.log('user name : ', userName);
  console.log('password : ', req.body.password);
  console.log('email : ', email);

  const userDB = await User.findOne({ email });

  if (userDB) {
    res.status(400).send({ msg: 'user already exist' });
  } else {
    const password = hashPassword.hashPassword(req.body.password);
    console.log(password);
    const newUser = await User.create({ password, email });
    res.send(201);
  }
});

module.exports = router;
