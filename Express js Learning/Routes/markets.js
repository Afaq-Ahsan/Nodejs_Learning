const { Router } = require('express');

const router = Router();

router.use((req, res, next) => {
  if (req.session.user) next();
  else res.send(401);
});

const superMarkets = [
  { id: 1, store: 'whole Food', miles: 0.2 },
  { id: 2, store: 'Trader Joe', miles: 2.5 },
  { id: 3, store: 'Albert Sons', miles: 2.8 },
  { id: 4, store: 'Khabib Sweets', miles: 3.5 },
  { id: 5, store: 'AlexenderMart', miles: 1.8 },
];

// ! write this query on the postman
// http://localhost:3000/api/v1/markets?miles=3
router.get('', (req, res) => {
  const { miles } = req.query;
  const parsedMiles = parseInt(miles);

  if (!isNaN(parsedMiles)) {
    const filteredStores = superMarkets.filter((s) => s.miles <= parsedMiles);
    res.send(filteredStores);
  } else {
    res.send(superMarkets);
  }

  // console.log(req.query);
  // res.send(superMarkets);
});

module.exports = router;
