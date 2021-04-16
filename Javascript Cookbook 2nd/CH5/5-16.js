window.onload = function () {
  var imgs = document.getElementsByTagName('img');
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('mouseover', getInfo, false);
    imgs[i].addEventListener('mouseout', removeWindow, false);
  }
};
function getInfo() {
  // prepare request
  if (!xmlhttp) {
    xmlhttp = new XMLHttpRequest();
  }
  var value = this.getAttribute('id');
  var url = 'photos.php?photo=' + value;
  xmlhttp.open('GET', url, true);
  xmlhttp.onreadystatechange = showWindow;
  xmlhttp.send(null);
  return false;
}
// compute position for pop up
function compPos(obj) {
  var rect = obj.getBoundingClientRect();
  var height;
  if (rect.height) {
    height = rect.height;
  } else {
    height = rect.bottom - rect.top;
  }
  var top = rect.top + height + 10;
  return [rect.left, top];
}
// process return
function showWindow() {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    var response = xmlhttp.responseText.split('#');
    var img = document.getElementById(response[0]);
    if (!img) return;
    // derive location for pop up
    var loc = compPos(img);
    var left = loc[0] + 'px';
    var top = loc[1] + 'px';
    // create pop up
    var div = document.createElement('popup');
    div.id = 'popup';
    var txt = document.createTextNode(response[1]);
    div.appendChild(txt);
    // style pop up
    div.setAttribute('class', 'popup');
    div.setAttribute('style', 'left: ' + left + '; top: ' + top);
    document.body.appendChild(div);
  }
}
function removeWindow() {
  var popup = document.getElementById('popup');
  if (popup) popup.parentNode.removeChild(popup);
  return false;
}
