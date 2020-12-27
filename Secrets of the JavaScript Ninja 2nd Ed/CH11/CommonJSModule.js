//MouseCounterModule.js
const $ = require("jQuery");
let numClicks = 0;
const handleClick = () => {
  alert(++numClicks);
};
module.exports = {
  countClicks: () => {
    $(document).on("click", handleClick);
  },
};
/*
To include our module within a different file, we can write this:
const MouseCounterModule = require("MouseCounterModule.js");
MouseCounterModule.countClicks();
*/
