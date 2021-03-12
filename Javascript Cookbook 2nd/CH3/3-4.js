function greetingMaker(greeting) {
  function addName(name) {
    return greeting + ' ' + name;
  }
  return addName;
}
// Now, create new partial functions
var daytimeGreeting = greetingMaker('Good Day to you');
var nightGreeting = greetingMaker('Good Evening');

// if daytime
console.log(daytimeGreeting(name));
// if night
console.log(nightGreeting(name));
