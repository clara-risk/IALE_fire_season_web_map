'use strict'        
const mapbox_token = 'pk.eyJ1IjoiY2xhcmFyaXNrIiwiYSI6ImNpam4yZzRpNjAwY2J1Zm01bnlqY2lsbzUifQ.5QI6qBm9bFpKXzrUFgEm0w'


mapboxgl.accessToken = 'pk.eyJ1IjoiY2xhcmFyaXNrIiwiYSI6ImNrbjk5cGxoMjE1cHIydm4xNW55cmZ1cXgifQ.3CXp0GaWY1S7iMcPP8n9Iw';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/basic-v9',
center: [-79.5, 47.88],
zoom: 4,
});

var dur1 = {
	{
"type": "FeatureCollection",
"name": "dur1_points",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:EPSG::3857" } },
"features": [
{ "type": "Feature", "properties": { "VALUE": 112.17578887939453 }, "geometry": { "type": "Point", "coordinates": [ -7274589.917080786079168, 8261130.4798234840855 ] } },
{ "type": "Feature", "properties": { "VALUE": 112.17578887939453 }, "geometry": { "type": "Point", "coordinates": [ -7260795.119727691635489, 8261130.4798234840855 ] } },
]
}} 
map.on('load',function(){
	
  map.addSource('pixels',{
    'type':'geojson',
    'data':dur1,
  });
  
  map.addLayer({
    'id':'pixels',
    'type':'fill',
    'source':'pixels',
    'paint':{
      'fill-color':'#1A6BC5',
      'fill-outline-color':'#000000'
    }
  });



});