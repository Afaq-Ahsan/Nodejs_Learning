const express = require('express');
const {
  getUser,
  registerUser,
  login,
  current,
} = require('../Controllers/userController');
const validateToken = require('../MiddleWare/validateTokenHandler');

const router = express.Router();

router.get('/',getUser);

router.post('/register', registerUser);

router.post('/login', login);

router.get('/current',validateToken, current);

module.exports = router;
