const express = require('express');
const { handleAddStudent,handleStudentPortal } = require('../controller/userController');

const router = express.Router();

router.post('/addstudent', handleAddStudent);
router.post('/studentportal', handleStudentPortal);

module.exports = router;
