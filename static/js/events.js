(function() {
	var location = getParameterByName("location")
	var end_time = getParameterByName("endtime")
	var travel = getParameterByName("travel")

	var eb = new Eventbrite()
	eb.request(location, end_time)
	console.log("GOT HERE")
}).call(this);
