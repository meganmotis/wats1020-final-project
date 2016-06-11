
$(document).on('ready', function() {

	var tileLayer = L.tileLayer("http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}.png", {
		maxZoom: 18, 
	});
		
	mymap = L.map('mapid', {
		layers: tileLayer
		}).setView([45.891, -123.961], 12);
	
	$('#contact-form').validate({
		submitHandler: function(form) {
			form.submit();
		},
	
		rules: {
			"name": {
				required: true,
				maxlength: 128,
				lettersonly: true
			},
		
			"email": {
				required: true,
				email: true,
			},
		
			"telephone": {
				digitsonly: true,
			},
		
			"message": {
				required: true,
				minlength: 20
			}
		}
	});
});
