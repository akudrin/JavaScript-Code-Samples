// use querySelector to find all second table cells
var cells = document.querySelectorAll('td + td');
[].forEach.call(cells, function (cell) {
  sum += parseFloat(cell.firstChild.data);
});
