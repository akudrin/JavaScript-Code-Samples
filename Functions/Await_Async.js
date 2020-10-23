//Await is basically syntactic sugar for Promises
function printString(string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(string);
      resolve();
    }, Math.floor(Math.random() * 100) + 1);
  });
}
//you can’t use Await at the global level; it always needs a wrapper function
async function printAll() {
  await printString("A");
  await printString("B");
  await printString("C");
}
printAll();
