report("At code start");
var ninjaDelayedPromise = new Promise((resolve, reject) => {
  report("ninjaDelayedPromise executor");
  setTimeout(() => {
    report("Resolving ninjaDelayedPromise");
    resolve("Hattori");
  }, 500);
});
assert(ninjaDelayedPromise !== null, "After creating ninjaDelayedPromise");
ninjaDelayedPromise.then((ninja) => {
  assert(
    ninja === "Hattori",
    "ninjaDelayedPromise resolve handled with Hattori"
  );
});
const ninjaImmediatePromise = new Promise((resolve, reject) => {
  report("ninjaImmediatePromise executor. Immediate resolve.");
  resolve("Yoshi");
});
ninjaImmediatePromise.then((ninja) => {
  assert(ninja === "Yoshi", "ninjaImmediatePromise resolve handled with Yoshi");
});
report("At code end");

function report(message) {
  console.log(message);
}
