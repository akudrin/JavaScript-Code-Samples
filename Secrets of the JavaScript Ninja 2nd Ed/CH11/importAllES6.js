import * as ninjaModule from "exportES6_1";
assert(ninjaModule.message === "Hello", "We can access the imported variable");
assert(
  ninjaModule.sayHiToNinja() === "Hello Yoshi",
  "We can say hi to Yoshi from outside the module"
);
assert(
  typeof ninjaModule.ninja === "undefined",
  "But we cannot access Yoshi directly"
);
