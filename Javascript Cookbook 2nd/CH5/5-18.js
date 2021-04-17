function generateAlert(txt) {
  // create new text and div elements and set
  // Aria and class values and id
  var txtNd = document.createTextNode(txt);
  msg = document.createElement('div');
  msg.setAttribute('role', 'alert');
  msg.setAttribute('id', 'msg');
  // fade
  obj.fade('msg', 0, 127);
  obj.redFlash();
  msg.setAttribute('class', 'alert');
  // append text to div, div to document
  msg.appendChild(txtNd);
  document.body.appendChild(msg);
}
