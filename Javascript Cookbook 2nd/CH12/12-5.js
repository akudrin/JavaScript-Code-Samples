module.exports = function () {
return {
somedata: 'some data',
hi: function(val) {
console.log('Hello ' + val + ' from two');
}

module.exports.hi = function (val) {
console.log('hello ' + val + ' from two');
}
