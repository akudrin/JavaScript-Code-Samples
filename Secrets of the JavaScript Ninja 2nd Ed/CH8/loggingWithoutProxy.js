function Ninja() {
  let _skillLevel = 0;
  Object.defineProperty(this, "skillLevel", {
    get: () => {
      report("skillLevel get method is called");
      return _skillLevel;
    },
    set: (value) => {
      report("skillLevel set method is called");
      _skillLevel = value;
    },
  });
}
const ninja = new Ninja();
ninja.skillLevel;
ninja.skillLevel = 4;
