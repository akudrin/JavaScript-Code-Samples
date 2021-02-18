var name = 'Abe Lincoln';
var re = /^(\w+)\s(\w+)$/;
var newname = name.replace(re, '$2, $1');

/*
var name = "Abe Lincoln";
var re = /^(\w+)\s(\w+)$/;
var result = re.exec(name);
var newname = result[2] + ", " + result[1];
*/
