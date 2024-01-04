const User = require('../model/userModel');
const { v4: uuidv4 } = require('uuid');
const { setUser } = require('../service/serviceAuth');

async function handleAddStudent(req, res) {
  const body = req.body;

  const result = await User.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    class: body.class,
    gender: body.gender,
  });

  console.log('result', result);

  return res.redirect('/home');
}
async function handleStudentPortal(req, res) {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    console.log('user is not found');
    return res.render('studentportal', {
      error: 'Invalid username and password',
    });
  }

  // const sessionId = uuidv4();

  const token = setUser(user);

  res.cookie('uid', token);

  return res.render('home');
}

async function handleGetStudent(req, res) {
  const _id = req.params.id;

  const user = await User.findById({ _id });

  if (!user) {
    console.log('User is NULL');
    return res.status(400).json({ msg: 'No data is available' });
  }
  console.log(user);
  res.send(user);
}

module.exports = { handleAddStudent, handleGetStudent, handleStudentPortal };
