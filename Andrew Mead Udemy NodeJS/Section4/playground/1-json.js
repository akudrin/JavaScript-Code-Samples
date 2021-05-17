const fs = require('fs');

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
};
const userBuffer = fs.readFileSync('user1.json');
const userJSON = userBuffer.toString();
const user1 = JSON.parse(userJSON);

user1.name = 'AK';
user1.age = 38;

console.log(user1);

const user2JSON = JSON.stringify(user1);

fs.writeFileSync('user2.json', user2JSON);

const bookJSON = JSON.stringify(book);
console.log(bookJSON);

const parsedData = JSON.parse(bookJSON);
console.log(parsedData.author);

fs.writeFileSync('1-json.json', bookJSON);
const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(dataBuffer);
console.log(dataJSON);
console.log(data.title);
