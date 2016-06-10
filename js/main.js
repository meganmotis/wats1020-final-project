
$(document).on('ready', function() {
	window.onload = function() {

	var tileLayer = L.tileLayer("http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}.png", {
		maxZoom: 18, 
		attribution: 'MRLC, State of Oregon, State of Oregon DOT, State of Oregon GEO, Esri, DeLorme, HERE, TomTom, USGS, NGA, EPA, NPS, U.S. Forest Service'
		});

		mymap = L.map('mapid', {
		layers: tileLayer
		}).setView([45.891, -123.961], 12);
	
	};
});
