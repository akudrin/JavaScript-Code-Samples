let myData = new Object();
myData.name = "Adam";
myData.weather = "sunny";
console.log(`Hello ${myData.name}.`);
console.log(`Today is ${myData.weather}.`);

let myData = {
  name: "Adam",
  weather: "sunny",
};
console.log(`Hello ${myData.name}.`);
console.log(`Today is ${myData.weather}.`);

let name = "Adam";
let myData = {
  name,
  weather: "sunny",
};
console.log(`Hello ${myData.name}.`);
console.log(`Today is ${myData.weather}.`);

let myData = {
  name: "Adam",
  weather: "sunny",
  printMessages: function () {
    console.log(`Hello ${myData.name}.`);
    console.log(`Today is ${myData.weather}.`);
  },
};
myData.printMessages();

let myData = {
  name: "Adam",
  weather: "sunny",
  printMessages() {
    console.log(`Hello ${myData.name}.`);
    console.log(`Today is ${myData.weather}.`);
  },
};
myData.printMessages();

let myData = {
  name: "Adam",
  weather: "sunny",
  printMessages: () => {
    console.log(`Hello ${myData.name}.`);
    console.log(`Today is ${myData.weather}.`);
  },
};
myData.printMessages();
