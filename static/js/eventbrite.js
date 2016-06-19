function Eventbrite () {
  this.token = "YDEYR4KNBOUCGNT3NQNW"
  this.baseUrl = "https://www.eventbriteapi.com/v3/events/search/"
  this.request = function(location, end_time) {
    today = Date.getFullYear() + "-" + (Date.getMonth() + 1) + "-" + Date.getDate() + "T"
    now = today + Date.getHours() + ":" + Date.getMinutes() + ":" + Date.getSeconds()
    url = this.baseUrl + "?sort_by=best&location.address=" + location + "&location.within=50mi&start_date.range_start=" + now + "&start_date.range_end=" + today + end_time + "&token=" + this.token
    httpGetAsync(url, printResponse)
  }

}

function printResponse(json) {
  parsed = JSON.parse(json)
  console.log(parsed)
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