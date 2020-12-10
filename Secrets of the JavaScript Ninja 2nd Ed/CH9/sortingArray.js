const ninjas = [{ name: "Yoshi" }, { name: "Yagyu" }, { name: "Kuma" }];
ninjas.sort(function (ninja1, ninja2) {
  if (ninja1.name < ninja2.name) {
    return -1;
  }
  if (ninja1.name > ninja2.name) {
    return 1;
  }
  return 0;
});
assert(ninjas[0].name === "Kuma", "Kuma is first");
assert(ninjas[1].name === "Yagyu", "Yagyu is second");
assert(ninjas[2].name === "Yoshi", "Yoshi is third");
