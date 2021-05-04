import { DateTime } from 'luxon';
DateTime.now();

var dt = DateTime.local(2017, 5, 15, 8, 30);
dt = DateTime.fromObject({
  day: 22,
  hour: 12,
  zone: 'America/Los_Angeles',
  numberingSystem: 'beng',
});
DateTime.fromISO('2017-05-15'); //=> May 15, 2017 at midnight
DateTime.fromISO('2017-05-15T08:30:00'); //=> May 15, 2017 at 8:30
dt = DateTime.now();
dt.year; //=> 2017
dt.month; //=> 9
dt.day; //=> 14
dt.second; //=> 47
dt.weekday; //=> 4
dt.zoneName; //=> 'America/New_York'
dt.offset; //=> -240
dt.daysInMonth; //=> 30

var dt = DateTime.now();
dt.plus({ hours: 3, minutes: 2 });
dt.minus({ days: 7 });
dt.startOf('day');
dt.endOf('hour');

var dt = DateTime.now();
dt.set({ hour: 3 }).hour; //=> 3
