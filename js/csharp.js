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

//clear the input field when clicked in
$('#student').on('click', function(){
	$(this).val('');
});

//get student treehouse url
var user = $("#student").val();
var studentUrl = "https://teamtreehouse.com/" + user + ".json";
console.log(user);
console.log(studentUrl);


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
			completes.push(results.badges[i].name);
		}

		//compare completed badges to track badges
		var common = $.grep(completes, function(element) {
		return $.inArray(element, netBadges ) !== -1;
		});

		console.log(common);

		console.log(completes.length);
		console.log(completes);

  });

}); //end 'Go' click



//TODOS:
	//1. get users json file

	//2. compare badge track to treehouse earned badges

	//3. display badges completed in track

	//4. display badges needed to complete track. 
















