const express = require('express');
const EmployeeDB = require('../models/employeeModel');

const router = express.Router();

router.post('/signup', async (req, res) => {
  const employee = req.body;

  console.log(employee);

  if (!employee) {
    return res.status(400).json({ msg: 'All fields are required :(' });
  }

  const result = await EmployeeDB.create({
    employeeName: employee.employeeName,
    employeeDesignation: employee.employeeDesignation,
    employeeSalary: employee.employeeSalary,
    employeeStatus: employee.employeeStatus,
  });

  console.log('result is : ', result);

  return res.status(201).json({ msg: 'success' });
});

router.post('/login', async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({ msg: 'All fields are required :(' });
  }

  const find = EmployeeDB.findOne(body.employeeName);

  if (find) {
    res.send(find);
  } else {
    res.status(404).json({ msg: 'no entry found' });
  }
});

module.exports = router;
