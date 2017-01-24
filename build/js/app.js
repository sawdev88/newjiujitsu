'use strict';
// var enterSite = prompt('Ener Password');
var doc = document.querySelector('html');

var aboutArea = document.querySelector('#about');
var giTab = document.querySelector('.gi');
var noGiTab = document.querySelector('.no-gi');
var giContainer = document.querySelector('.gi-container');
var noGiContainer = document.querySelector('.no-gi-container');

var scroolToArea = function (section) {
  section.scrollIntoView({
    behavior: 'smooth'
  });
}

// if (enterSite === 'newjits') {
//   doc.style.display = 'block';
// }

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
