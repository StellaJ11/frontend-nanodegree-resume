var formattedName = HTMLheaderName.replace ("%data%", "Stella Jiang");
var role = "Front-End Web Developer";
var formattedRole = HTMLheaderRole.replace ("%data%", role);
$("#header").append(formattedName);
$("#header").append(formattedRole);

var bio = {
	"name": "Stella Jiang",
	"role": "Web Developer",
	"contacts": {
		"mobile": "516-528-7859",
		"email": "stella0101kong@gmail.com",
		"location": "New York City"
	},
	"bioPic": "images/me.jpg ",
	"welcomeMessage": "Hello there!",
	"skill": "awesomeness"
};

$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contacts);
$("#main").append(bio.bioPic);
$("#main").append(bio.welcomeMessage);
$("#main").append(bio.skills);

