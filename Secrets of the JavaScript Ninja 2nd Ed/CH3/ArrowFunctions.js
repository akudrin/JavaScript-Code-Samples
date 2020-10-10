var greet = (name) => "Greetings " + name;
assert(greet("Oishi") === "Greetings Oishi", "Oishi is properly greeted");
var anotherGreet = function (name) {
  return "Greetings " + name;
};
assert(
  anotherGreet("Oishi") === "Greetings Oishi",
  "Again, Oishi is properly greeted"
);
