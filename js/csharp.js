/* ================================= 
  C#/.Net Badge Scripts
==================================== */

	
var netBadges = [
	'Why Version Control Matters',
	'Getting Started With Git',
	'Branches',
	'Merging',
	'Working With Remote Repositories',
	'Workflows',
	'Prepare and Plan',
	'Console I/O',
	'Perform',
	'Perfect',
	'Object-Oriented Programming',
	'Methods',
	'Inheritance',
	'Encapsulation and Arrays',
	'Encapsulation with Properties',
	'Loops and Final Touches',
	'Polymorphism',
	'System.Object',
	'Abstraction',
	'Data Reader',
	'Data Parser',
	'Serialized!',
	'Data Retriever',
	'Data, Databases and SQL',
	'Getting Data from a Database',
	'Finding the Data You Want',
	'Adding Data to a Database',
	'Updating Data in a Database',
	'Deleting Data From a Database',
	'Handling Errors When Manipulating Data',
	'Project Setup',
	'Controllers',
	'Views',
	'Modeling and Presenting Data',
	'Adding a List Page',
	'Now You\'re Querying!',
	'Functional!',
	'Query Operators',
	'Querying Builder',
	'Arrays',
	'Lists',
	'Sets and Dictionaries',
	'Introducing CRUD Applications',
	'Creating a Basic Form',
	'Improving Our Form',
	'Adding Form Validation',
	'Finishing Our CRUD Web App'
];

//get total badges in array and display
var totalBadges = netBadges.length;
console.log(totalBadges);
$('#csharp-total-badges').html('<h2 class="purple">C#/.Net Badges Needed to Graduate: ' + totalBadges + ' </h2>');

//clear the input field when clicked in
$('#student').on('click', function(){
	$(this).val('');
});

//get student treehouse url
var user = $("#student").val();
var studentUrl = "https://teamtreehouse.com/" + user + ".json";


$('#submit').on('click', function(event){
	event.preventDefault();

	user = $('#student').val();
	studentUrl = "https://teamtreehouse.com/" + user + ".json";


	console.log('here' + studentUrl);
  
  $.getJSON(studentUrl, function(results){

		var count = 0;
		var completes = [];
		//create an array badges completed
		for (var i = 0; i < results.badges.length; i++) {

			//removing the whitespace for accuracy
			// results.badges[i].name = results.badges[i].name.replace(/\s+/g, '');
			
			//obtaining an array ALL badges a student has earned in Treehouse
			completes.push(results.badges[i].name);
		}

		//make an array of badges completed in Code Louisville Track
		var common = $.grep(completes, function(element) {
		return $.inArray(element, netBadges ) !== -1;
		});

		//make an array of badges still needed in Code Louisville Track
		var notInCommon = $.grep(netBadges, function(element) {
		return $.inArray(element, completes ) === -1;
		});

		console.log(common);
		console.log(common.length);

		console.log(notInCommon);
		console.log(notInCommon.length);

		var $earned = $('#badges-earned');

		for(i = 0; i < common.length; i++) {
			$earned.innerHTML += '<li>' + common[i] + '</li>';
		}

		//Make a list of badges earned in one column and badges needed in 2nd column
		
		
		//primary col - open ol tag --------------------------------------------------
    var earnedListHTML = '<ol class="list-results">';

    //Loop through the array of badges in common with students earned badges and cNet track results
    $.each(common, function(i, poke) {

        //open the li tag
        earnedListHTML += '<li class="earned-badge">';
        //add h3 tag and poke name
        earnedListHTML += '<h3 class="name">' + common[i] + '</h3>';
        //close the li tag
        earnedListHTML += '</li>';

    }); //end .each loop

    //close ul tag
    earnedListHTML += '</ol>';

    //set html of the #pokemon ul
    $('#badges-earned').html(earnedListHTML);


    //secondary col - open ol tag -------------------------------------------------
    var needList = '<ol class="list-results">';

    //Loop through the array of needed badges results
    $.each(notInCommon, function(i, poke) {

        //open the li tag
        needList += '<li class="need-badge">';
        //add h3 tag and poke name
        needList += '<h3 class="name">' + notInCommon[i] + '</h3>';
        //close the li tag
        needList += '</li>';

    }); //end .each loop

    //close ul tag
    needList += '</ol>';

    //set html of the #pokemon ul
    $('#badges-needed').html(needList);

  }); //end of .json call

}); //end 'Go' click



//TODOS:
	//1. get users json file

	//2. compare badge track to treehouse earned badges

	//3. display badges completed in track

	//4. display badges needed to complete track. 
















