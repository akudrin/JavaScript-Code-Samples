import { message, sayHiToNinja } from "exportES6_1";
assert(message === "Hello", "We can access the imported variable");
assert(
  sayHiToNinja() === "Hello Yoshi",
  "We can say hi to Yoshi from outside the module"
);
assert(typeof ninja === "undefined", "But we cannot access Yoshi directly");
