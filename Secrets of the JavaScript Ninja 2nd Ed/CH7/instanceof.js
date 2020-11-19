function Person() {}
function Ninja() {}
Ninja.prototype = new Person();
const ninja = new Ninja();
assert(ninja instanceof Ninja, "Our ninja is a Ninja!");
assert(ninja instanceof Person, "A ninja is also a Person. ");
