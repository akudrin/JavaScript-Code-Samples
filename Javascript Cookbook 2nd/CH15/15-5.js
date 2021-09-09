var ws = require('nodejs-websocket');
var server = ws
  .createServer(function (conn) {
    // object being passed back and forth between
    // client and server
    var counter = { counter: 1, strng: '' };
    // send first communication to client
    conn.sendText(JSON.stringify(counter));
    // on response back
    conn.on('text', function (message) {
      var ct = JSON.parse(message);
      ct.counter = parseInt(ct.counter) + 1;
      if (ct.counter < 100) {
        conn.sendText(JSON.stringify(ct));
      }
    });
    conn.on('close', function (code, reason) {
      console.log('Connection closed');
    });
  })
  .listen(8001);
