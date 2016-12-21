/* ================================= 
  C#/.Net Badge Scripts
==================================== */

//Deprated PHP Badges 
	// 'PHP Getting Started', //MAY BE DEPRECATED OR NEW TO CL PHP TRACK
	// 'PHP Data & Structure', //MAY BE DEPRECATED OR NEW TO CL PHP TRACK
	// 'PHP Datatypes', //MAY BE DEPRECATED OR NEW TO CL PHP TRACK

	
var phpBadges = [
	'Getting Familiar with HTML and CSS ', //json variation - spaces
	'HTML: The Structural Foundation of Web Pages and Applications',
	'Make It Beautiful with CSS', //json variation - spaces
	'Adding a New Web Page ', //json variation - spaces
	'PHP Conditionals',
	'PHP Loops',
	'Getting to Know PHP',
	'Unit Converter',
	'Daily Exercise Program',
	'PHP on the Web',
	'PHP Functions Basics', //json variation - plural
	'PHP Returns & Closures',
	'PHP Internal Functions',
	'PHP Includes',
	'PHP Inventory',
	'PHP Email Forms',
	'PHP Email Form Errors',
	'Data, Databases and SQL',
	'Getting Data from a Database',
	'Finding the Data You Want',
	'PHPDB Stage 1: Databases and PHP',
	'PHPDB Stage 2: Querying the Database with PHP',
	'PHPDB Stage 3: Using Relational Data', //json variation - course title uses tables - badge in json has Data
	'PHPDB Stage 4: Pagination with LIMITs',
	'PHPDB Stage 5: Search',
	'Why Object-Oriented Programming?',
	'Understanding Classes',
	'Building the Recipe',
	'Building a Collection',
	'Dependency Management',
	'Slim and Templates',
	'Contact Forms & Mailers',
	'How To Test Our Code',
	'Tools for Testers',
	'Creating Your Tests',
	'Organizing your Tests', //json variation - your
	'Acceptance Tests',
	'Test Doubles',
	'Moving Around in the Console',
	'Console Users and Permission', //json variation permission
	'Console Processes',
	'Environment and Redirection',
	'Installing Programs',
	'Why Version Control Matters',
	'Getting Started With Git',
	'Branches',
	'Merging',
	'Working With Remote Repositories',
	'Workflows'
];

//get total badges in array and display
var totalBadges = phpBadges.length;
console.log(totalBadges);
$('#php-total-badges').html('<h2 class="purple">PHP Badges Needed to Graduate: ' + totalBadges + ' </h2>');

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
		return $.inArray(element, phpBadges ) !== -1;
		});

		//make an array of badges still needed in Code Louisville Track
		var notInCommon = $.grep(phpBadges, function(element) {
		return $.inArray(element, completes ) === -1;
		});

		//var for html location to store results
		var $earned = $('#badges-earned');

		for(i = 0; i < common.length; i++) {
			$earned.innerHTML += '<li>' + common[i] + '</li>';
		}

		//Make a list of badges earned in one column and badges needed in 2nd column
		
		
		//primary col - open ol tag --------------------------------------------------
    var phpListHTML = '<ol class="list-results">';

    //Loop through the array of badges in common with students earned badges and cNet track results
    $.each(common, function(i, badge) {

        //open the li tag
        phpListHTML += '<li class="earned-badge">';
        //add h3 tag and badge name
        phpListHTML += '<h3 class="name">' + common[i] + '</h3>';
        //close the li tag
        phpListHTML += '</li>';

    }); //end .each loop

    //close ol tag
    phpListHTML += '</ol>';

    //set html of the badgelist ol
    $('#php-badges-earned').html(phpListHTML);


    //secondary col - open ol tag -------------------------------------------------
    var phpNeedList = '<ol class="list-results">';

    //Loop through the array of needed badges results
    $.each(notInCommon, function(i, badge) {

        //open the li tag
        phpNeedList += '<li class="need-badge">';
        //add h3 tag and badge name
        phpNeedList += '<h3 class="name">' + notInCommon[i] + '</h3>';
        //close the li tag
        phpNeedList += '</li>';

    }); //end .each loop

    //close ol tag
    phpNeedList += '</ol>';

    //set html of the badgelist ol
    $('#php-badges-needed').html(phpNeedList);

  	}).fail(function (jqXHR) {
     var errorMessage = user + " : not a Treehouse User Id.";
     $('#student').val(errorMessage);
     $('#php-badges-earned').html('<p>User Not Found</p>');
     $('#php-badges-needed').html('<p>User Not Found</p>');
   }); //end of .json call

}); //end 'Go' click



//TODOS:
	//1. get users json file

	//2. compare badge track to treehouse earned badges

	//3. display badges completed in track

	//4. display badges needed to complete track. 
















