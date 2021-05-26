/*  const square = function (x) {
  return x * x;
};

const square = (x) => {
  return x * x;
}; 

const square =(x)=>x*x;

console.log(square(3)); */

const event = {
  name: 'Birthday',
  guestList: ['A', 'B', 'C'],
  printGuestList: function () {
    console.log('Guestlist: ' + this.name);

    this.guestList.forEach((guest) => {
      console.log(guest + ' attending ' + this.name);
    });
  },
};
