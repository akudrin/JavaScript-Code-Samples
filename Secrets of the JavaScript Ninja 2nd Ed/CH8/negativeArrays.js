function createNegativeArrayProxy(array) {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array");
  }
  return new Proxy(array, {
    get: (target, index) => {
      index = +index;
      return target[index < 0 ? target.length + index : index];
    },
    set: (target, index, val) => {
      index = +index;
      return (target[index < 0 ? target.length + index : index] = val);
    },
  });
}
const ninjas = ["Yoshi", "Kuma", "Hattori"];
const proxiedNinjas = createNegativeArrayProxy(ninjas);
assert(
  ninjas[0] === "Yoshi" && ninjas[1] === "Kuma" && ninjas[2] === "Hattori",
  "Array items accessed through positive indexes"
);
assert(
  proxiedNinjas[0] === "Yoshi" &&
    proxiedNinjas[1] === "Kuma" &&
    proxiedNinjas[2] === "Hattori",
  "Array items accessed through positive indexes on a proxy"
);
assert(
  typeof ninjas[-1] === "undefined" &&
    typeof ninjas[-2] === "undefined" &&
    typeof ninjas[-3] === "undefined",
  "Items cannot be accessed through negative indexes on an array"
);
assert(
  proxiedNinjas[-1] === "Hattori" &&
    proxiedNinjas[-2] === "Kuma" &&
    proxiedNinjas[-3] === "Yoshi",
  "But they can be accessed through negative indexes"
);
proxiedNinjas[-1] = "Hachi";
assert(
  proxiedNinjas[-1] === "Hachi" && ninjas[2] === "Hachi",
  "Items can be changed through negative indexes"
);
