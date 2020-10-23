function printString(string) {
  setTimeout(() => {
    console.log(string);
  }, Math.floor(Math.random() * 100) + 1);
}

function printAll() {
  printString("A");
  printString("B");
  printString("C");
}
//prints in different order
printAll();

function printString(string, callback) {
  setTimeout(() => {
    console.log(string);
    callback();
  }, Math.floor(Math.random() * 100) + 1);
}
function printAllCallback() {
  printString("A", () => {
    printString("B", () => {
      printString("C", () => {});
    });
  });
}
//prints in order using callbacks
printAllCallback();
