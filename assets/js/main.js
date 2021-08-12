/*==================== MENU SHOW Y HIDDEN ====================*/
/* const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');
 */
/*===== MENU SHOW =====*/
/* Validate if constant exists */
/* if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
} */
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
/* if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
} */

/*==================== REMOVE MENU MOBILE ====================*/

/* const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction)) */

/*==================== ACCORDION SKILLS ====================*/
/* const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')
 */
/* function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
} */

/* skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
}) */
/*==================== QUALIFICATION TABS ====================*/
// get education toggle btn container
var EducationBTN = document.getElementById('EducationBTN')
// get work toggle btn container
var workBTN = document.getElementById('workBTN')
// get  education container
var education = document.getElementById('education')
// get  work container
var work = document.getElementById('work')

// show education with all content and hide work content
EducationBTN.addEventListener('click', () => {
    education.classList.add('show')
    education.classList.remove('hide')
    work.classList.add('hide')
    work.classList.remove('show')
})
// show work with all content and hide education content
workBTN.addEventListener('click', () => {
    education.classList.add('hide')
    education.classList.remove('show')
    work.classList.add('show')
    work.classList.remove('hide')
})

/* const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
}) */

/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/


/*==================== SHOW SCROLL UP ====================*/


/*==================== DARK LIGHT THEME ====================*/