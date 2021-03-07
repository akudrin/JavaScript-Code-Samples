var newMap = {};
var key = 'toString';
console.log(key in newMap);
console.log(newMap[key]);
var secondMap = Object.create(null);
console.log(key in secondMap);
secondMap[key] = 'something diff';
console.log(key in secondMap);
console.log(secondMap[key]);
