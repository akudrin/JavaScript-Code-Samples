const ninjas = ['Yoshi', 'Kuma', 'Hattori'];
const [firstNinja, secondNinja, thirdNinja] = ninjas;
assert(firstNinja === 'Yoshi', 'Yoshi is our first ninja');
assert(secondNinja === 'Kuma', 'Kuma the second one');
assert(thirdNinja === 'Hattori', 'And Hattorithe third');
const [, , third] = ninjas;
assert(third === 'Hattori', 'We can skip items');
const [first, ...remaining] = ninjas;
assert(first === 'Yoshi', 'Yoshi is again our first ninja');
assert(remaining.length === 2, 'There are two remaining ninjas');
assert(remaining[0] === 'Kuma', 'Kuma is the first remaining ninja');
assert(remaining[1] === 'Hattori', 'Hattori the second remaining ninja');