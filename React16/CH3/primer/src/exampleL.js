import sumOdd, { sumValues } from "./sum";
import { multiply, subtract } from "./operations";

let values = [10, 20, 30, 40, 50];
let total = sumValues(values);
let odds = sumOdd(values);
console.log(`Total: ${total}, Odd Total: ${odds}`);
console.log(`Multiply: ${multiply(values)}`);
console.log(`Subtract: ${subtract(1000, values)}`);
