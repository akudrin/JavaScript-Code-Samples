var lis = document.querySelectorAll('li:nth-child(2n+1)');
for (var i = 0; i < lis.length; i++) {
  lis[i].setAttribute('style', 'background-color: #ffeeee');
}

var lis = document.querySelectorAll('li:nth-child(odd)');
for (var i = 0; i < lis.length; i++) {
  lis[i].setAttribute('style', 'background-color: #eeeeff');
}

var parentElement = document.getElementById('thelist');
var lis = parentElement.getElementsByTagName('li');
for (var i = 0; i < lis.length; i++) {
  if (i % 2 == 0) {
    lis[i].setAttribute('style', 'background-color: #eeffee');
  }
}
