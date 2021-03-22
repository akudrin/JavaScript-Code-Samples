Tune.prototype.addCategory = function (categoryName) {
  this.category = categoryName;
};

var str = 'one';
String.prototype.exclaim = function () {
  if (this.length == 0) return this;
  return this + '!';
};

String.prototype.trim = function () {
  return this.replace(/^[\s\xA0]+/, '').replace(/[\s\xA0]+$/, '');
};

var str2 = 'two';
console.log(str.exclaim()); // one!
console.log(str2.exclaim()); // two!
