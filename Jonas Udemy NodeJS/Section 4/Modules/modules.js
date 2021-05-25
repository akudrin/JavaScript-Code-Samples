console.log(arguments);
console.log(require('module').wrapper);

//module.exports
const Calc1 = require('./test-module-1');

const calc1 = new Calc1();

console.log(calc1.add(2, 5));

//exports
const Calc2 = require('./test-module-2');

const { add, multiply, devide } = require('./test-module-2');

console.log(Calc2.add(2, 5));
console.log(multiply(2, 2));

//caching
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();
