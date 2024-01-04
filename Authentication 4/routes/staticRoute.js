const express = require('express');
const { restrictToLoggedInUserOnly } = require('../middleWares/auth');

const router = express.Router();

router.get('/signup', (req, res) => {
  return res.render('signup');
});

router.get('/login', (req, res) => {
  return res.render('login');
});
router.get('/home', restrictToLoggedInUserOnly, (req, res) => {
  return res.render('home');
});
module.exports = router;
