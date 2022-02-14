import { asyncAdd } from "./async";
let values = [10, 20, 30, 40, 50];
let total = asyncAdd(values);
console.log(`Main Total: ${total}`);
