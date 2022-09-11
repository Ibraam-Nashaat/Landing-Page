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
        fragment.appendChild(newA);
    }
    document.querySelector(".navbar__menu").appendChild(fragment);
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
buildNAvBar();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


