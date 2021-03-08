var animals = new Array('dog', 'cat', 'seal', 'walrus', 'lion', 'cat');
// remove the element from array
animals.splice(animals.indexOf('walrus'), 1); // dog,cat,seal,lion,cat
// splice in new element
animals.splice(animals.lastIndexOf('cat'), 1, 'monkey');
// dog,cat,seal,lion,monkey
console.log(animals.toString());

var charSets = ['ab', 'bb', 'cd', 'ab', 'cc', 'ab', 'dd', 'ab'];
// replace element
while (charSets.indexOf('ab') != -1) {
  charSets.splice(charSets.indexOf('ab'), 1, '**');
}
// ["**", "bb", "cd", "**", "cc", "**", "dd", "**"]
console.log(charSets);
// delete new element
while (charSets.indexOf('**') != -1) {
  charSets.splice(charSets.indexOf('**'), 1);
}
console.log(charSets); // ["bb", "cd", "cc", "dd"]
