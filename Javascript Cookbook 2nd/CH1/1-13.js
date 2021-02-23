var sum = 0;
// use querySelector to find all second table cells
var cells = document.querySelectorAll('td:nth-of-type(2)');
for (var i = 0; i < cells.length; i++) {
  sum += parseFloat(cells[i].firstChild.data);
}
