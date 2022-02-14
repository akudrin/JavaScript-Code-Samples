class MyData {
  constructor() {
    this.name = "Adam";
    this.weather = "sunny";
  }
  printMessages = () => {
    console.log(`Hello ${this.name}.`);
    console.log(`Today is ${this.weather}.`);
  };
}
let myData = new MyData();
myData.printMessages();

let secondObject = {};
Object.assign(secondObject, myData);
secondObject.printMessages();

let secondObjectA = { ...myData, weather: "cloudy" };
console.log(
  `myData: ${myData.weather}, secondObjectA: ${secondObjectA.weather}`
);

const myDataA = {
  name: "Bob",
  location: {
    city: "Paris",
    country: "France",
  },
  employment: {
    title: "Manager",
    dept: "Sales",
  },
};
function printDetails(data) {
  console.log(`Name: ${data.name}, City: ${data.location.city},
    Role: ${data.employment.title}`);
}
printDetails(myDataA);
