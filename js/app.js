
/*
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
*/


//Define Global Variables
var navBarList = document.getElementById('navbar__list');
var allSections = document.querySelectorAll('section');
var allSectionsNumber = allSections.length;
var documentFragment = document.createDocumentFragment();
//End Global Variables


//Start Helper Functions


//End Helper Functions


/********** Begin Main Functions **********/

// build the nav
window.addEventListener('load', buildNav())

function buildNav() {

    for(i = 0; i < allSectionsNumber; i = i + 1){
        let sectionList = document.createElement("li");
    	let sectionName = allSections[i].getAttribute("data-nav");
    	let sectionId = allSections[i].getAttribute("id");
        sectionList.innerHTML = `<a href="#${sectionId}">${sectionName}</a>`;
        documentFragment.appendChild(sectionList)
    };
    navBarList.appendChild(documentFragment);
};


// Add class 'active' to section when near top of viewport

// window.onscroll = function() {

// 	allSections.forEach(section => {

//         let activeLink = document.querySelectorAll("nav a").forEach;

// 	    if(section.getBoundingClientRect().top >= -400 && section.getBoundingClientRect().top <= 150){

//             section.classList.add("your-active-class");
//             activeLink.classList.add("active-link");

//         }

//         else{
//             section.classList.remove("your-active-class");
//             activeLink.classList.remove("active-link");
//         }
    
// 	})
// }

window.onscroll = function() {

    allSections.forEach(section => {
    
        if(section.getBoundingClientRect().top >= -400 && section.getBoundingClientRect().top <= 150)
            section.classList.add("your-active-class");
        else
            section.classList.remove("your-active-class");  
    })}






// Scroll to anchor ID using scrollTO event

scrollToSection();
function scrollToSection() {

    let navA = document.querySelectorAll("nav a");

    navA.forEach(a => {
        a.addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelector(a.getAttribute('href')).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        });
    });
}


/********** End Main Functions **********/

//Begin Events

// Build menu 

// Scroll to section on link click

// Set sections as active
