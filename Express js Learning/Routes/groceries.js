const { Router } = require('express');

const router = Router();

const groceryList = [
  { Item: 'Apple', Quantity: '1 KG' },
  { Item: 'Banana', Quantity: '1 Dozen' },
  { Item: 'Oranges', Quantity: '1 Dozen' },
];

router.use((req, res, next) => {
  if (req.session.user) next();
  else res.send(401);
});

// router.get('/groceries', (req, res) => {
router.get('/', (req, res) => {
  res.cookie('visited', true, {
    maxAge: 60000,
  });

  res.send(groceryList);
});

// router.get('/groceries/:item', (req, res) => {
router.get('/:item', (req, res) => {
  console.log(' request.cookies ', req.cookies);
  // console.log(req.params.item);

  const { item } = req.params;

  const groceryItem = groceryList.find((g) => g.Item === item);

  // console.log('groceryItem : ', groceryItem);
  res.send(groceryItem);
});

// router.post('/groceries', (req, res) => {
router.post('/', (req, res) => {
  // console.log(req.body);
  groceryList.push(req.body);
  res.send(201);
});

router.get('/shopping/cart', (req, res) => {
  const { cart } = req.session;

  if (!cart) {
    res.send("you donn't have any session");
  } else {
    res.send(cart);
  }
});

router.post('/shopping/cart/item', (req, res) => {
  const { item, quantity } = req.body;
  const cartItem = { item, quantity };
  // console.log('Cart item is : ', cartItem);
  // res.send(req.session);
  // res.send(req.sessionID);

  const { cart } = req.session; //undefined

  //  console.log(req.session);
  //  console.log("Cart is : " , cart);

  if (cart) {
    // const {items} = cart;
    req.session.cart.items.push(cartItem);
    console.log("req.session.cart : ",req.session.cart);              // | BOTH ARE SAME
    console.log("req.session.cart.items : ",req.session.cart.items);  // |

    console.log('First');
  } else {
    req.session.cart = {
      items: [cartItem],
    };
    console.log('Second');
  }

  res.sendStatus(201);
});

module.exports = router;
