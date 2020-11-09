Promise.all([
  getJSON("data/ninjas.json"),
  getJSON("data/mapInfo.json"),
  getJSON("data/plan.json"),
])
  .then((results) => {
    const ninjas = results[0],
      mapInfo = results[1],
      plan = results[2];
    assert(
      ninjas !== undefined && mapInfo !== undefined && plan !== undefined,
      "The plan is ready to be set in motion!"
    );
  })
  .catch((error) => {
    fail("A problem in carrying out our plan!");
  });
