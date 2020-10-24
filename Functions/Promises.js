//Promises try to fix this nesting problem of callbacks
function printString(string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(string);
      resolve();
    }, Math.floor(Math.random() * 100) + 1);
  });
}
function printAll() {
  printString("A")
    .then(() => {
      return printString("B");
    })
    .then(() => {
      return printString("C");
    });
}
printAll();

//a Promise Chain
function printAll() {
  printString("A")
    .then(() => printString("B"))
    .then(() => printString("C"));
}
printAll();

function addString(previous, current) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(previous + " " + current);
    }, Math.floor(Math.random() * 100) + 1);
  });
}
function addAll() {
  addString("", "A")
    .then((result) => {
      return addString(result, "B");
    })
    .then((result) => {
      return addString(result, "C");
    })
    .then((result) => {
      console.log(result); // Prints out " A B C"
    });
}
addAll();
