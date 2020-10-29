/*
We can access the “private” variables
through functions, even if that function is
attached to another object!
*/
function Ninja() {
  var feints = 0;
  this.getFeints = function () {
    return feints;
  };
  this.feint = function () {
    feints++;
  };
}
var ninja1 = new Ninja();
ninja1.feint();
var imposter = {};
imposter.getFeints = ninja1.getFeints;
assert(
  imposter.getFeints() === 1,
  "The imposter has access to the feints variable!"
);
