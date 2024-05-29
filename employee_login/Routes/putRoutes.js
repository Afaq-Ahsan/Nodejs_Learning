const express = require('express');
const EmployeeDB = require('../models/employeeModel');

const router = express.Router();

router.put('/:id', async (req, res) => {
  const employeeID = req.params.id;
  const body = req.body;

  console.log(employeeID);
  console.log(body);

  if (!body) {
    return res.status(400).json({ msg: 'All fields are required :(' });
  }

  const result = await EmployeeDB.findByIdAndUpdate(employeeID, {
    ...body,
    // employeeName: body.employeeName,
    // employeeDesignation: body.employeeDesignation,
    // employeeSalary: body.employeeSalary,
    // employeeStatus: body.employeeStatus,
  });

  console.log('result is : ', result);

  return res.status(200).json({ msg: 'success' });
});

module.exports = router;
