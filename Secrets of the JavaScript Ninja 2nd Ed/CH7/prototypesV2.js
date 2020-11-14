function Ninja() {}
Ninja.prototype.swingSword = function () {
  return true;
};
const ninja1 = Ninja();
assert(ninja1 q=== undefined, "No instance of Ninja created.");
const ninja2 = new Ninja();
assert(
  ninja2 && ninja2.swingSword && ninja2.swingSword(),
  "Instance exists and method is callable."
);
