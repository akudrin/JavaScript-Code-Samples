const dictionary = {
  ja: {
    "Ninjas for hire": " レンタル用の忍者",
  },
  zh: {
    "Ninjas for hire": " 忍者出租",
  },
  ko: {
    "Ninjas for hire": " 고용 닌자 ",
  },
};
assert(
  dictionary.ja["Ninjas for hire"] === " レンタル用の忍者",
  "We know how to say 'Ninjas for hire' in Japanese!"
);
assert(
  typeof dictionary.ja["constructor"] === "undefined",
  dictionary.ja["constructor"]
);
