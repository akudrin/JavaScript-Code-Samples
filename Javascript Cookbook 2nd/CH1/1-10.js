intervalId = setInterval(function () {
  x += 5;
  var left = x + 'px';
  document.getElementById('redbox').style.left = left;
}, 100);
