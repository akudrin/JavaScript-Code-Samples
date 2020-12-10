const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((aggregated, number) => aggregated + number, 0);
assert(sum === 10, "The sum of first four numbers is 10");
