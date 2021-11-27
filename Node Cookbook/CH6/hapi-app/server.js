const Hapi = require('@hapi/hapi');
const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || 'localhost';
const initialize = async () => {
  await server.start();
  console.log('Server listening on', server.info.uri);
};
const server = Hapi.server({
  port: PORT,
  host: HOSTNAME,
});
server.route({
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return 'Welcome to Hapi';
  },
});

initialize();
