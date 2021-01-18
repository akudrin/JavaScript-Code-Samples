const http = require('http');
const routes = require('./routes');
console.log(routes.Test);

const server = http.createServer(routes.userHandler);

server.listen(3000);
