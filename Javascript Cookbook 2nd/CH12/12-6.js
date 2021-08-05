function concatArray(str, array) {
return array.map(function(element) {
return str + ' ' + element;
});
}
function splitArray(str,array) {
return array.map(function(element) {
var len = str.length + 1;
return element.substring(len);
});
}

(function(global) {
'use strict';
var bbArray = {};
bbArray.concatArray = function (str, array) {
return array.map(function(element) {
return str + ' ' + element;
});
};
bbArray.splitArray = function (str,array) {
return array.map(function(element) {
var len = str.length + 1;
return element.substring(len);
});
};
if (typeof module != 'undefined' && module.exports) {
module.exports = bbArray;
} else if ( typeof define === "function" && define.amd ) {
define( "bbArray", [], function() {
return bbArray;
});
} else {
global.bbArray = bbArray;
}
}(this));
