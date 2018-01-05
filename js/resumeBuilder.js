/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "John Doe",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "777-777-7777",
        "email": "johndoe@gmail.com",
        "github": "johndoe",
        "twitter": "johndoe",
        "location": "New York"
    },
    "welcomeMessage": "Welcome to my online resume.",
    "skills": [
        "HTML", "CSS", "Javascript", "jQuery", "Bootstrap"
    ],
    "biopic": "images/fry.jpg", //ToDO: replace image
    display: function () {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var headerSelector = $("#header");
        headerSelector.prepend(formattedRole);
        headerSelector.prepend(formattedName);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedContacts = formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation;
        $("#topContacts, #footerContacts").append(formattedContacts);

        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        headerSelector.append(formattedWelcomeMsg);

        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        headerSelector.append(formattedBioPic);

        if (bio.skills.length > 0){
            headerSelector.append(HTMLskillsStart);
            bio.skills.forEach(function (skill) {
                var formattedSkills = HTMLskills.replace("%data%", skill);
                $("#skills").append(formattedSkills);
            });
        }
    }
};

var education = {
    "schools": [
        {
            "name": "TCI College of Technology",
            "location": "New York, New York",
            "degree": "Associate",
            "majors": [
                "Networking"
            ],
            "dates": "2008-2010"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer",
            "school": "Udacity",
            "dates": "2017",
            "url": "http://www.udacity.com"
        }
    ],
    display: function () {

        education.schools.forEach(function (school) {
            var educationSelector = $("#education");
            educationSelector.append(HTMLschoolStart);
            var educationEntry = $(".education-entry:last");

            var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
            educationEntry.append(formattedSchoolName);

            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            educationEntry.append(formattedSchoolLocation);

            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            educationEntry.append(formattedSchoolDegree);

            var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", school.majors);
            educationEntry.append(formattedSchoolMajors);

            var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
            educationEntry.append(formattedSchoolDates);
        });

        education.onlineCourses.forEach(function (course) {
            var educationSelector = $("#education");
            educationSelector.append(HTMLonlineClasses);
            educationSelector.append(HTMLschoolStart);
            var educationEntry = $(".education-entry:last");

            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
            educationEntry.append(formattedOnlineTitle);

            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            educationEntry.append(formattedOnlineSchool);

            var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
            educationEntry.append(formattedOnlineDates);

            var formattedOnlineUrl = HTMLonlineURL.replace("%data%", course.url);
            educationEntry.append(formattedOnlineUrl);
        });
    }
};

var work = {
    "jobs": [
        {
            "employer": "Chefs' Warehouse",
            "title": "Inventory Control",
            "location": "Bronx, New York",
            "dates": "2012-Present",
            "description": "Performs daily cycle count of warehouse inventory. Completes daily reports which include but not limited to, Short Product Report, Expiration Date Report, Large Adjustment Report, Negative Inventory Report, Negative Weight Report and any inventory related issues that arise."
        }
    ],
    display: function () {
        work.jobs.forEach(function (job) {
            $("#workExperience").append(HTMLworkStart);
            var workEntry = $(".work-entry:last");

            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            workEntry.append(formattedEmployerTitle);

            var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
            workEntry.append(formattedLocation);

            var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
            workEntry.append(formattedWorkDates);

            var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
            workEntry.append(formattedWorkDescription);
        });
    }
};

var projects = {
    "projects": [
        {
            "title": "Build a Portfolio Site",
            "dates": "2017",
            "description": "in progress",
            "images": [
                "images/197x148.gif",
                "images/197x148.gif"
            ]
        }
    ],
    display: function () {
        projects.projects.forEach(function (project) {
            $("#projects").append(HTMLprojectStart);
            var projectEntry  = $(".project-entry:last");

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
            projectEntry.append(formattedProjectTitle);

            var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
            projectEntry.append(formattedProjectDates);

            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
            projectEntry.append(formattedProjectDescription);

            if (project.images.length > 0){
                project.images.forEach(function (image) {
                    var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
                    projectEntry.append(formattedProjectImage);
                });
            }
        });
    }
};

/* Internationalize Button */
// // function inName (name) {
// //     name = name.trim().split(" ");
// //     console.log(name);
// //     name[1] = name[1].toUpperCase();
// //     name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
// //
// //     return name[0] + " "+name[1];
// }

// $("#main").append(internationalizeButton);

/* Google Map */
$("#mapDiv").append(googleMap);


bio.display();
education.display();
work.display();
projects.display();
