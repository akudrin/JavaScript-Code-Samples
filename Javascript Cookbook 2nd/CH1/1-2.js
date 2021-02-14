var sentence =
  'This is one sentence. This is a sentence with a list of items:' +
  'cherries, oranges, apples, bananas. That was the list of items.';
var start = sentence.indexOf(':');
var end = sentence.indexOf('.', start + 1);
var listStr = sentence.substring(start + 1, end);
fruits = listStr.split(',');
console.log(fruits); // [' cherries', ' oranges', ' apples', ' bananas']
fruits.forEach(function (elmnt, indx, arry) {
  arry[indx] = elmnt.trim();
});
console.log(fruits);
fruits = listStr.split(/\s*,\s*/);
console.log(fruits);
fruits = sentence.substring(start + 1, end).split(',');
