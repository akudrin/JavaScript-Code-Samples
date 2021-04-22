var charSet = ['**', 'bb', 'cd', '**', 'cc', '**', 'dd', '**'];
function rpl(element) {
  return element !== '**';
}
var newArray = charSet.filter(function (element) {
  return element !== '**';
});
var newArray = charSet.filter(rpl);
