assert(typeof fun === "function", "We access the function");
var fun = 3;
assert(typeof fun === "number", "Now we access the number");
function fun() {}
//fun still refers to a number
assert(typeof fun === "number", "Still a number");
/*
During the actual program execution, function declarations are skipped, so the definition
of the fun function doesn’t have any impact on the value of the fun identifier.
*/
