const express = require('express');
const { handleGetStudent } = require('../controller/userController');
const { restrictToLoggedInUserOnly } = require('../middlewares/middlewareAuth');

const router = express.Router();

router.get('/addstudent', (req, res) => {
  return res.render('addstudent');
});

router.get('/studentportal',(req,res)=>{
  return res.render('studentportal');
})


router.get('/getstudent/:id', handleGetStudent);

router.get('/home', restrictToLoggedInUserOnly,(req, res) => {
  res.render('home');
});

module.exports = router;
