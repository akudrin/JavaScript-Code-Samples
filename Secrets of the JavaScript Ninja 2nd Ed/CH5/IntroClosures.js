var outerValue = "samurai";
var later;
function outerFunction() {
  var innerValue = "ninja";
  function innerFunction() {
    assert(outerValue === "samurai", "I can see the samurai.");
    assert(innerValue === "ninja", "I can see the ninja.");
  }
  later = innerFunction;
}
outerFunction();
later();
