const fs = require('fs');
const http = require('http');
const url = require('url');
const replaceTemplate = require('./modules/replaceTemplate');
const slugify = require('slugify');

// FILES

// Blocking, synchronous way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);
// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written!');

// Non-blocking, asynchronous way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//   if (err) return console.log('ERROR! 💥');

//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//     console.log(data2);
//     fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//       console.log(data3);

//       fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//         console.log('Your file has been written 😁');
//       })
//     });
//   });
// });
// console.log('Will read file!');

//SERVER

const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  'utf-8'
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  'utf-8'
);

const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  'utf-8'
);
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObject = JSON.parse(data);
const slugs = dataObject.map((el) => slugify(el.productName, { lower: true }));

const server = http.createServer((req, res) => {
  const baseURL = `http://${req.headers.host}`;
  const requestURL = new URL(req.url, baseURL);
  const pathName = requestURL.pathname;
  //const query = requestURL.searchParams.get('id');

  //Overview page
  if (pathName === '/' || pathName === '/overview') {
    res.writeHead(200, {
      'Content-type': 'text/html',
    });

    const cardsHTML = dataObject
      .map((el) => replaceTemplate(tempCard, el))
      .join('');
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHTML);

    res.end(output);
    //Product page
  } else if (slugs.includes(slugify(pathName, { remove: '/' }))) {
    res.writeHead(200, {
      'Content-type': 'text/html',
    });
    const newPathName = slugify(pathName, { remove: '/' });
    let product = {};
    for (var i = 0; i < dataObject.length; i++) {
      if (
        slugify(dataObject[i].productName, { lower: true }) ===
        slugify(pathName, { remove: '/' })
      ) {
        product = dataObject[i];
      }
    }
    const output = replaceTemplate(tempProduct, product);
    res.end(output);

    //API
  } else if (pathName === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);
    //Not Found
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world',
    });
    res.end('<h1>page not found</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
});