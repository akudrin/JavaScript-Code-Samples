//Using the arguments parameter
function whatever(a, b, c) {
  assert(a === 1, "The value of a is 1");
  assert(b === 2, "The value of b is 2");
  assert(c === 3, "The value of c is 3");
  assert(arguments.length === 5, "We’ve passed in 5 parameters");
  assert(arguments[0] === a, "The first argument is assigned to a");
  assert(arguments[1] === b, "The second argument is assigned to b");
  assert(arguments[2] === c, "The third argument is assigned to c");
  assert(arguments[3] === 4, "We can access the fourth argument");
  assert(arguments[4] === 5, "We can access the fifth argument");
}
whatever(1, 2, 3, 4, 5);
//Using the arguments object to perform operations on all function argument
function sum() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
assert(sum(1, 2) === 3, "We can add two numbers");
assert(sum(1, 2, 3) === 6, "We can add three numbers");
assert(sum(1, 2, 3, 4) === 10, "We can add four numbers");
//The arguments object aliases function parameters
function infiltrate(person) {
  assert(person === "gardener", "The person is a gardener");
  assert(arguments[0] === "gardener", "The first argument is a gardener");
  arguments[0] = "ninja";
  assert(person === "ninja", "The person is a ninja now");
  assert(arguments[0] === "ninja", "The first argument is a ninja");
  person = "gardener";
  assert(person === "gardener", "The person is a gardener once more");
  assert(arguments[0] === "gardener", "The first argument is a gardener again");
}
infiltrate("gardener");
//The arguments object aliases function parameters
function infiltrate(person) {
  assert(person === "gardener", "The person is a gardener");
  assert(arguments[0] === "gardener", "The first argument is a gardener");
  arguments[0] = "ninja";
  assert(person === "ninja", "The person is a ninja now");
  assert(arguments[0] === "ninja", "The first argument is a ninja");
  person = "gardener";
  assert(person === "gardener", "The person is a gardener once more");
  assert(arguments[0] === "gardener", "The first argument is a gardener again");
}
infiltrate("gardener");
