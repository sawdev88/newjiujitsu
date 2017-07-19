'use strict';
// var enterSite = prompt('Ener Password');
var doc = document.querySelector('html');
var windowTop = document.documentElement.scrollTop;
var lightBoxOverLay = document.querySelector('.lightbox-overlay');
var lightBoxEmbed = document.querySelector('.lightbox-overlay iframe');

// Nav
var nav = document.querySelector('.main-nav');
var navElements = document.querySelectorAll('.main-nav ul a');
var aboutLink = document.querySelector('.about');
var knowledgeLink = document.querySelector('.knowledge');
var gearLink = document.querySelector('.gear');

// About Area
var aboutArea = document.getElementById('about');
var giTab = document.querySelector('.gi');
var noGiTab = document.querySelector('.no-gi');
var giContainer = document.querySelector('.gi-container');
var noGiContainer = document.querySelector('.no-gi-container');
var aboutVideoList = document.querySelectorAll('.video-nav li');
var aboutVideoAreas = document.querySelectorAll('.video-area');
var lightboxElement = document.querySelectorAll('.lightbox');

var knowledgeArea = document.getElementById('knowledge');
var gearArea = document.getElementById('gear');

// Top offsets
var aboutDivPosition = aboutArea.offsetTop;
var knowledgeDivPosition = knowledgeArea.offsetTop;
var gearDivPosition = gearArea.offsetTop;


// Scroll to area
var scrollToArea = function (section) {
  section.scrollIntoView({
    behavior: 'smooth'
  });
}

// Show active nav element
var activeNav = function (element) {
  clearNav()
  element.classList = ' active-area';
}

// Clear classes from nav elements
var clearNav = function () {
  for (var i = 0; i < navElements.length; i++) {
    var x = navElements[i].classList;

    if (x.contains('active-area')) {
      navElements[i].classList.remove('active-area');
    }
  }
}

// Clear li lists
var clearList = function (arr, removeClass) {
  [].forEach.call(arr, function(el) {
    el.classList.remove(removeClass);
  });
}

// if (enterSite === 'newjits') {
//   doc.style.display = 'block';
// }

// Nav Logic
window.addEventListener('scroll', function () {
  var position = window.pageYOffset;

  if (position > aboutDivPosition) {
    // Hide nav
    nav.style.marginTop = '-3.25rem';
    activeNav(aboutLink);
  } else {
    // Show nav
    nav.style.marginTop = '0';
    clearNav();
  }

  // Highlight knowledgeArea
  if (position > knowledgeDivPosition) {
    activeNav(knowledgeLink);
  }

  // Highlight gearArea
  if (position > gearDivPosition) {
    activeNav(gearLink);
  }
})


// About Container
giTab.addEventListener('click', function () {
  // Give selected div active class
  noGiTab.classList.remove('selected-gi');
  this.classList += ' selected-gi';

  // Give selcted tab's container focus
  noGiContainer.classList.remove('active');
  giContainer.classList += ' active';
})

noGiTab.addEventListener('click', function () {
  // Give selected div active class
  giTab.classList.remove('selected-gi');
  this.classList += ' selected-gi';

  // Give selcted tab's container focus
  giContainer.classList.remove('active');
  noGiContainer.classList += ' active';
})


// About Videos list
for (var i = 0; i < aboutVideoList.length; i++) {
  // Remove selected tab from all items then add selected to this
  aboutVideoList[i].addEventListener('click', function () {
    // get tab's name
    var selectedTab = this.innerText;
    selectedTab = selectedTab.toLowerCase();

    // Clear selected tabs active state
    clearList(aboutVideoList, 'selected');

    // Add newly selected tab with active state
    this.classList += ' selected';

    // Handle video container
    [].forEach.call(aboutVideoAreas, function(el) {
      // Remove .active from all divs
      el.classList.remove('active');

      // Make container visible when tab is selected
      if (el.classList.contains(selectedTab)) {
        var x = document.querySelector('.' + selectedTab.toString());
        x.classList += ' active';
      }
    });
  })
}


// Lightbox Logic
for (var i = 0; i < lightboxElement.length; i++) {
  lightboxElement[i].addEventListener('click', function (el) {

    // Get Video link via data-attr
    if (this.hasAttribute('data-video')) {
      var embedURL = 'https://www.youtube.com/embed/' + this.dataset.video + '?autoplay=1';
      console.log(embedURL);

      // Show lightbox
      lightBoxOverLay.classList += ' show-lightbox';

      // Prevent scroll when lightbox is open
      doc.classList += ' prevent-scroll';

      // Set video
      lightBoxEmbed.setAttribute('src', embedURL);
    }
  })
}

lightBoxOverLay.addEventListener('click', function () {
  this.classList.remove('show-lightbox');

  // Allow scroll
  doc.classList.remove('prevent-scroll');

  // Stop iframe
  lightBoxEmbed.setAttribute('src', '');
})
