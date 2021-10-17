const fs = require('fs');
const file = './file.txt';
const moment = require('moment');
//moment().format('dddd'); // Saturday
//moment().format('MMM Do YY'); // Mar 28th 20
//moment().format(); // 2020-03-28T16:59:14+00:00
fs.watch(file, (eventType, filename) => {
  const time = moment().format('MMMM Do YYYY,h:mm:ss a');
  return console.log(`${filename} updated
${time}`);
});
