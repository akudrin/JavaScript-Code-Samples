var redis_node = require('redis');
var client_conn = redis_node.createClient();
client_conn.on('connect', function () {
  console.log('Successfully connected');
});
client_conn.hSet('test', {
  demo2: 'example3',
  demo3: 'example4',
  demo4: 'example5',
});
client_conn.hGetAll('test', function (err, object) {
  if (err) console.log(err);
  else console.log(object);
});
