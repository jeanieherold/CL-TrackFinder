$(document).ready(function() {

	var fsjsBadges = [
		'Introducing JavaScript',
		'JavaScript Numbers',
		'an imposter'
	];

  var studentUrl = "https://teamtreehouse.com/jeanieherold.json"

  $.getJSON(studentUrl, function(results){
  	// console.log(results);
  	

		for (i = 0; i < results.badges.length; i++) {
			for (var j = 0; j < fsjsBadges.length; j++) {
				if (results.badges[i].name === fsjsBadges[j]) {
					console.log(results.badges[i].name);
				}
			}
		}

  });


}); // end ready