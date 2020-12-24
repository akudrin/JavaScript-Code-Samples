const pattern = /^((\w+)|(\\.))+$/;
const tests = [
  "formUpdate",
  "form\\.update\\.whatever",
  "form\\:update",
  "\\f\\o\\r\\m\\u\\p\\d\\a\\t\\e",
  "form:update",
];
for (let n = 0; n < tests.length; n++) {
  assert(pattern.test(tests[n]), tests[n] + " is a valid identifier");
}
