const name = 'Yoshi';
const oldNinja = {
  name: name,
  getName: function () {
    return this.name;
  },
};
oldNinja['old' + name] = true;
assert(oldNinja.name === 'Yoshi', 'Yoshi here');
assert(typeof oldNinja.getName === 'function', 'with a method');
assert('oldYoshi' in oldNinja, 'and a dynamic property');
constnewNinja = {
  name,
  getName() {
    return this.name;
  },
  ['new' + name]: true,
};
assert(newNinja.name === 'Yoshi', 'Yoshi here, again');
assert(typeof newNinja.getName === 'function', 'with a method');
assert('newYoshi' in newNinja, 'and a dynamic property');
