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
	"skills": [
		"HTML", 
		"CSS", 
		"JavaScript"
	]
};

var formattedMobile = HTMLmobile.replace ("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace ("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace ("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace ("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace ("%data%", bio.contacts.location);
var formattedImage = HTMLbioPic.replace ("%data%", bio.bioPic);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace ("%data%", bio.welcomeMsg);
$("#topContacts").append(formattedMobile + formattedEmail + formattedTwitter + formattedGithub + formattedLocation);
$("#header").append(formattedImage + formattedwelcomeMsg);


if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedskills = HTMLskills.replace ("%data%", bio.skills[0]); 
	$("#skills").append(formattedskills);
	formattedskills = HTMLskills.replace ("%data%", bio.skills[1]); 
	$("#skills").append(formattedskills);
	formattedskills = HTMLskills.replace ("%data%", bio.skills[2]); 
	$("#skills").append(formattedskills);
}

var work = {
	"jobs": [
	{
		"employer": "Smartling",
		"title": "Digital Marketing Intern",
		"date": "06/15-12/15",
		"location": "New York, NY, USA",
		"description": "• Managed various social media channels: Twitter, Facebook, LinkedIn, Google+ and You-Tube; in 5 months, the number of Twitter followers has been increased by 46.8% with 1,032 new followers; the number of Twitter engagements has been increased by 480.2% and the conversion rate from social media has been increased by 715.13%"
	},
	{
		"employer": "justclickforkids.com",
		"title": "Digital Marketing Intern",
		"date": "09/14-01/15",
		"location": "Hicksville, NY, USA",
		"description": "• Analyzed traffic patterns, executed organic keyword research and conducted SEO keyword strategies to improve website traffic and increase keyword ranking using Google Analytics and Google Webmaster Tools"
	},
	{
		"employer": "Ciklum",
		"title": "Business Development Intern",
		"date": "10/14-12/14",
		"location": "New York, NY, USA",
		"description": "• Used Google Apps, Excel • and SugarCRM to conduct vital customer research; leads generated were increased by 25% in 2 months"
	},
	{
		"employer": "Hofstra University",
		"title": "Research Assistant",
		"date": "02/14-12/14",
		"location": "Hempstead, NY, USA",
		"description": "• Utilized Excel and SPSS to • conduct reliability analysis to more than 500 sets of various types of data collected from USA, China, Korea and Japan, including demographics, religious • beliefs, spiritual statuses, etc."
	}
]
};

$("#workExperience").append(HTMLworkStart);
for (job in work.jobs)  {
			var formattedEmployer = HTMLworkEmployer.replace ("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace ("%data%", work.jobs[job].title);
			var formattedworkDates = HTMLworkDates.replace ("%data%", work.jobs[job].date);
			var formattedworkLocation =  HTMLworkLocation.replace ("%data%", work.jobs[job].location);
			var formattedDescription = HTMLworkDescription.replace ("%data%", work.jobs[job].description);
			$(".work-entry").append(formattedEmployer + formattedTitle + formattedworkDates + formattedworkLocation + formattedDescription);
	}

$("#projects").append(HTMLprojectStart);




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
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"date": "2016",
			"url": "https://www.udacity.com/course/viewer#!/c-ud304"

		},
		{
		 	"title": "JavaScript Syntax",
		 	"school": "Udacity",
		 	"date": "2016",
		 	"url": "http://www.udacity.com/course/ud804"
		},
		{
			"title": "How to Use Git and GitHub",
			"school": "Udacity",
			"date": "2016",
			"url": "https://www.udacity.com/course/viewer#!/c-ud775"
		}
	]
};
	
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

