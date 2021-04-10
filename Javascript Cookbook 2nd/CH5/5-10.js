// use getElementById to access the div element
var div = document.getElementById('target');
// use getElementsByTagName and the collection index
// to access the second paragraph
var oldPara = div.getElementsByTagName('p')[1]; // zero based index
// create a text node
var txt = document.createTextNode('The new paragraph will contain this text');
// create a new paragraph
var para = document.createElement('p');
// append the text to the paragraph, and insert the new para
para.appendChild(txt);
div.insertBefore(para, oldPara);
