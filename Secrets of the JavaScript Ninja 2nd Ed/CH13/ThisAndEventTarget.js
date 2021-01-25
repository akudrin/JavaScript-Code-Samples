const outerContainer = document.getElementById('outerContainer');
const innerContainer = document.getElementById('innerContainer');
innerContainer.addEventListener('click', function (event) {
  report('innerContainer handler');
  assert(this === innerContainer, 'This referes to the innerContainer');
  assert(
    event.target === innerContainer,
    'event.target refers to the innerContainer'
  );
});
outerContainer.addEventListener('click', function (event) {
  report('innerContainer handler');
  assert(this === outerContainer, 'This refers to the outerContainer');
  assert(
    event.target === innerContainer,
    'event.target refers to the innerContainer'
  );
});
