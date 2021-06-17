var xmlhttp;
// prepare and send XHR request
function populateList() {
  var url = 'text.txt'; // change to full url to prevent caching problems
  xmlhttp.open('GET', url, true);
  xmlhttp.onreadystatechange = processResponse;
  xmlhttp.send(null);
}
// process return
function processResponse() {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    var li = document.createElement('li');
    var txt = document.createTextNode(xmlhttp.responseText);
    li.appendChild(txt);
    document.getElementById('update').appendChild(li);
    setTimeout(populateList, 15000);
  } else if (xmlhttp.readyState == 4 && xmlhttp.status != 200) {
    console.log(xmlhttp.responseText);
  }
}

window.onload = function () {
  xmlhttp = new XMLHttpRequest();
  populateList();
};
