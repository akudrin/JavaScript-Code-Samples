// test/async.js
// this is a silly test.
const tap = require("tap");
const fs = require("fs");
tap.test("some async stuff", (childTest) => {
  fs.readdir(__dirname, (er, files) => {
    if (er) {
      throw er; // tap will handle this
    }
    childTest.match(files.join(","), /\basync\.js\b/);
    childTest.end();
  });
});

tap.test("this waits until after", (childTest) => {
  // no asserts?  no problem!
  // the lack of throwing means "success"
  childTest.end();
});

/*
//promise support
tap.test('dogs should be ok', async t => {
  const result = await doSomethingAsync()
  t.match(result, { ok: true, message: /dogs/ }, 'dogs are ok')
  // Or you can use any assertion lib you like.  as long as this
  // code doesn't throw an error, it's a pass!
})
*/
