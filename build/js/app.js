'use strict';
// var enterSite = prompt('Ener Password');
var doc = document.querySelector('html');
var windowTop = document.documentElement.scrollTop;

var nav = document.querySelector('.main-nav');
var navElements = document.querySelectorAll('.main-nav ul a');
var aboutLink = document.querySelector('.about');
var gearLink = document.querySelector('.gear');

var aboutArea = document.querySelector('#about');
var giTab = document.querySelector('.gi');
var noGiTab = document.querySelector('.no-gi');
var giContainer = document.querySelector('.gi-container');
var noGiContainer = document.querySelector('.no-gi-container');

var gearArea = document.querySelector('#gear');

var scroolToArea = function (section) {
  section.scrollIntoView({
    behavior: 'smooth'
  });
}

// Show active nav element
var activeNav = function (element) {
  clearNav()
  element.classList = ' active-area';
}

var clearNav = function () {
  for (var i = 0; i < navElements.length; i++) {
    var x = navElements[i].classList;

    if (x.contains('active-area')) {
      navElements[i].classList.remove('active-area');
    }
  }
}


// if (enterSite === 'newjits') {
//   doc.style.display = 'block';
// }

// Nav
window.addEventListener('scroll', function () {
  var position = window.pageYOffset;
  var aboutDivPosition = aboutArea.offsetTop;
  var gearDivPosition = gearArea.offsetTop;

  if (position > aboutDivPosition) {
    // Hide nav
    nav.style.marginTop = '-3.25rem';
    activeNav(aboutLink);

  } else {
    // Show nav
    nav.style.marginTop = '0';
    clearNav();
  }

  if (position > gearDivPosition) {
    activeNav(gearLink);
  }
})


// About Container
giTab.addEventListener('click', function () {
  // Give selected div active class
  noGiTab.classList.remove('selected');
  this.classList += ' selected';

  // Give selcted tab's container focus
  noGiContainer.classList.remove('active');
  giContainer.classList += ' active';

  scroolToArea(aboutArea);
})

noGiTab.addEventListener('click', function () {
  // Give selected div active class
  giTab.classList.remove('selected');
  this.classList += ' selected';

  // Give selcted tab's container focus
  giContainer.classList.remove('active');
  noGiContainer.classList += ' active';

  scroolToArea(aboutArea);
})
