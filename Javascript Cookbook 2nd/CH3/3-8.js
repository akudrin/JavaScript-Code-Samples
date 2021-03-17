function partial(fn /*, args...*/) {
  var args = [].slice.call(arguments, 1);
  return function () {
    return fn.apply(this, args.concat([].slice.call(arguments)));
  };
}
function add(a, b) {
  return a + b;
}
var add100 = partial(add, 100);
console.log(add100(14)); // 114

function makeString(ldelim, rdelim, str) {
  return ldelim + str + rdelim;
}
var namedEntity = partial(makeString, '&#', ';');
console.log(namedEntity(169));
