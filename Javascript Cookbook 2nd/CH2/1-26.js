// testing function
function testValue(element, index, array) {
  var textExp = /^[a-zA-Z]+$/;
  return textExp.test(element);
}
var elemSet = ['**', 123, 'aaa', 'abc', '-', 46, 'AAA'];
// run test
var result = elemSet.every(testValue);
console.log(result); // false
var elemSet2 = ['elephant', 'lion', 'cat', 'dog'];
result = elemSet2.every(testValue);
console.log(result); // true
