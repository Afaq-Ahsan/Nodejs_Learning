const eventEmitter = require("node:events");

class PizzaShop extends eventEmitter{
  constructor(){
    super();
    this.orderNumber = 0;
  }

  order(size,topping){
    this.orderNumber+=1;
    this.emit("Order",size,topping);
  }
  displayOrderNumber(){
    console.log("Current order number",this.orderNumber);
  }
}

module.exports = PizzaShop; 