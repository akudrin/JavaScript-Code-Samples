var elemArray = new Object(); // notice Object, not Array
var elem = document.forms[0].elements[0];
elemArray[elem.id] = elem.value;
Object.keys(elemArray).forEach(function (key) {
  var value = elemArray[key];
  console.log(value);
});
