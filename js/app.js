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


//buildNavBar funtion builds the navigation bar dynamically on adding new section
function buildNAvBar(){
    const sectionList=document.querySelectorAll('section');
    let navList=[]; //contains the sections that will be displayed on the navigation bar
     // adds the section name to the navigation list using the data-nav value written in html
    for(let i=0;i<sectionList.length;i++)
        navList.push(sectionList[i].dataset.nav);
    let fragment=document.createDocumentFragment(); //Creates a document fragment to add the navBar elements to
    for(let i=0;i<navList.length;i++){
        const newA=document.createElement('a');
        const newli=document.createElement('li');
        newA.textContent=navList[i]; // adds the text content of the listed items
        newA.href='#section'+(i+1); //adds the href of the sections to scroll to anchor upon click
        //Sets the first section as the default initial active section
        if(i==0)
            newA.classList.add('active'); 
        newli.appendChild(newA);
        fragment.appendChild(newli);
    }
    document.querySelector("#navbar__list").appendChild(fragment);
}

//scrollToSection scrolls to the clicked section smoothly
function scrollToSection(){
    document.querySelectorAll("#navbar__list li a").forEach(function(anc){
        anc.addEventListener("click", function(e){
            e.preventDefault(); //prevents the default behaviour of jumping to the clicked section
            document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:"smooth"}); //scrolls smoothly to section upon click
        })
    })
}

//setActiveSection sets the active section and highlights the active section in navBar
function setActiveSection(){
var sections = document.querySelectorAll("section");
//the function is executed on scrolling to set the current active section in navBar and sections
addEventListener('scroll',function () {
  //gets the height from the top of the page to the current point
  var scrollPosition = document.documentElement.getBoundingClientRect().top;
  /*detects the current scrolling position relative to the page
    to highlight the current active section in navbar  */
  sections.forEach((section) => {
    //if the current scrolling position is at the beginning of the page before any section 
    //then it sets the first section as the default active section
    if(Math.abs(scrollPosition) < sections[0].offsetTop){
      removeAllActiveClasses(); 
      addActiveClass (sections[0]);
    }
    //Otherwise it sets the current section as the active section
    else if (Math.abs(scrollPosition) >= section.offsetTop- section.offsetHeight * 0.35  &&
    Math.abs(scrollPosition) <section.offsetTop + section.offsetHeight- section.offsetHeight * 0.35 ) {
      removeAllActiveClasses();
      addActiveClass (section);
    }
    
  });
});
}

// A helper function to remove active section class from all sections and from the navbar
function removeAllActiveClasses() {
  document.querySelectorAll("#navbar__list li a").forEach((el) => {
    el.classList.remove("active");
  });
  document.querySelectorAll("section").forEach(function(sec){
    sec.classList.remove("your-active-class");
  })
};

//A helper function to set the current section as the active section in the navBar and current section
function addActiveClass (sec){
  let selector = `#navbar__list li a[href="#${sec.attributes.id.value}"]`;
  document.querySelector(selector).classList.add("active");
  sec.classList.add("your-active-class");
};

//toggleButtonMenu toggles the active-button class in response of drop-down menu click
//toggling of active-button class will result in displaying or vanishing of the drop-down navBar menu in small screen sizes
function toggleButtonMenu(){
  const toggleButton = document.getElementsByClassName('toggle-button')[0];
  const navbarLinks = document.querySelector("#navbar__list");

  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active-button'); 
  })
}
// build the nav
buildNAvBar();

// Add class 'active' to section when near top of viewport
setActiveSection();

// Scroll to anchor ID using scrollTO event
scrollToSection()

// toggles the active-button section in responsive mode
toggleButtonMenu();



