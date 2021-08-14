<!DOCTYPE html>
<html>
  <head>
<style type="text/css"> #map-canvas {
width: 600px; height: 400px; margin-left: 15px;
}form {
margin: 15px;
}
</style>
<script type="text/javascript"
src="https://maps.googleapis.com/maps/api/js?key=yourkey"> </script>
<script type="text/javascript"> var map;
function initialize() { var mapOptions = {
             center: { lat: 38, lng: -90},
zoom: 5 };
map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
          document.getElementById("runit").onclick=changeMap;
       }
function changeMap() {
var long = parseFloat(document.getElementById("long").value); var lat = parseFloat(document.getElementById("lat").value);
map.panTo({lat: lat, lng: long});
return false; }
       google.maps.event.addDomListener(window, 'load', initialize);
    </script>
  </head>
  <body>
    <form >
Lat: <input type="text" id="lat" /><br /> Long: <input type="text" id="long" /><br /> <button id="runit">Map it!</button>
</form>
<div id="map-canvas"></div> </body>
</html>
