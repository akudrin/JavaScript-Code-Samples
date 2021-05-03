if (Modernizr.awesomeNewFeature) {
  showOffAwesomeNewFeature();
} else {
  getTheOldLameExperience();
}
Modernizr.addTest('itsTuesday', function () {
  var d = new Date();
  return d.getDay() === 2;
});
Modernizr.load({
  test: Modernizr.touch,
  yep: 'touchtest.js',
});
