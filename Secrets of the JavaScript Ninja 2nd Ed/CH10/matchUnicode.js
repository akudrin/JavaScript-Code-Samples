const text = "\u5FCD\u8005\u30D1\u30EF\u30FC";
const matchAll = /[\w\u0080-\uFFFF_-]+/;
assert(text.match(matchAll), "Our regexp matches non-ASCII!");
