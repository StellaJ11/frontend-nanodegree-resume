var bio = {
	"name": "Stella Jiang",
	"role": "Front-End Web Developer",
	"contacts": {
		"mobile": "(516)528-7859",
		"email": "stella0101kong@gmail.com",
		"twitter": "@sjiang_",
		"twitterlink":"https://twitter.com/sjiang_",
		"github": "StellaJ11",
		"githublink":"https://github.com/StellaJ11",
		"location": "Brooklyn, NY, USA"
	},
	"bioPic": "images/me.jpg ",
	"welcomeMsg": "Hello there, welcome to my first online resume! I'm a detailed-oriented, collaborative and self-motivated digital marketer who has experiences in digital marketing and web optimization. Now I'm working on the Front-End Web Developer Nanodegree at Udacity and trying my best to be an awesome Front-End Ninja soon! ",
	"skills": [
		"HTML", 
		"CSS", 
		"JavaScript",
		"Python",
		"Web Analytics",
		"Search Engine Marketing"

	]
};

bio.display = function () {
	var formattedName = HTMLheaderName.replace ("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace ("%data%", bio.role);
	var formattedImage = HTMLbioPic.replace ("%data%", bio.bioPic);
	var formattedwelcomeMsg = HTMLwelcomeMsg.replace ("%data%", bio.welcomeMsg);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedImage + formattedwelcomeMsg);

	$("#header").append(HTMLskillsStart);
	for (skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
	    $("#skills").append(formattedSkill);
	}

	for (contact in bio.contacts) {
		var formattedMobile = HTMLmobile.replace ("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace ("%data%", bio.contacts.email);
		var formattedTwitter = HTMLtwitter.replace ("%data%", bio.contacts.twitter);
		var formattedGithub = HTMLgithub.replace ("%data%", bio.contacts.github);
		var formattedLocation = HTMLlocation.replace ("%data%", bio.contacts.location);
	}
	$("#footerContacts").append(formattedMobile + formattedEmail + formattedTwitter + formattedGithub + formattedLocation);
};

bio.display();


var work = {
	"jobs": [
	{
		"employer": "Smartling",
		"title": "Digital Marketing Intern",
		"date": "06/15-12/15",
		"location": "New York, NY, USA",
		"description": "• Managed various social media channels: Twitter, Facebook, LinkedIn, Google+ and YouTube; in 5 months, the number of Twitter followers has been increased by 46.8% with 1,032 new followers; the number of Twitter engagements has been increased by 480.2% and the conversion rate from social media has been increased by 715.13%"
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
		"description": "• Used Google Apps, Excel and SugarCRM to conduct vital customer research; leads generated were increased by 25% in 2 months"
	},
	{
		"employer": "Hofstra University",
		"title": "Research Assistant",
		"date": "02/14-12/14",
		"location": "Hempstead, NY, USA",
		"description": "• Utilized Excel and SPSS to conduct reliability analysis to more than 500 sets of various types of data collected from USA, China, Korea and Japan, including demographics, religious beliefs, spiritual statuses, etc."
	}
]
};


work.display = function() {
	for (job in work.jobs)  {
	//create new div for work experience
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace ("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace ("%data%", work.jobs[job].title);
	//concat Employer and Title
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	var formattedworkDates = HTMLworkDates.replace ("%data%", work.jobs[job].date);
	var formattedworkLocation =  HTMLworkLocation.replace ("%data%", work.jobs[job].location);
	var formattedDescription = HTMLworkDescription.replace ("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedEmployerTitle + formattedworkDates + formattedworkLocation + formattedDescription);
	}
};

work.display();


var projects = {
	"samples": [
	{
		"title": "Milk for Always",
		"date": "12/14",
		"description": "• Created an advertising campaign by designing print ads and a video ad that described how milk had evolved within the past several decades to regain public attention of dairy milk products   "
	},
	{
		"title": "Xiaomi",
		"date": "11/14",
		"description": "• Conducted a study to compare the advertising strategy of Xiaomi, a fast growing Chinese smartphone company to that of Apple"
	}
]
};


projects.display = function() {
	for (sample in projects.samples)  {
	//create new div for projects section
	$("#projects").append(HTMLprojectStart);
	var formattedprojectTitle = HTMLprojectTitle.replace ("%data%", projects.samples[sample].title);
	var formattedprojectDates = HTMLprojectDates.replace ("%data%", projects.samples[sample].date);
	var formattedprojectDescription = HTMLprojectDescription.replace ("%data%", projects.samples[sample].description);
	$(".project-entry:last").append(formattedprojectTitle + formattedprojectDates + formattedprojectDescription);
	}
};

projects.display();

var education = {
	"schools": [
		{
			"name": "Hofstra University",
			"location": "Hempstead, NY, USA",
			"degree": "Master",
			"major": ["Marketing"],
			"date": "09/13-05/15"
		},
		{
			"name": "Hong Kong Baptist University",
			"location": "Kowloon, Hong Kong, China",
			"degree": "Bachelor",
			"major": ["Accounting"],
			"date": "09/09-07/13"
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
	
education.display = function() {
	for (school in education.schools)  {
		//create new div for education section
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].date);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
		$(".education-entry:last").append(formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor);
	}

	$("#education").append(HTMLonlineClasses);
    for (onlineCourse in education.onlineCourses) {
    	$("#education").append(HTMLschoolStart);
    	var formattedOnlineTitle = HTMLonlineTitle.replace("%data%" , education.onlineCourses[onlineCourse].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%" , education.onlineCourses[onlineCourse].school);
		//concat OnlineTitle and OnlineSchool
		var formattedOnlineTitleOnlineSchool = formattedOnlineTitle + formattedOnlineSchool;
		var formattedOnlineDates = HTMLonlineDates.replace("%data%" , education.onlineCourses[onlineCourse].date);
		var formattedOnlineUrl = HTMLonlineURL.replace("%data%" , education.onlineCourses[onlineCourse].url);
		$(".education-entry:last").append(formattedOnlineTitleOnlineSchool + formattedOnlineDates + formattedOnlineUrl);
    }
};

education.display();

/*function inName() {
	var name = bio.name.trim().split(" ");
	console.log(name);
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();
	return name[0] + " " + name[1];
};

	
$("#main").append(internationalizeButton);*/

$('#mapDiv').append(googleMap);
