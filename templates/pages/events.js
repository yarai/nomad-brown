console.log("ho")

var location = getParameterByName("location")
var end_time = getParameterByName("endtime")
var travel = getParameterByName("travel")

var eb = Eventbrite()
eb.request(location, end_time)
console.log("GOT HERE")
