const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema(
  {
    employeeName: {
      type: String,
      required: true,
    },

    employeeDesignation: {
      type: String,
      required: true,
    },

    employeeSalary: {
      type: String,
      required: true,
    },
    employeeStatus: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const EmployeeDB = mongoose.model('employee', employeeSchema);

module.exports = EmployeeDB;
