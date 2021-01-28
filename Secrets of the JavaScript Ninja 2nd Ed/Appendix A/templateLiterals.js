const ninja = {
  name: 'Yoshi',
  action: 'subterfuge',
};
const concatMessage = 'Name: ' + ninja.name + ' ' + 'Action: ' + ninja.action;
const templateMessage = `Name: ${ninja.name} Action: ${ninja.action}`;
assert(concatMessage === templateMessage, 'Our messages match');
