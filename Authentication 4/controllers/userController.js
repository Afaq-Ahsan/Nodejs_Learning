const User = require('../models/userModel');
const { v4: uuidv4 } = require('uuid');
const { setUser } = require('../service/auth');

async function handleUserSignUp(req, res) {
  const { name, email, password } = req.body;

  await User.create({
    name,
    email,
    password,
  });

  return res.redirect('/home');
}
async function handleUserLogIn(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });

  if (!user) {
    console.log('user is Null');
    return res.render('login', { error: 'invalid username and password' });
  }

  const sessionId = uuidv4();

  setUser(sessionId, user);

  res.cookie('uid', sessionId);

  // return res.redirect('/home');
  return res.render('home', { customValue: user.name });
  // res.redirect(`/home?customValue=${user.name}`);
}

module.exports = { handleUserSignUp, handleUserLogIn };

