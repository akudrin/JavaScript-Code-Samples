function makeString(str, ldelim = "'", rdelim = "'") {
  ldelim = typeof ldelim !== 'undefined' ? ldelim : "'";
  rdelim = typeof rdelim !== 'undefined' ? rdelim : "'";
  return ldelim + str + rdelim;
}
console.log(makeString(169)); // "'169'"
