/* ================================= 
  C#/.Net Badge Scripts
==================================== */

	
var fsjsBadges = [
	'JavaScript Loops',
	'JavaScript Arrays',
	'JavaScript Objects',
	'Hello, GitHub!',
	'Working By Yourself',
	' Working on a Team', //json has an extra space
	' Create a Web Presence on GitHub', //json has an extra space
	'Get Involved in Open Source',
	'Introduction to jQuery',
	'Creating a Spoiler Revealer',
	'Creating a Simple Lightbox',
	'Creating a Mobile Drop Down Menu',
	'Creating a Password Confirmation Form',
	'Creating a Simple Drawing Application',
	'Introducing jQuery Plugins',
	'Add a Sticky Navigation Bar',
	'Using a jQuery Carousel',
	'JavaScript and the DOM',
	'Selecting Elements and Adding Events with JavaScript',
	'Traversing and Manipulating the DOM with JavaScript',
	'AJAX Concepts',
	'Programming AJAX',
	'jQuery and AJAX',
	'AJAX and APIs',
	'Introduction to Methods',
	'Constructor Functions & Prototypes', //json has an ampersand &
	'Prototypal Inheritance',
	'Quiz Practice Project',
	'Introduction to Node.js',
	'Building a Command Line Application',
	'Creating a Simple Server in Node.js',
	'Handling Routes in Node.js',
	'Creating a Basic Template Engine in Node.js',
	'HTTP Methods and Headers',
	'What is npm?',
	'Installing Packages with npm',
	'Updating and Uninstalling Packages with npm',
	'Why Version Control Matters',
	'Getting Started With Git',
	'Branches',
	'Merging',
	'Working With Remote Repositories',
	'Workflows',
	'Getting Started with Express',
	'Developing Express Apps Like a Boss',
	'The Request and Response Objects in Express',
	'Using Templates with Express',
	'Serving Static Files in Express',
	'Doing More with Express', //json variation - More
	'Welcome to Gulp.js',
	'Gulp your JavaScript workflow!', //json variation - !
	'Compile Sass with Gulp',
	'Improving your Gulp Workflow',
	'Getting Started with Angular',
	'Controllers and Scope',
	'Using Angular\'s Built-in Directives', //json variation - Built-in
	'Services in Angular',
	'Improving Our Todo App',
	'Getting Started with MongoDB', //json variation
	'Understanding MongoDB',
	'Working With Collections',
	'Go Further With Mongo ', //json variation
	'Introduction to MEAN ', //json variation
	'Going MEAN with Express',
	'Going MEAN with Angular ', //json variation
	'Setting Up MongoDB',
	'Creating and Editing Data in a MEAN App',
	'More TODO with the MEAN Stack',
	'Introducing Unit Testing',
	'Behavior Driven Development with Mocha & Chai',
	'Improving Our Tests',
	'Next Steps'
];

//get total badges in array and display
var totalBadges = fsjsBadges.length;
console.log(totalBadges);
$('#fsjs-total-badges').html('<h2 class="purple">FSJS Badges Needed to Graduate: ' + totalBadges + ' </h2>');

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

	user = $('#student').val();
	studentUrl = "https://teamtreehouse.com/" + user + ".json";

  
  $.getJSON(studentUrl, function(results){

		var count = 0;
		var completes = [];
		//create an array badges completed
		for (var i = 0; i < results.badges.length; i++) {

			//obtaining an array ALL badges a student has earned in Treehouse
			completes.push(results.badges[i].name);

		}

		//make an array of badges completed in Code Louisville Track
		var common = $.grep(completes, function(element) {
		return $.inArray(element, fsjsBadges ) !== -1;
		});

		//make an array of badges still needed in Code Louisville Track
		var notInCommon = $.grep(fsjsBadges, function(element) {
		return $.inArray(element, completes ) === -1;
		});

		//var for html location to store results
		var $earned = $('#badges-earned');

		for(i = 0; i < common.length; i++) {
			$earned.innerHTML += '<li>' + common[i] + '</li>';
		}

		//Make a list of badges earned in one column and badges needed in 2nd column
		
		
		//primary col - open ol tag --------------------------------------------------
    var fsjsEarnedList = '<ol class="list-results">';

    //Loop through the array of badges in common with students earned badges and cNet track results
    $.each(common, function(i, badge) {

        //open the li tag
        fsjsEarnedList += '<li class="earned-badge">';
        //add h3 tag and badge name
        fsjsEarnedList += '<h3 class="name">' + common[i] + '</h3>';
        //close the li tag
        fsjsEarnedList += '</li>';

    }); //end .each loop

    //close ol tag
    fsjsEarnedList += '</ol>';

    //set html of the badgelist ol
    $('#fsjs-badges-earned').html(fsjsEarnedList);


    //secondary col - open ol tag -------------------------------------------------
    var fsjsNeedList = '<ol class="list-results">';

    //Loop through the array of needed badges results
    $.each(notInCommon, function(i, badge) {

        //open the li tag
        fsjsNeedList += '<li class="need-badge">';
        //add h3 tag and badge name
        fsjsNeedList += '<h3 class="name">' + notInCommon[i] + '</h3>';
        //close the li tag
        fsjsNeedList += '</li>';

    }); //end .each loop

    //close ol tag
    fsjsNeedList += '</ol>';

    //set html of the badgelist ol
    $('#fsjs-badges-needed').html(fsjsNeedList);

  	}).fail(function (jqXHR) {
     var errorMessage = user + " : not a Treehouse User Id.";
     $('#student').val(errorMessage);
     $('#fsjs-badges-earned').html('<p>User Not Found</p>');
     $('#fsjs-badges-needed').html('<p>User Not Found</p>');
   }); //end of .json call

}); //end 'Go' click



//TODOS:
	//1. get users json file

	//2. compare badge track to treehouse earned badges

	//3. display badges completed in track

	//4. display badges needed to complete track. 
















