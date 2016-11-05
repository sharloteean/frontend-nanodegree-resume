



var bio = {
	"name" : "Charlotte Anongos",
	"role": "Web Developer",
	"contactinfo": {
		"mobile":  "(818) 281-0834",
		"email": "charlotte.anongos@gmail.com",
		"github": "sharloteean",
		"location": "Los Angeles"
	},
	"welcomeMessage": "lorem ipsum dolor sit amet",
	"age" : 25,
	"skills": ["awesomeness", "programming", "reading", "Javascript"],
	"bioPic": "images/me.jpg"
};



var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedName = HTMLheaderName.replace("%data%", bio.name)
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var formattedMobile = HTMLmobile.replace("%data%", bio.contactinfo.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contactinfo.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contactinfo.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contactinfo.location);
var formattedContacts = formattedMobile + formattedEmail + formattedGithub + formattedLocation;

$("#topContacts").append(formattedContacts);
    


var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);

$("#header").append(formattedPic);


var projects = {
	"projects" : [
	{
		"title": "Asuka Restaurant Website",
		"dates": "September 2011 - August 2013",
		"description": "• A website displaying information about Hours, Contact information, Maps, Menu, and Photos of the menu. \n• Maintained weekly or as needed when menu is updated. \n• Restaurant was bought out and replaced by a new company and website was closed in 2013."
	}
	]
}

var work = {
	"jobs" : [
	{
		"employer": "Shire",
		"title": "Quality Control Analyst, Workflow Lead",
		"location": "Los Angeles, CA, US",
		"dates": "August 2014 - present",
		"description": "• Perform chemical and data analysis of biotherapy samples efficiently to meet short manufacturing turnaround times. \n• Ensure compliance with all cGMP rules, product documentation, specifications, SOPs, workplace safety, and FDA requirements."
	},
	{
		"employer": "Asuka Restaurant",
		"title": "Hostess",
		"location": "Los Angeles, CA, US",
		"dates": "June 2011 - September 2013",
		"description": "• Oversaw register opening and closing procedures and performed accounting duties. \n• Increased customer access by creating and maintaining restaurant website."
	},
	{
		"employer": "ASUCLA Stores and Restaurants",
		"title": "Supervisor",
		"location": "Los Angeles, CA, US",
		"dates": "September 2009 to March 2011",
		"description": "• Supervised and facilitated cleaning procedures of several stations. \n• Upheld safety standards and customer health by periodic inspection of each station."
	}
	]
};


var education = {
	"schools" : [
	{
		"name": "University of California, Los Angeles",
		"city": "Los Angeles, CA, US",
		"degree": "BS",
		"major": "Chemical Engineering",
		"years": "2009-2014"
	}
  ],
	"onlineCourses" : [
	{
		"title": "Javascript Syntax",
		"school": "Udacity",
		"dates": "2016",
		"url": "https://classroom.udacity.com/courses/ud804/"
	}
  ]
}


 if(bio.skills.length > 0) {
   
      $("#header").append(HTMLskillsStart);
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
      $("#skills").append(formattedSkill);
    
    }

  

  for (job in work.jobs) {
  	$("#workExperience").append(HTMLworkStart);
  	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
  	var formattedEmployerTitle = formattedEmployer + formattedTitle;

  	var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
  	var formattedDateLocation = formattedDate + formattedLocation;

  	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

  	$(".work-entry:last").append(formattedEmployerTitle);
  	$(".work-entry:last").append(formattedDateLocation);
  	$(".work-entry:last").append(formattedDescription);
  }

for (project in projects)
{
	$("#projects").append(HTMLprojectStart);
	var formattedProject = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	
	$("#projects").append(formattedProject);
}






