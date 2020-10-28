//We can access a function that isn’t yet
//defined, if the function is defined as a
//function declaration.
//Notice that this holds only for function declarations. Function expressions and
//arrow functions aren’t part of this process
assert(
  typeof fun === "function",
  "fun is a function even though its definition isn't reached yet!"
);
assert(
  typeof myFunExp === "undefined",
  "But we cannot access function expressions"
);
assert(typeof myArrow === "undefined", "Nor arrow functions");
function fun() {}
var myFunExpr = function () {};
var myArrow = (x) => x;
