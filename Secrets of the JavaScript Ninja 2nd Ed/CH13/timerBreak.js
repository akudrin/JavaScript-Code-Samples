const rowCount = 20000;
const divideInto = 4;
const chunkSize = rowCount / divideInto;
let iteration = 0;
const table = document.getElementsByTagName('tbody')[0];
setTimeout(function generateRows() {
  const base = chunkSize * iteration;
  for (let i = 0; i < chunkSize; i++) {
    const tr = document.createElement('tr');
    for (let t = 0; t < 6; t++) {
      const td = document.createElement('td');
      td.appendChild(
        document.createTextNode(i + base + ',' + t + ',' + iteration)
      );
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  iteration++;
  if (iteration < divideInto) setTimeout(generateRows, 0);
}, 0);
