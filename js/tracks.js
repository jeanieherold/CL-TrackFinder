$(document).ready(function() {

  var studentUrl = "https://teamtreehouse.com/jeanieherold.json"

  $.getJSON(studentUrl, function(results){
  	console.log(results);
  	console.log(results.badges);
  });


}); // end ready