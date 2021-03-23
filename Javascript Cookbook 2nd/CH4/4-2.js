Tune.prototype.addCategory = function (categoryName) {
  this.category = categoryName;
};

var str = 'one';
String.prototype.exclaim = function () {
  if (this.length == 0) return this;
  return this + '!';
};

String.prototype.trim = function () {
  return this.replace(/^[\s\xA0]+/, '').replace(/[\s\xA0]+$/, '');
};

var str2 = 'two';
console.log(str.exclaim()); // one!
console.log(str2.exclaim()); // two!

function Tune(title, artist) {
  this.concatTitleArtist = function () {
    return title + ' ' + artist;
  };
}
// create instance, print out values
var happySong = new Tune('Putting on the Ritz', 'Ella Fitzgerald');
// extend the object
Tune.prototype.addCategory = function (categoryName) {
  this.category = categoryName;
};
// add category
happySong.addCategory('Swing');
// print song out to new paragraph
var song =
  'Title and artist: ' +
  happySong.concatTitleArtist() +
  ' Category: ' +
  happySong.category;
console.log(song);
