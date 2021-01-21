const outerContainer = document.getElementById('outerContainer');
const innerContainer = document.getElementById('innerContainer');
document.addEventListener('click', () => {
  report('Document click');
});
outerContainer.addEventListener(
  'click',
  () => {
    report('Outer container click');
  },
  true
);
innerContainer.addEventListener(
  'click',
  () => {
    report('Inner container click');
  },
  false
);
