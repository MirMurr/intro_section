let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");

/*variables for the desktop version dropdown*/
let featureButton = document.querySelector('.first');
let featureDropdown = document.querySelector('.submenu-features');
let companyButton = document.querySelector('.second');
let companyDropdown = document.querySelector('.submenu-company');
let learnButton = document.querySelector('.learn');
let learnLink = document.querySelector('.learn-text')


/*hamburger menu X animation*/
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});


/*Features button dropdown desktop*/
featureButton.addEventListener('click', () => {
    featureDropdown.classList.toggle('active');
});

/*Company button dropdown desktop*/
companyButton.addEventListener('click', () => {
    companyDropdown.classList.toggle('active');
});


/*Learn more button*/
learnButton.addEventListener('mouseover', () => {
    learnButton.classList.toggle('active');
    learnLink.classList.toggle('active');
});

learnButton.addEventListener('mouseout', () => {
    learnButton.classList.remove('active');
    learnLink.classList.remove('active');
});
















