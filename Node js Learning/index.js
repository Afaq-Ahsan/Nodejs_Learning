// // const mul = (a,b)=>{
// // return a*b;
// // }

// // module.exports = mul;

const PizzaShop = require('./PizzaShop');
const DrinkMachine = require('./drinkMachine');

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on('Order', (size, topping) => {
  console.log(`Baking a ${size} size pizza with ${topping} Topping`);
  drinkMachine.serveDrink(size);
});

pizzaShop.order('large', 'mushroom');
// pizzaShop.order();
// pizzaShop.order();
// pizzaShop.order();
// pizzaShop.order();
pizzaShop.displayOrderNumber();


console.log("aaaaaaaaaaaaaaaaa","a".charCodeAt());
console.log("aaaaaaaaaaaaaaaaa","b".charCodeAt());


// const checking = ()=>{
//   console.log(this.name);
// }
// checking();