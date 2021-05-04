var now = dayjs();
dayjs('2018-04-04T16:00:00.000Z');
var d = new Date(2018, 8, 18);
var day = dayjs(d);
dayjs().second(30).valueOf(); // => new Date().setSeconds(30)
dayjs().second(); // => new Date().getSeconds()
dayjs().get('year');
dayjs().get('month'); // start 0
dayjs().get('date');
dayjs().get('hour');
dayjs().get('minute');
dayjs().get('second');
dayjs().get('millisecond');
dayjs('2019-01-25').add(1, 'day').subtract(1, 'year').year(2009).toString();
dayjs().format();
// current date in ISO8601, without fraction seconds e.g. '2020-04-02T08:02:17-05:00'

dayjs('2019-01-25').format('[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]');
// 'YYYYescape 2019-01-25T00:00:00-02:00Z'

dayjs('2019-01-25').format('DD/MM/YYYY'); // '25/01/2019'
