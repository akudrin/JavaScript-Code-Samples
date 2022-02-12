function messageFunction(name, weather) {
  var message = "Hello, Adam";
  if (weather === "sunny") {
    var message = "It is a nice day";
    console.log(message);
  } else {
    var message = "It is " + weather + " today";
    console.log(message);
  }
  console.log(message);
}
messageFunction("Adam", "raining");
