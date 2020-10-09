//FUNCTION DECLARATIONS
unction samurai() {
  return "samurai here";
}
function ninja() {
  function hiddenNinja() {
    return "ninja here";
  }
  return hiddenNinja();
}
//FUNCTION EXPRESSIONS
//Standalone function declaration
function myFunctionDeclaration(){
    //Inner function declaration
    function innerFunction() {}
    }
    //Function expressions
    var myFunc = function(){};
    myFunc(function(){
    return function(){};
    });
    //Named function expression as part of a function call that will
    //be immediately invoked
    //immediately invoked function expression (IIFE)
    (function namedFunctionExpression () {
    })();
    //Function expressions that will be immediately invoked, as arguments
    //to unary operators
    +function(){}();
    -function(){}();
    !function(){}();
    ~function(){}();