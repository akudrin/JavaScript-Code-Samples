const pattern = /((?:ninja-)+)sword/;
const ninjas = "ninja-ninja-sword".match(pattern);
assert(ninjas.length === 2, "Only one capture was returned.");
assert(
  ninjas[1] === "ninja-ninja-",
  "Matched both words, without any extra capture."
);
