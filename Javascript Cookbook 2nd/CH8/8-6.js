var httpRequest;
// ajax object
if (window.XMLHttpRequest) {
  httpRequest = new XMLHttpRequest();
}
// build request
var url = 'http://shelleystoybox.com:8080';
httpRequest.open('GET', url, true);
httpRequest.onreadystatechange = getData;
httpRequest.send();
function printData(element) {
  console.log(element.name);
}
function getData() {
  if (httpRequest.readyState == 4 && httpRequest.status == 200) {
    try {
      // Javascript function JSON.parse to parse JSON data
      var jsonObj = JSON.parse(httpRequest.responseText);
      jsonObj.list.forEach(function (element) {
        console.log(element.name);
      });
    } catch (e) {
      console.log(e.message);
    }
  }
}
