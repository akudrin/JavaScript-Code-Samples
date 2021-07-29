var fs = require('fs');
fs.readFile('main.txt', {encoding: 'utf8'},function(err,data) {
if (err) {
console.log("Error: Could not open file for reading\n");
} else {
console.log(data);
}
});var fs = require('fs');
fs.readFile('main.txt', {encoding: 'utf8'},function(err,data) {
if (err) {
console.log("Error: Could not open file for reading\n");
} else {
console.log(data);
}
});

var fs = require('fs');
var buf = "I'm going to write this text to a file\n";
fs.writeFile('main2.txt', buf, function(err) {
if (err) {console.log(err);
} else {
console.log("wrote text to file");
}
});

var fs = require('fs');
var buf = "I'm going to add this text to a file";
fs.appendFile('main2.txt', buf, function(err) {
if (err) {
console.log(err);
} else {
console.log("appended text to file");
}
});
