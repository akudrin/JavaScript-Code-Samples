const request = require('request');

const url = 'API_LINK_GOES_HERE';

request({ url: url }, (error, response) => {
  console.log(response);
  const data = JSON.parse(response.body);
  console.log(data.current);
});
