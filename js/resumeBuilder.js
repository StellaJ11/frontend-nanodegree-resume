var formattedName = HTMLheaderName.replace ("%data%", "Stella Jiang");
var role = "Front-End Web Developer";
var formattedRole = HTMLheaderRole.replace ("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var bio = {
	"name": "Stella Jiang",
	"role": "Web Developer",
	"contacts": {
		"mobile": "516-528-7859",
		"email": "stella0101kong@gmail.com",
		"twitter": "@sjiang_",
		"github": "StellaJ11",
		"location": "New York City"
	},
	"bioPic": "images/me.jpg ",
	"welcomeMsg": "Hello there!",
	"skills": "awesomeness"
};

var formattedMobile = HTMLmobile.replace ("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace ("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace ("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace ("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace ("%data%", bio.contacts.location);
var formattedImage = HTMLbioPic.replace ("%data%", bio.bioPic);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace ("%data%", bio.welcomeMsg);
var formattedskills = HTMLskills.replace ("%data%", bio.skills);
$("#topContacts").append(formattedMobile + formattedEmail + formattedTwitter + formattedGithub + formattedLocation);
$("#header").append(formattedImage + formattedwelcomeMsg);
$("#header").append(HTMLskillsStart);
$("#header").append(formattedskills);


var education = {
	"schools": [
		{
			"name": "Hofstra University",
			"location": "Hempstead, NY, USA",
			"degree": "Master",
			"major": ["Marketing"],
			"date": "2015"
		},
		{
			"name": "Hong Kong Baptist University",
			"location": "Kowloon, Hong Kong, China",
			"degree": "Bachelor",
			"major": ["Accounting"],
			"date": "2013"
		}
	], 
	"onlineCourses": [
		{
		 	"title": "JavaScript Syntax",
		 	"school": "Udacity",
		 	"date": "2016",
		 	"url": "http://www.udacity.com/course/ud804"
		}
	]
};
	

	$("#workExperience").append(HTMLworkStart);


	$("#projects").append(HTMLprojectStart);



	$("#education").append(HTMLschoolStart);
		for (school in education.schools)  {
			var formattedName = HTMLschoolName.replace ("%data%", education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace ("%data%", education.schools[school].degree);
			var formattedDates = HTMLschoolDates.replace ("%data%", education.schools[school].date);
			var formattedLocation =  HTMLschoolLocation.replace ("%data%", education.schools[school].location);
			var formattedMajor = HTMLschoolMajor.replace ("%data%", education.schools[school].major);
			$(".education-entry").append(formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor);
	}

	$("#education").append(HTMLonlineClasses);
	$("#education").append(HTMLschoolStart);
    	for (onlineCourse in education.onlineCourses) {
    		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%" , education.onlineCourses[onlineCourse].title);
		    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%" , education.onlineCourses[onlineCourse].school);
		    var formattedOnlineTitleOnlineSchool = formattedOnlineTitle + formattedOnlineSchool;
		    var formattedOnlineDates = HTMLonlineDates.replace("%data%" , education.onlineCourses[onlineCourse].date);
		    var formattedOnlineUrl = HTMLonlineURL.replace("%data%" , education.onlineCourses[onlineCourse].url);
		    $(".education-entry:last").append(formattedOnlineTitleOnlineSchool + formattedOnlineDates + formattedOnlineUrl);
    }

displayEducation();

