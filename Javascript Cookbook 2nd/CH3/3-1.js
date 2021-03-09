function otherFunction(x, y, z) {
  x(y, z);
}
var param = function (arg1, arg2) {
  alert(arg1 + ' ' + arg2);
};
otherFunction(param, 'Hello', 'World');

var param = function inner() {
  return typeof inner;
};
console.log(param()); // "function"
var nums = [1, 45, 2, 16, 9, 12];
var sum = 0;
for (var i = 0; i < nums.length; i++) {
  sum += nums[i];
}
console.log(sum); // 85
var nums = [1, 45, 2, 16, 9, 12];
var sum = nums.reduce(function (n1, n2) {
  return n1 + n2;
});
console.log(sum); // 85
