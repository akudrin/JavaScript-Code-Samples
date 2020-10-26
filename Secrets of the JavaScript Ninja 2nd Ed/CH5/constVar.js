const firstConst = "samurai";
assert(firstConst === "samurai", "firstConst is a samurai");
try {
  firstConst = "ninja";
  fail("Shouldn't be here");
} catch (e) {
  pass("An exception has occurred");
}
assert(firstConst === "samurai", "firstConst is still a samurai!");
const secondConst = {};
secondConst.weapon = "wakizashi";
assert(secondConst.weapon === "wakizashi", "We can add new properties");
const thirdConst = [];
assert(thirdConst.length === 0, "No items in our array");
thirdConst.push("Yoshi");
assert(thirdConst.length === 1, "The array has changed");
