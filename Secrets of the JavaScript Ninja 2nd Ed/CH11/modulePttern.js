const MouseCounterModule = (function () {
  let numClicks = 0;
  const handleClick = () => {
    alert(++numClicks);
  };
  return {
    countClicks: () => {
      document.addEventListener("click", handleClick);
    },
  };
})();
assert(
  typeof MouseCounterModule.countClicks === "function",
  "We can access module functionality"
);
assert(
  typeof MouseCounterModule.numClicks === "undefined" &&
    typeof MouseCounterModule.handleClick === "undefined",
  "We cannot access internal module details"
);
