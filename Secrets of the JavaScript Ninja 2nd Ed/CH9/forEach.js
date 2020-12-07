const ninjas = ["Yagyu", "Kuma", "Hattori"];
//for loop
for (let i = 0; i < ninjas.length; i++) {
  assert(ninjas[i] !== null, ninjas[i]);
}
//forEach method
ninjas.forEach((ninja) => {
  assert(ninja !== null, ninja);
});
