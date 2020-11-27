const shogun = {
  name: "Yoshiaki",
  clan: "Ashikaga",
  get fullTitle() {
    return this.name + " " + this.clan;
  },
  set fullTitle(value) {
    const segments = value.split(" ");
    this.name = segments[0];
    this.clan = segments[1];
  },
};
assert(shogun.name === "Yoshiaki", "Our shogun Yoshiaki");
assert(shogun.clan === "Ashikaga", "Of clan Ashikaga");
assert(
  shogun.fullTitle === "Yoshiaki Ashikaga",
  "The full name is now Yoshiaki Ashikaga"
);
shogun.fullTitle = "Ieyasu Tokugawa";
assert(shogun.name === "Ieyasu", "Our shogun Ieyasu");
assert(shogun.clan === "Tokugawa", "Of clan Tokugawa");
assert(
  shogun.fullTitle === "Ieyasu Tokugawa",
  "The full name is now Ieyasu Tokugawa"
);
