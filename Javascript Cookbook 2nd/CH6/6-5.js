// process return
function processResponse() {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    var li = document.createElement('li');
    var txt = document.createTextNode(xmlhttp.responseText);
    li.appendChild(txt);
    var ul = document.getElementById('update');
    ul.appendChild(li);
    // prune top of list
    if (ul.childNodes.length > 10) {
      ul.removeChild(ul.firstChild);
    }
  } else if (xmlhttp.readyState == 4 && xmlhttp.status != 200) {
    console.log(xmlhttp.responseText);
  }
}
