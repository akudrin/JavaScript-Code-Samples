function makeLoggable(target) {
  return new Proxy(target, {
    get: (target, property) => {
      report("Reading " + property);
      return target[property];
    },
    set: (target, property, value) => {
      report("Writing value " + value + " to " + property);
      target[property] = value;
    },
  });
}
let ninja = { name: "Yoshi" };
ninja = makeLoggable(ninja);
assert(ninja.name === "Yoshi", "Our ninja Yoshi");
ninja.weapon = "sword";
