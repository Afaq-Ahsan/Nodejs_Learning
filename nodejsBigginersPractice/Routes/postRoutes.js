const express = require('express');
const GrocceryItems = require('../models/itemModel');

const router = express.Router();

router.post('/additem', async (req, res) => {
  const { itemName, buyerName, itemWeight, itemPricePerKG, itemTotalPrice } =
    req.body;

  if (
    !itemName ||
    !buyerName ||
    !itemWeight ||
    !itemPricePerKG ||
    !itemTotalPrice
  ) {
    return res.status(400).json({ msg: 'All fields are required :(' });
  }

  try {
    const result = await GrocceryItems.create({
      itemName,
      buyerName,
      itemWeight,
      itemPricePerKG,
      itemTotalPrice,
    });
    console.log('result is : ', result);
    return res.status(201).json({ msg: 'Success', data: result });
  } catch (error) {
    console.error('Error creating item:', error);
    return res.status(500).json({ msg: 'Error creating item', error });
  }
});

module.exports = router;
