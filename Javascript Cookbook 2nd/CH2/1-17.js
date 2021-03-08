var animals = new Array('dog', 'cat', 'seal', 'walrus', 'lion', 'cat');
console.log(animals.indexOf('cat')); // prints 1
console.log(animals.lastIndexOf('cat')); // prints 5

var nums = [2, 4, 19, 15, 183, 6, 7, 1, 1];
var over = nums.findIndex(function (element) {
  return element >= 100;
});
console.log(nums[over]);
