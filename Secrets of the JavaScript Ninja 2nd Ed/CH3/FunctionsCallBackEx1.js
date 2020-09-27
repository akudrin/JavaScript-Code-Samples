var text = "Domo arigato!";
report("Before defining functions");
function useless(ninjaCallback) {
  report("In useless function");
  return ninjaCallback();
}
function getText() {
  report("In getText function");
  return text;
}
report("Before making all the calls");
assert(useless(getText) === text, "The useless function works! " + text);
//Defines a callback function directly as an argument
assert(
  useless(function () {
    return text;
  }) === text,
  "The useless function works! " + text
);
report("After the calls have been made");
//We provide a callback that the JavaScript engine
//will call every time it needs to compare two items.
var values = [0, 3, 2, 5, 7, 4, 8, 1];
values.sort(function (value1, value2) {
  return value1 - value2;
});
