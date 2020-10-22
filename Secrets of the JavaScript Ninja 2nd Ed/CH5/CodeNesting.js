var ninja = "Muneyoshi";
function skulk() {
  var action = "skulking";
  function report() {
    var reportNum = 3;
    for (var i = 0; i < reportNum; i++) {
      console.log(ninja + " " + action + " " + i);
    }
  }
  report();
}
skulk();
