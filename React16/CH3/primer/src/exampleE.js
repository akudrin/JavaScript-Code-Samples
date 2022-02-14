let myArray = new Array();
myArray[0] = 100;
myArray[1] = "Adam";
myArray[2] = true;

console.log(`Index 0: ${myArray[0]}`);

for (let i = 0; i < myArray.length; i++) {
  console.log(`Index ${i}: ${myArray[i]}`);
}
console.log("---");
myArray.forEach((value, index) => console.log(`Index ${index}: ${value}`));

let myArrayA = [100, "Adam", true];
