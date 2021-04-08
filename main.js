'use strict'        
const mapbox_token = 'pk.eyJ1IjoiY2xhcmFyaXNrIiwiYSI6ImNpam4yZzRpNjAwY2J1Zm01bnlqY2lsbzUifQ.5QI6qBm9bFpKXzrUFgEm0w'


mapboxgl.accessToken = 'pk.eyJ1IjoiY2xhcmFyaXNrIiwiYSI6ImNrbjk5cGxoMjE1cHIydm4xNW55cmZ1cXgifQ.3CXp0GaWY1S7iMcPP8n9Iw';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/basic-v9',
center: [-79.5, 47.88],
zoom: 4,
});

map.on('load',function(){
	
  map.addSource('pixels',{
    'type':'geojson',
    'data': "https://github.com/clara-risk/IALE_fire_season_web_map/dur1_geojson.geojson",
  });
  
  map.addLayer({
    'id':'pixels',
    'type':'fill',
    'source':'pixels',
    'paint':{
      'fill-color':'#000000',
      'fill-outline-color':'#000000'
    }
  });



});