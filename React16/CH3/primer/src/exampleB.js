console.log("Hello");
console.log("Apples");
console.log("This is a statement");
console.log("This is also a statement");

const myFunc = function () {
  console.log("This statement is inside the function");
};
console.log("This statement is outside the function");
myFunc();

function myFuncArgs(name, weather = "raining", ...extraArgs) {
  console.log("Hello " + name + ".");
  console.log("It is " + weather + " today.");
  for (let i = 0; i < extraArgs.length; i++) {
    console.log("Extra Arg: " + extraArgs[i]);
  }
}
myFuncArgs("Adam", "sunny");
myFuncArgs("John");
myFuncArgs("Adam", "sunny", "one", "two", "three");

const myFuncA = (nameFunction) => "Hello " + nameFunction() + ".";
const printName = (nameFunction, printFunction) =>
  printFunction(myFuncA(nameFunction));
printName(function () {
  return "Adam";
}, console.log);
