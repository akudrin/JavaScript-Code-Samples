function Ninja() {}
const ninja = new Ninja();
assert(ninja instanceof Ninja, "Our ninja is a Ninja!");
Ninja.prototype = {};
assert(!(ninja instanceof Ninja), "The ninja is now not a Ninja!?");
