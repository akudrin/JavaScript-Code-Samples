var searchString = 'Now is the time, this is the tame';
//or var re = new RegExp('t\\w{2}e',"g");
var re = /t\w{2}e/g;
var replacement = searchString.replace(re, 'place');
console.log(replacement); // Now is the place, this is the place
