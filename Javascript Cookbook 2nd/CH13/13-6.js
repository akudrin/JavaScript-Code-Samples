if (window.Notification) { Notification.requestPermission(function() {
setTimeout(function() {
var notification = new Notification('hey wake up',
 }, 5000); });
}
