function Folder() {
  return new Proxy(
    {},
    {
      get: (target, property) => {
        report("Reading " + property);
        if (!(property in target)) {
          target[property] = new Folder();
        }
        return target[property];
      },
    }
  );
}
const rootFolder = new Folder();
try {
  rootFolder.ninjasDir.firstNinjaDir.ninjaFile = "yoshi.txt";
  pass("An exception wasn’t raised");
} catch (e) {
  fail("An exception has occurred");
}
