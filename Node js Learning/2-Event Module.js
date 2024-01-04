
// const eventEmitter = require("node:events");

// const emitter = new eventEmitter();
 
// emitter.on("Order-Pizza",()=>{
//   console.log("Order Received! Baking a Pizza");
// })

// emitter.emit("Order-Pizza");


//!--------------------------------------------------------

const EVENTEMITTER = require("node:events");

const emitter = new EVENTEMITTER();
            
emitter.on("PizzaOrder!",(size,topping)=>{
  console.log(`Order received❤️  Baking a ${size} Pizza with ${topping} Topping`);
})

emitter.on("PizzaCAncelled",()=>{
  console.log("Ordered Pizza is cancelled");
})


emitter.emit("PizzaOrder!","Large","Mushrooms");
emitter.emit("PizzaCAncelled");