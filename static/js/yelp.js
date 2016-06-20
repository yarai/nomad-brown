//do not use this file lmao, doesn't work... use yelpQueries.js
/* require the modules needed */


/* Function for yelp call
 * ------------------------
 * set_parameters: object with params to search
 * callback: callback(error, response, body)
 */
var request_yelp = function(set_parameters, callback) {

  /* The type of request */
  var httpMethod = 'GET';

  /* The url we are using for the request */
  var url = 'http://api.yelp.com/v2/search';

  /* We can setup default parameters here */
  var default_parameters = {
    location: 'San+Francisco',
    sort: '2'
  };

  /* We set the require parameters here */
  var required_parameters = {
    oauth_consumer_key : 'lnnQgMHhqPwJ_ofQ3Td-Hw',
    oauth_token : 'LhUxV_6ECjmJhMDLW2Qadk-ZBT3nhjOe',
    oauth_nonce : n(),
    oauth_timestamp : n().toString().substr(0,10),
    oauth_signature_method : 'HMAC-SHA1',
    oauth_version : '1.0'
  };


  /* We combine all the parameters in order of importance */ 
  var parameters = _.assign(default_parameters, set_parameters, required_parameters);

  /* We set our secrets here */
  var consumerSecret = '-8t4OJdYNuBuDMPVRGeZQa2B3og';
  var tokenSecret = 'ynX4K_ikxxjp-LUorCsPgzKZflU';

  /* Then we call Yelp's Oauth 1.0a server, and it returns a signature */
  /* Note: This signature is only good for 300 seconds after the oauth_timestamp */
  var signature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret, { encodeSignature: false});

  /* We add the signature to the list of paramters */
  parameters.oauth_signature = signature;

  /* Then we turn the paramters object, to a query string */
  var paramURL = qs.stringify(parameters);

  /* Add the query string to the url */
  var apiURL = url+'?'+paramURL;

  /* Then we use request to send make the API Request */
  request(apiURL, function(error, response, body){
    return callback(error, response, body);
  });

};

const opts = {
  consumer_key: 'lnnQgMHhqPwJ_ofQ3Td-Hw',
  consumer_secret: '-8t4OJdYNuBuDMPVRGeZQa2B3og',
  token: 'LhUxV_6ECjmJhMDLW2Qadk-ZBT3nhjOe',
  token_secret: 'ynX4K_ikxxjp-LUorCsPgzKZflU',
};

function runYelp() {
  console.log(data);
}

/*
function Yelp() {
	this.key = 'lnnQgMHhqPwJ_ofQ3Td-Hw';
	this.secret = '-8t4OJdYNuBuDMPVRGeZQa2B3og';
	this.token = 'LhUxV_6ECjmJhMDLW2Qadk-ZBT3nhjOe';
	this.tokenSecret = 'ynX4K_ikxxjp-LUorCsPgzKZflU';

	// this.request = function(location, ) {
		
	// }
}
*/