/*
The function context (the value of the this keyword)
can be two things: In nonstrict mode, it will be the global 
context (the window object),
whereas in strict mode, it will be undefined.
*/
function ninja() {
  return this;
}
function samurai() {
  "use strict";
  return this;
}
assert(
  ninja() === window,
  "In a 'nonstrict' ninja function, " +
    "the context is the global window object"
);
assert(
  samurai() === undefined,
  "In a 'strict' samurai function, " + "the context is undefined"
);
