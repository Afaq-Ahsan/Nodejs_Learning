const User = require('../Models/user');

const getAllDBUsers = async (req, res) => {
  const allDBUsers = await User.find({});

  const html = `<ul>${allDBUsers
    .map((user) => `<li>${user.firstName} - ${user.email}</li>`)
    .join('')}</ul>`;
  res.send(html);
};

const postData = async (req, res) => {
  const body = req.body;

  if (
    !body ||
    !body.firstName ||
    !body.lastName ||
    !body.email ||
    !body.class ||
    !body.gender
  ) {
    // return res.status(400).send({ msg: 'All fields are req....0' });
    return res.status(400).json({ msg: 'All fields are req....0' });
  }

  const result = await User.create({
    //!creating Database
    //creating DB
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    class: body.class,
    gender: body.gender,
  });

  console.log('result', result);

  return res.status(201).json({ msg: 'success' });
};
  
const fetchAll = async (req, res) => {
  //! List all the values
  const fetchValue = await User.find();
  console.log(fetchValue);
  res.status(201).json(fetchValue);
};

const fetchOne = async (req, res) => {
  const fetchOneValue = await User.findOne({ firstName: 'Umar ' }); //! Find one entry using any of value
  console.log(fetchOneValue);
  res.status(201).send(fetchOneValue);
};

const FetchByID = async (req, res) => {
  //! In order to find a user from his data ID

  const userData = await User.findById(req.params.id);

  console.log(userData);

  res.status(201).send(userData);
};

const fetchByIDAndUpdate = async (req, res) => {
  const userData = await User.findByIdAndUpdate(req.params.id, {
    lastName: 'value is changed',
  });
  console.log('value is changed', userData);
  res.status(201).send({ msg: 'success' });
};

const fetchByIDandDelete = async (req, res) => {
  const userData = await User.findByIdAndDelete(req.params.id);

  console.log('value is deleted : ', userData);

  res.status(201).send({ msg: 'value is deleted' });
};

module.exports = {
  getAllDBUsers,
  postData,
  fetchAll,
  fetchOne,
  FetchByID,
  fetchByIDAndUpdate,
  fetchByIDandDelete,
};
