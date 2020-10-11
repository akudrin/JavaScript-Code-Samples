//Tackling default parameters before ES6
//The typeof operator returns a string indicating the type of the operand.
function performAction(ninja, action) {
  action = typeof action === "undefined" ? "skulking" : action;
  return ninja + " " + action;
}
assert(
  performAction("Fuma") === "Fuma skulking",
  "The default value is used for Fuma"
);
assert(
  performAction("Yoshi") === "Yoshi skulking",
  "The default value is used for Yoshi"
);
assert(
  performAction("Hattori") === "Hattori skulking",
  "The default value is used for Hattori"
);
assert(
  performAction("Yagyu", "sneaking") === "Yagyu sneaking",
  "Yagyu can do whatever he pleases, even sneak!"
);
//Tackling default parameters in ES6
function performAction(ninja, action = "skulking") {
  return ninja + " " + action;
}
assert(
  performAction("Fuma") === "Fuma skulking",
  "The default value is used for Fuma"
);
assert(
  performAction("Yoshi") === "Yoshi skulking",
  "The default value is used for Yoshi"
);
assert(
  performAction("Hattori") === "Hattori skulking",
  "The default value is used for Hattori"
);
assert(
  performAction("Yagyu", "sneaking") === "Yagyu sneaking",
  "Yagyu can do whatever he pleases, even sneak!"
);
//Referencing previous default parameters
function performAction(
  ninja,
  action = "skulking",
  message = ninja + " " + action
) {
  return message;
}
assert(performAction("Yoshi") === "Yoshi skulking", "Yoshi is skulking");
