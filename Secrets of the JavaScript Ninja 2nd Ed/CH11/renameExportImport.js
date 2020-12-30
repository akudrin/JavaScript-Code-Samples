//************* Greetings.js ************/
function sayHi() {
  return "Hello";
}
assert(
  typeof sayHi === "function" && typeof sayHello === "undefined",
  "Within the module we can access only sayHi"
);
export { sayHi as sayHello };
//************* main.js *****************/
import { sayHello } from "Greetings.js";
assert(
  typeof sayHi === "undefined" && typeof sayHello === "function",
  "When importing, we can only access the alias"
);

/************* Hello.js *************/
export function greet() {
  return "Hello";
}
/************* Salute.js *************/
export function greet() {
  return "Salute";
}
/************* main.js *************/
import { greet as sayHello } from "Hello.js";
import { greet as salute } from "Salute.js";
assert(typeof greet === "undefined", "We cannot access greet");
assert(
  sayHello() === "Hello" && salute() === "Salute",
  "We can access aliased identifiers!"
);
