
import 'leaflet/dist/leaflet.css';
import './main.css';
import * as L from 'leaflet';

//L.Icon.Default.imagePath = '.';
// OR
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

var map = L.map('map', {
	layers: L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'),
	center: [46.0740,11.1476],
	zoom: 13,
}).on('click', function(e) {

	L.marker(e.latlng).addTo(map);	
});


