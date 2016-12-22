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
	'Abstraction', //
	'Data Reader', //
	'Data Parser', //
	'Serialized!', //
	'Data Retreiver', //
	'Data, Databases and SQL', //
	'Getting Data from a Database', //
	'Finding the Data You Want', //
	'Adding Data to a Database', //
	'Updating Data in a Database', //
	'Deleting Data from a Database', //json variation from
	'Handling Errors When Manipulating Data', //
	'Project Setup', // If a student has complete PHP and CNET - this will be in completes twice
	'Controllers', //
	'Views', //
	'Modeling and Presenting Data',
	'Adding a List Page',
	'Now You\'re Querying!',
	'Functional!',
	'Query Operators',
	'Query Builder', //json variation Query 
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
$('#csharp-total-badges').html('<h2 class="gray">C#/.Net Badges Needed to Graduate: ' + totalBadges + ' </h2>');

//clear the input field when clicked in
$('#student').on('click', function(){
	$(this).val('');
});

//get student treehouse url
var user = $("#student").val();
var studentUrl = "https://teamtreehouse.com/" + user + ".json";

//get results
$('#submit').on('click', function(event){
	event.preventDefault();

	//notify user of wait
	$('#submit').css("cursor", "wait");

	user = $('#student').val();
	studentUrl = "https://teamtreehouse.com/" + user + ".json";
	//display current user to screen
	$('#csharp-user').html('<h2 class="text-gray">Student: ' + user + ' </h2>');

  
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


		//Make a list of badges earned in one column and badges needed in 2nd column
		
		
		//primary col - open ol tag --------------------------------------------------
    var earnedListHTML = '<ol class="list-results">';

    //Loop through the array of badges in common with students earned badges and cNet track results
    $.each(common, function(i, badge) {

        //open the li tag
        earnedListHTML += '<li class="earned-badge">';
        //add h3 tag and badge name
        earnedListHTML += '<h3 class="name">' + common[i] + '</h3>';
        //close the li tag
        earnedListHTML += '</li>';

    }); //end .each loop

    //close ol tag
    earnedListHTML += '</ol>';

    //set html of the badgelist ol
    $('#badges-earned').html(earnedListHTML);


    //secondary col - open ol tag -------------------------------------------------
    var needList = '<ol class="list-results">';

    //Loop through the array of needed badges results
    $.each(notInCommon, function(i, badge) {

        //open the li tag
        needList += '<li class="need-badge">';
        //add h3 tag and badge name
        needList += '<h3 class="name">' + notInCommon[i] + '</h3>';
        //close the li tag
        needList += '</li>';

    }); //end .each loop

    //close ol tag
    needList += '</ol>';

    //set html of the badgelist ol
    $('#badges-needed').html(needList);

    //reset cursor
    $('#submit').css("cursor", "pointer");

  	}).fail(function (jqXHR) {
     var errorMessage = user + " : not a Treehouse User Id.";
     $('#student').val(errorMessage);
     $('#badges-earned').html('<p>User Not Found</p>');
     $('#badges-needed').html('<p>User Not Found</p>');
     $('#csharp-user').html('<h2 class="purple">Student not found!</h2>');

     //reset cursor
     $('#submit').css("cursor", "pointer");
   }); //end of .json call

}); //end 'Go' click



//TODOS:
	//1. get users json file

	//2. compare badge track to treehouse earned badges

	//3. display badges completed in track

	//4. display badges needed to complete track. 
















