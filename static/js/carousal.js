(function() {
	$("#map").hide();
	$('#carousal').slick({
		arrows: false
	});

// target elements with the "draggable" class
interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
      var textEl = event.target.querySelector('p');

      textEl && (textEl.textContent =
        'moved a distance of '
        + (Math.sqrt(event.dx * event.dx +
                     event.dy * event.dy)|0) + 'px');
    }
  });

  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  // this is used later in the resizing and gesture demos
  window.dragMoveListener = dragMoveListener;


	var map;

	function getLocation() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(showPosition);
	    } else {
	        x.innerHTML = "Geolocation is not supported by this browser.";
	    }
	}

	function initMap() {
		var chicago = {lat: 41.85, lng: -87.65};
		var indianapolis = {lat: 39.79, lng: -86.14};

		var map = new google.maps.Map(document.getElementById('map'), {
			center: chicago,
			scrollwheel: false,
			zoom: 7
		});

		var directionsDisplay = new google.maps.DirectionsRenderer({
			map: map
		});

		  // Set destination, origin and travel mode.
		  var request = {
		  	destination: indianapolis,
		  	origin: chicago,
		  	travelMode: google.maps.TravelMode.WALKING
		  };

		  // Pass the directions request to the directions service.
		  var directionsService = new google.maps.DirectionsService();
		  directionsService.route(request, function(response, status) {
		  	if (status == google.maps.DirectionsStatus.OK) {
		      // Display the route on the map.
		      directionsDisplay.setDirections(response);
		  }
		});
	}

$('#actionbutton').click(function(){
	$("#carousal").hide();
	$("#map").fadeIn();
});
}).call(this);