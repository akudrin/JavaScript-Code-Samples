// -- Reverse the provided string str.

function reverseString(str) {
  var stringArr = []; 
  stringArr = str.split('');
  stringArr.reverse();
  var revString = stringArr.join('');
  return revString;
}

// --  Return true if the given string str is a palindrome. Otherwise, return false
// 1. using JS built in methods
function palindrome(str) {
    var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr == lowRegStr;

}

// 2. using for loop

function palindrome(str) {
 var re = /[^A-Za-z0-9]/g; // or var re = /[\W_]/g;
 str = str.toLowerCase().replace(re, '');
 var len = str.length;

 for (var i = 0; i < len/2; i++) {
   if (str[i] !== str[len - 1 - i]) { 
       return false; 
   }
 }
 return true; 
}

// -- Look at each individual word and count how many letters are in each. 
//    Then, compare the counts to determine which word has the most 
//   characters and return the length of the longest word.

function findLongestWord(str) {
  var strSplit = str.split(' ');
  var longestWord = 0;
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){ 
	longestWord = strSplit[i].length; 
     }
  }
  return longestWord;
}

// --Return the provided string with the first letter of each word 
//   capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ');
}
