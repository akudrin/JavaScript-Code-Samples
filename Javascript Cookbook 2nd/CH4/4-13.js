window.onload = function () {
  window.name = 'window';
  var newObject = {
    name: 'object',
    sayGreeting: function () {
      var self = this;
      alert('Now this is easy, ' + this.name);
      nestedGreeting = function (greeting) {
        alert(greeting + ' ' + self.name);
      };
      nestedGreeting('hello');
    },
  };
  newObject.sayGreeting('hello');
};
