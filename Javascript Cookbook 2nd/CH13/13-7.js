if (window.Notification) { Notification.requestPermission(function() {
setTimeout(function() {
if (document.visibilityState == "hidden") {
var notification = new Notification('hey wake up', {body: 'your process is done',
                           tag: 'loader',
                           icon: 'favicon.ico'});
}else{
document.getElementById("result").innerHTML = 'your process is done';
}
}, 5000);
}); }
