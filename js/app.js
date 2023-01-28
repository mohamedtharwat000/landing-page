/*
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 */

//Define Global Variables
var navBarList = document.getElementById("navbar__list");
var allSections = document.querySelectorAll("section");
var documentFragment = document.createDocumentFragment();
//End Global Variables

//Start Helper Functions

//End Helper Functions

/********** Begin Main Functions **********/

// build the nav
window.addEventListener("load", buildNav());

function buildNav() {
  for (i = 0; i < allSections.length; i = i + 1) {
    let sectionList = document.createElement("li");
    let sectionName = allSections[i].getAttribute("data-nav");
    let sectionId = allSections[i].getAttribute("id");
    sectionList.innerHTML = `<a href="#${sectionId}">${sectionName}</a>`;
    documentFragment.appendChild(sectionList);
  }
  navBarList.appendChild(documentFragment);
}

// Add class 'active' to section when near top of viewport

// window.onscroll = function () {
//   allSections.forEach((section) => {
//     if (
//       section.getBoundingClientRect().top >= -400 &&
//       section.getBoundingClientRect().top <= 150
//     ) {
//       section.classList.add("your-active-class");
//     } else {
//       section.classList.remove("your-active-class");
//     }
//   });
// };

// new function without magic numbers
window.onscroll = () => {
  allSections.forEach((section) => {
    if (
      scrollY > section.offsetTop - screen.height / 2 &&
      scrollY < section.offsetTop + section.offsetHeight - screen.height / 2
    ) {
      if (!section.classList.contains("active-section")) {
        section.classList.add("active-section");
      }
    } else {
      if (section.classList.contains("active-section")) {
        section.classList.remove("active-section");
      }
    }
  });
};

// Scroll to anchor ID using scrollTO event

scrollToSection();
function scrollToSection() {
  let navA = document.querySelectorAll("nav a");

  navA.forEach((a) => {
    a.addEventListener("click", function (event) {
      event.preventDefault();
      let hash = a.hash;
      let section = document.querySelector(`${a.hash}`);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      // location.hash = hash;
      history.replaceState("", "", location.pathname + hash);
    });
  });
}

/********** End Main Functions **********/

//Begin Events

// Build menu

// Scroll to section on link click

// Set sections as active-section
