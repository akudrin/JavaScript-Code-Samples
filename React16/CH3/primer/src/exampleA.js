function messageFunction(name, weather) {
  let message = "Hello, Adam";
  if (weather === "sunny") {
    let message = "It is a nice day";
    console.log(message);
  } else {
    let message = "It is " + weather + " today";
    console.log(message);
  }
  console.log(message);
}
messageFunction("Adam", "raining");
