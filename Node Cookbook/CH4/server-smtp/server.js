const SMTPServer = require('smtpserver').SMTPServer;
const PORT = 4321;
const server = new SMTPServer({
  disabledCommands: ['STARTTLS', 'AUTH'],
  logger: true,
});
server.on('error', (err) => {
  console.error(err);
});
server.listen(PORT);
