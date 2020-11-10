Promise.race([
  getJSON("data/yoshi.json"),
  getJSON("data/hattori.json"),
  getJSON("data/hanzo.json"),
])
  .then((ninja) => {
    assert(ninja !== null, ninja.name + " responded first");
  })
  .catch((error) => fail("Failure!"));
