const fastify = require('fastify')();
const PORT = process.env.PORT || 3000;
fastify.register(require('./plugins/helloroute'));
const startServer = async () => {
  try {
    await fastify.listen(PORT);
    console.log(`server listening on
    ${fastify.server.address().port}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
startServer();
