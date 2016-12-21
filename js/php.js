/* ================================= 
  C#/.Net Badge Scripts
==================================== */

	
var phpBadges = [
	'Getting Familiar with HTML and CSS',
	'HTML: The Structural Foundation of Web Pages and Applications',
	'Make It Beautiful With CSS',
	'Adding a New Web Page',
	'PHP Getting Started',
	'PHP Data & Structure',
	'PHP Datatypes',
	'PHP Conditionals',
	'PHP Loops',
	'Getting to Know PHP',
	'Unit Converter',
	'Daily Exercise Program',
	'PHP on the Web',
	'PHP Function Basics',
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
	'PHPDB Stage 3: Using Relational Tables',
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
	'organizing Your Tests',
	'Acceptance Tests',
	'Test Doubles',
	'Moving Around in the Console',
	'Console Users and Permissions',
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
		return $.inArray(element, phpBadges ) !== -1;
		});

		//make an array of badges still needed in Code Louisville Track
		var notInCommon = $.grep(phpBadges, function(element) {
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
    var phpListHTML = '<ol class="list-results">';

    //Loop through the array of badges in common with students earned badges and cNet track results
    $.each(common, function(i, poke) {

        //open the li tag
        phpListHTML += '<li class="earned-badge">';
        //add h3 tag and poke name
        phpListHTML += '<h3 class="name">' + common[i] + '</h3>';
        //close the li tag
        phpListHTML += '</li>';

    }); //end .each loop

    //close ul tag
    phpListHTML += '</ol>';

    //set html of the #pokemon ul
    $('#php-badges-earned').html(phpListHTML);


    //secondary col - open ol tag -------------------------------------------------
    var phpNeedList = '<ol class="list-results">';

    //Loop through the array of needed badges results
    $.each(notInCommon, function(i, poke) {

        //open the li tag
        phpNeedList += '<li class="need-badge">';
        //add h3 tag and poke name
        phpNeedList += '<h3 class="name">' + notInCommon[i] + '</h3>';
        //close the li tag
        phpNeedList += '</li>';

    }); //end .each loop

    //close ul tag
    phpNeedList += '</ol>';

    //set html of the #pokemon ul
    $('#php-badges-needed').html(phpNeedList);

  }); //end of .json call

}); //end 'Go' click



//TODOS:
	//1. get users json file

	//2. compare badge track to treehouse earned badges

	//3. display badges completed in track

	//4. display badges needed to complete track. 
















