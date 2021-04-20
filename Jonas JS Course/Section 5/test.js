function printForecast(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push('...' + arr[i] + '°C in ' + (i + 1) + ' days');
  }
  result.push('...');
  console.log(result.join(''));
}
printForecast([17, 21, 23]);
