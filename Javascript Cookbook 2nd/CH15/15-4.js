var request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (this.readyState == 4) {
    console.log(this.status);
    if (this.status == 200) {
      document.getElementById('result').innerHTML = this.responseText;
    }
  }
};
request.open('GET', 'http://burningbird.net:8080/');
request.withCredentials = true;
request.send(null);

var http = require('http');
var Cookies = require('cookies');
var server = http.createServer(function (req, res) {
  // Set CORS headers
  res.setHeader('Content-type', 'text/plain');
  res.setHeader('Access-Control-Allow-Origin', 'http://somedomain.com');
  res.setHeader('Access-Control-Allow-Credentials', true);
  var cookies = new Cookies(req, res);
  cookies.set('apple', 'red');
  res.writeHead(200);
  res.end('Hello cross-domain');
});
server.listen(8080);
