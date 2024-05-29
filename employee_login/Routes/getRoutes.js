const express = require('express');
const EmployeeDB = require('../models/employeeModel');

const router = express.Router();

router.get('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const item = await EmployeeDB.findById(id);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    console.log(item); // Log the found item
    res.status(200).json(item); // Send the item as JSON response
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
