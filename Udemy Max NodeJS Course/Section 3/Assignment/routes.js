//
//
const userHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url == '/') {
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write(
      '<body><form action="/create-user" method="POST"><input type="text" name="message"><button type="submit">Create User</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  if (url == '/create-user' && method == 'POST') {
    const body = [];

    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      console.log(message);
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write(
    '<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>'
  );
  res.write('</html>');
  res.end();
};
module.exports.userHandler = userHandler;
module.exports.Test = 'Hello';
