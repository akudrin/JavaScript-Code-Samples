const request = require('request');

const url = 'API_LINK_GOES_HERE';

request({ url: url, json: true }, (error, response) => {
  console.log(response.body.current.weather_descriptions[0]);
  console.log('Temperature is ' + response.body.current.temperature);
  console.log('It feels like ' + response.body.current.feelslike);
});
