function myFunc(name) {
  let myLocalVar = "sunny";
  let innerFunction = function () {
    return "Hello " + name + ". Today is " + myLocalVar + ".";
  };
  return innerFunction();
}
console.log(myFunc("Adam"));

function messageFunction(weather) {
  let message = `It is ${weather} today`;
  console.log(message);
}
messageFunction("raining");

let name = "Adam";
if (name === "Adam") {
  console.log("Name is Adam");
} else if (name === "Jacqui") {
  console.log("Name is Jacqui");
} else {
  console.log("Name is neither Adam or Jacqui");
}
switch (name) {
  case "Adam":
    console.log("Name is Adam");
    break;
  case "Jacqui":
    console.log("Name is Jacqui");
    break;
  default:
    console.log("Name is neither Adam or Jacqui");
    break;
}

let firstVal = 5;
let secondVal = "5";
if (firstVal == secondVal) {
  console.log("They are the same");
} else {
  console.log("They are NOT the same");
}

if (firstVal === secondVal) {
  console.log("They are the same");
} else {
  console.log("They are NOT the same");
}

let myData1 = 5 + 5;
let myData2 = 5 + "5";
console.log("Result 1: " + myData1);
console.log("Result 2: " + myData2);

let myData1 = (5).toString() + String(5);
console.log("Result: " + myData1);
