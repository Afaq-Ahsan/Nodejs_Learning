const multi = require('./index');

const result = multi(5,5);

console.log(result);


(function(){
  console.log("first")
})()


// node --watch filename   {run this command in terminal}