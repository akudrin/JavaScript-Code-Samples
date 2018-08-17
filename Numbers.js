Return the factorial of the provided integer


function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  
  // Recursion!!
  return num * factorialize(num - 1);
  
}
