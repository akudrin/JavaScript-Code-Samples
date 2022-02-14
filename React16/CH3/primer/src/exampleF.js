function printItems(numValue, stringValue, boolValue) {
  console.log(`Number: ${numValue}`);
  console.log(`String: ${stringValue}`);
  console.log(`Boolean: ${boolValue}`);
}
let myArray = [100, "Adam", true];
let myOtherArray = [200, "Bob", false, ...myArray];
myOtherArray.forEach((value, index) => console.log(`Index ${index}: ${value}`));
printItems(myArray[0], myArray[1], myArray[2]);
printItems(...myArray);

let products = [
  { name: "Hat", price: 24.5, stock: 10 },
  { name: "Kayak", price: 289.99, stock: 1 },
  { name: "Soccer Ball", price: 10, stock: 0 },
  { name: "Running Shoes", price: 116.5, stock: 20 },
];
let totalValue = products
  .filter((item) => item.stock > 0)
  .reduce((prev, item) => prev + item.price * item.stock, 0);
console.log(`Total value: $${totalValue.toFixed(2)}`);
