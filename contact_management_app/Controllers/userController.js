const userSchema = require('../models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()

const getUser = async (req, res) => {
  const { email } = req.body;

  console.log(email);

  const get = await userSchema.findOne({ userEmail: email }); // Assuming userEmail is the field in your schema

  console.log(get);

  res.status(200).send({ get });
};

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);

  try {
    if (!name || !email || !password) {
      res.status(400).send({ msg: 'All fields must be required' });
      return;
    }

    const existingUser = await userSchema.findOne({ userEmail:email });
    if (existingUser) {
      res.status(400).send({ msg: 'User already exists' });
      return;
    }
    //! hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Hashed password', hashedPassword);

    const user = await userSchema.create({
      userName: name,
      userEmail: email,
      userPassword: hashedPassword,
    });

    console.log('user is : ', user);
    res.status(201).send({ msg: 'User is registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: 'Error while registering user' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  console.log(password);

  if (!email || !password) {
    res.status(404).send('email and password required');
    return;
  }

  const user = await userSchema.findOne({ userEmail: email });
  console.log('User:', user);

  if (user && (await bcrypt.compare(password, user.userPassword))) {
    console.log("user matched")
    const accessToken = jwt.sign(
      {
        user: {
          name: user.userName,
          email: user.userEmail,
          id: user._id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET
    );
    // we can also add the expiration time

    res.status(200).json({ accessToken });
  } else {
    res.status(404);
    throw new Error('email and password is not valid');
  }
};


const current = async (req, res) => {
  res.json(req.user);
};

module.exports = { getUser, registerUser, login, current };
