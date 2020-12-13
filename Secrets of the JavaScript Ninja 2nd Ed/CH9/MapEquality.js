const map = new Map();
const currentLocation = location.href;
const firstLink = new URL(currentLocation);
const secondLink = new URL(currentLocation);
map.set(firstLink, { description: "firstLink" });
map.set(secondLink, { description: "secondLink" });
assert(map.get(firstLink).description === "firstLink", "First link mapping");
assert(map.get(secondLink).description === "secondLink", "Second link mapping");
assert(map.size === 2, "There are two mappings");
