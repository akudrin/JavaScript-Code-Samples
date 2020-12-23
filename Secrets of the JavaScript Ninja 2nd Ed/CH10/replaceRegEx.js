function upper(all, letter) {
  return letter.toUpperCase();
}
assert(
  "border-bottom-width".replace(/-(\w)/g, upper) === "borderBottomWidth",
  "Camel cased a hyphenated string."
);
