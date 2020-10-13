function skulk(name) {}
function Ninja(name) {}
//Invoked as a function
skulk("Hattori");
(function (who) {
  return who;
})("Hattori");

var ninja = {
  skulk: function () {},
};
//Invoked as a method of ninja
ninja.skulk("Hattori");
//Invoked as a constructor
ninja = new Ninja("Hattori");
//Invoked via the call method
skulk.call(ninja, "Hattori");
//Invoked via the apply method
skulk.apply(ninja, ["Hattori"]);
