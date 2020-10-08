//Creates cache
function isPrime(value) {
  if (!isPrime.answers) {
    isPrime.answers = {};
  }
  //Checks for cached values
  if (isPrime.answers[value] !== undefined) {
    return isPrime.answers[value];
  }

  var prime = value !== 1; // 1 is not a prime

  for (var i = 2; i < value; i++) {
    if (value % i === 0) {
      prime = false;
      break;
    }
  }
  //Stores the computed value
  return (isPrime.answers[value] = prime);
}
assert(isPrime(5), "5 is prime!");
assert(isPrime.answers[5], "The answer was cached!");
