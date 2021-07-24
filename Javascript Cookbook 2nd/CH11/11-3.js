// load http module
var http = require('http');
var XMLWriter = require('xml-writer');

// create http server
http
  .createServer(function (req, res) {
    var xw = new XMLWriter();
    // start doc and root element
    xw.startDocument().startElement('resources');
    // resource
    xw.startElement('resource');
    xw.writeElement('title', 'Ecma-262 Edition 6');
    xw.writeElement(
      'url',
      'http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts'
    );
    // end resource
    xw.endElement();
    // end resources
    xw.endElement();

    res.writeHeader(200, {
      'Content-Type': 'application/xml',
      'Access-Control-Allow-Origin': '*',
    });
    res.end(xw.toString(), 'utf8');
  })
  .listen(8124);
