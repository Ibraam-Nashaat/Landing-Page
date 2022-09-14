/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function buildNAvBar(){
    const sectionList=document.querySelectorAll('section');
    let navList=[];
    for(let i=0;i<sectionList.length;i++)
        navList.push(sectionList[i].dataset.nav);
    let fragment=document.createDocumentFragment();
    for(let i=0;i<navList.length;i++){
        const newA=document.createElement('a');
        newA.textContent=navList[i];
        newA.href='#section'+(i+1);
        if(i==0)
            newA.classList.add('active');
        fragment.appendChild(newA);
    }
    document.querySelector(".navbar__menu").appendChild(fragment);
}

function scrollToSection(){
    document.querySelectorAll(".navbar__menu a").forEach(function(anc){
        anc.addEventListener("click", function(e){
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:"smooth"});
        })
    })
}

function setActiveSection(){
var sections = document.querySelectorAll("section");
addEventListener('scroll',function () {
  var scrollPosition = document.documentElement.getBoundingClientRect().top;
  sections.forEach((section) => {
    if(Math.abs(scrollPosition) < sections[0].offsetTop){
      sections[0].classList.add("your-active-class");
      document.querySelector(`nav a[href="#${sections[0].attributes.id.value}"]`).classList.add("active");
    }
    else if (Math.abs(scrollPosition) >= section.offsetTop- section.offsetHeight * 0.35  &&
    Math.abs(scrollPosition) <section.offsetTop + section.offsetHeight- section.offsetHeight * 0.35 ) {
      section.classList.add("your-active-class");
      document.querySelector(`nav a[href="#${section.attributes.id.value}"]`).classList.add("active");
    }
    else {
        section.classList.remove("your-active-class");
        document.querySelector(`nav a[href="#${section.attributes.id.value}"]`).classList.remove("active");
    }
  });
});
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
buildNAvBar();

// Add class 'active' to section when near top of viewport
setActiveSection();

// Scroll to anchor ID using scrollTO event
scrollToSection()

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


