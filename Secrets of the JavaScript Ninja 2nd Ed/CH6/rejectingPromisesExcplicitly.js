//Explicitly rejecting promises
const promise = new Promise((resolve, reject) => {
  reject("Explicitly reject a promise!");
});
promise.then(
  () => fail("Happy path, won't be called!"),
  (error) => pass("A promise was explicitly rejected!")
);

//Chaining a catch method
var promise = new Promise((resolve, reject) => {
  reject("Explicitly reject a promise!");
});
promise
  .then(() => fail("Happy path, won't be called!"))
  .catch(() => pass("Promise was also rejected"));
