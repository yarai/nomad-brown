(function() {
	function isEmpty(input) {
		return input == null || input.isEmpty;
	}

	$('#location').autoComplete({
		minChars: 2,
		source: function(term, suggest){
        term = term.toLowerCase();
        var choices = ['San Francisco', 'San Jose', 'Asp'];
        var matches = [];
        for (i=0; i<choices.length; i++)
            if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i]);
        suggest(matches);
    }});

    $('#explore').click(function(){
    	var location = $('#location').val();
    	var travel = $('#travel').val();
    	var endtime = $('#endtime').val();

    	if (isEmpty(location) || isEmpty(travel) || isEmpty(duration)) {
    		alert("Please fill in the whole form");
    	}
    });
}).call(this);
