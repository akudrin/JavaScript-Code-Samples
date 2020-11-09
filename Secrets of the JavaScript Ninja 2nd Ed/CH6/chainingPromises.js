getJSON("data/ninjas.json")
  .then((ninjas) => getJSON(ninjas[0].missionsUrl))
  .then((missions) => getJSON(missions[0].detailsUrl))
  .then((mission) => assert(mission !== null, "Ninja mission obtained!"))
  .catch((error) => fail("An error has occurred"));
