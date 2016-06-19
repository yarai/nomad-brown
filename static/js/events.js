function Eventbrite () {
  this.token = "YDEYR4KNBOUCGNT3NQNW"
  this.baseUrl = "https://www.eventbriteapi.com/v3/events/search/"
  this.request = function(location, end_time) {
    var date = new Date()
    today = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "T"
    now = today + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    url = this.baseUrl + "?sort_by=best&location.address=" + location + "&location.within=50mi&start_date.range_start=" + now + "&start_date.range_end=" + today + end_time + "&token=" + this.token
    httpGetAsync(url, printResponse)
  }

}

function printResponse(json) {
  parsed = JSON.parse(json)
  console.log(parsed.events)
  parsed.events.forEach(carousel) 
}

function carousel(thing, index, array) {
    console.log(thing)
    var modal = document.createElement("div")
    modal.class = "modal"
    var text = document.createTextNode(thing.name.html)
    var url = document.createElement("a")
    url.href = thing.url
    url.innerHTML = "LINK"
    modal.appendChild(text)
    modal.appendChild(url)

    document.getElementById("carousal").appendChild(modal)
  }

function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function getParam(name, url) {
  var n = url.indexOf(name) + name.length + 1
  var newUrl = url.slice(n, url.length)
  parts = newUrl.split("&")
  console.log(parts)
  return parts[0]

}

// var location = getParam("location", window.location.href)

var end_time = getParam("endtime", window.location.href)
var travel = getParam("travel", window.location.href)
// var location = "Menlo+Park"

// console.log(location)
console.log(end_time)
console.log(travel)

var eb = new Eventbrite()
eb.request("Menlo Park", decodeURIComponent(end_time) + ":00")

