window.addEventListener('load', init);

function init() {
 
  function toggleClasses() {
   document.querySelector('.burger-menu span').classList.toggle('active');
   document.querySelector('.header-top nav').classList.toggle('open');
  }

  document.querySelector('.burger-menu').addEventListener('click', function() {
   toggleClasses();
  });


}



// The latitude and longitude of your business / place
let position = [39.739235, -104.990250];
 
function showGoogleMaps() {
 
let latLng = new google.maps.LatLng(position[0], position[1]);
 
let mapOptions = {
zoom: 13, // initialize zoom level - the max value is 21
streetViewControl: false, // hide the yellow Street View pegman
scaleControl: true, // allow users to zoom the Google Map
mapTypeId: google.maps.MapTypeId.ROADMAP,
center: latLng
};
 
map = new google.maps.Map(document.getElementsByClassName('maps'),
mapOptions);
 
// Show the default red marker at the location
marker = new google.maps.Marker({
position: latLng,
map: map,
draggable: false,
animation: google.maps.Animation.DROP
});
}
 
google.maps.event.addDomListener(window, 'load', showGoogleMaps);