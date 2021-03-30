window.onload = function () {
  window.name = 'window';
  var newObject = {
    name: 'object',
    sayGreeting: function () {
      alert('Now this is easy, ' + this.name);
      nestedGreeting = function (greeting) {
        alert(greeting + ' ' + this.name);
      }.bind(this);
      nestedGreeting('hello');
    },
  };
  newObject.sayGreeting('hello');
};
