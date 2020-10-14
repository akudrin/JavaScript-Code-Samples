//Using a constructor to set up common objects
function Ninja() {
  this.skulk = function () {
    return this;
  };
}
var ninja1 = new Ninja();
var ninja2 = new Ninja();
assert(ninja1.skulk() === ninja1, "The 1st ninja is skulking");
assert(ninja2.skulk() === ninja2, "The 2nd ninja is skulking");
//Constructors returning primitive values
function Ninja() {
  this.skulk = function () {
    return true;
  };
  return 1;
}
assert(Ninja() === 1, "Return value honored when not called as a constructor");
var ninja = new Ninja();
assert(
  typeof ninja === "object",
  "Object returned when called as a constructor"
);
assert(typeof ninja.skulk === "function", "ninja object has a skulk method");
//Constructors explicitly returning object values
var puppet = {
  rules: false,
};
function Emperor() {
  this.rules = true;
  return puppet;
}
var emperor = new Emperor();
assert(emperor === puppet, "The emperor is merely a puppet!");
assert(emperor.rules === false, "The puppet does not know how to rule!");
