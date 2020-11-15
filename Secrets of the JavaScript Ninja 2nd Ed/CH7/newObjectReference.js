function Ninja() {}
const ninja = new Ninja();
//Constructs a second Ninja from the first
const ninja2 = new ninja.constructor();
assert(ninja2 instanceof Ninja, "It's a Ninja!");
assert(ninja !== ninja2, "But not the same Ninja!");
