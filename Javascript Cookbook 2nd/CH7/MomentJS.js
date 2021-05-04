var deadline = moment('October 1, 2014');
var t = moment();
var df = deadline.diff(t, 'days');
console.log(df); // 37 days

//date math
moment('2016-03-12 13:00:00').add(1, 'day').format('LLL');
('March 13, 2016 1:00 PM');
//time math
moment('2016-03-12 13:00:00').add(24, 'hours').format('LLL');
('March 13, 2016 2:00 PM');
