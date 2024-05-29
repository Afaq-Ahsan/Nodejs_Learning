const express = require('express');
const GrocceryItems = require('../models/itemModel');

const router = express.Router();

router.get('/getItem/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const item = await GrocceryItems.findById(id);
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

// eq (equal)
// ne (not equal)
// gt (greater than)
// gte (greater than or equal)
// lt (less than)
// lte (less than or equal)
// in (in)
// nin (not in)
// or
// and

router.get('/find', async (req, res) => {
  try {
    // const items = await GrocceryItems.find({ itemPricePerKG: { $gt: 350 } });
    // const items = await GrocceryItems.find({ itemPricePerKG: { $gt: 100, $lt: 1000 } });
    // const items = await GrocceryItems.find({ itemPricePerKG: {$in : [100,400,300]} });
    // const items = await GrocceryItems.find({ itemPricePerKG: {$nin : [100,400,300]} });
    // const items = await GrocceryItems.find().or([{buyerName : "Umar",itemTotalPrice:300}]);
    // const items = await GrocceryItems.find().and([{buyerName : "Ali",itemTotalPrice:1500}]);
    // const items = await GrocceryItems.find({buyerName : /^Mustafa/}); //name  starts with mustafa
    // const items = await GrocceryItems.find({buyerName : /Afaq$/}); //name  ends with Afaq
    // const items = await GrocceryItems.find({buyerName : /Afaq$/i}); //name ends with Afaq and case insensitive
    // const items = await GrocceryItems.find({buyerName : /.*Afaq.*/}); //present any where in the string
    const items = await GrocceryItems.find({
      itemPricePerKG: { $gt: 100, $lt: 1000 },
    }).count(); // in order to count the fetched items

    console.log('Retrieved items:', items); // Log retrieved items for debugging
    res.status(200).send({ msg: 'success', data: items });
  } catch (error) {
    console.error('Error retrieving items:', error);
    res.status(500).send({ msg: 'Error retrieving items', error });
  }
});

async function updateItem(id) {
  const result = await GrocceryItems.updateMany(
    { _id: id },
    { itemPricePerKG: 300, itemTotalPrice: 1500 }
  );

  console.log(result);
}
updateItem('664de30bd38b88fd91e4cdbf');

module.exports = router;
