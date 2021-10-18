'use strict';

const hamburgerMenu = document.querySelector('.nav__hamburger');
const navDrawer = document.querySelector('.nav__drawer');
const overlay = document.querySelector('.overlay');
const navItems = document.querySelectorAll('.nav__item');

//////////////////////////////////////////////
// ***** Menu Slider
const menuSlideIn = function () {
  // Toggle Nav
  hamburgerMenu.addEventListener('click', function () {
    hamburgerMenu.classList.toggle('open');
    navDrawer.classList.toggle('active');

    // Add Links Animations
    navItems.forEach((item, index) => {
      item.style.animation = `nav__item-animation 0.5s ease forwards ${
        index / 5 + 0.2
      }s`;
    });
  });

  overlay.addEventListener('click', function () {
    if (navDrawer.classList.contains('active')) {
      navDrawer.classList.toggle('active');
      hamburgerMenu.classList.toggle('open');
    }

    // Remove Links Animations
    navItems.forEach(item => {
      setTimeout(() => {
        item.style.animation = '';
      }, 500);
    });
  });
};

menuSlideIn();

//////////////////////////////////////////////
// ***** Reveals Sections as we scroll down --> Intersection Observer API

const allSections = document.querySelectorAll('.section');

const sectionObsCallBack = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry.target); // the elements that we intersected

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');

  // prevents observer from observing the current revealed section after it is revealed. [better for performance]
  observer.unobserve(entry.target);
};

const sectionObsOptions = {
  root: null,
  threshold: 0.15, // greater than '0' because we dont want to show the section right as it enters the viewport, but a little bit later. Section will be revealed only when it is 15 percent visible.
};

const sectionObserver = new IntersectionObserver(
  sectionObsCallBack,
  sectionObsOptions
);

allSections.forEach(section => {
  section.classList.add('section--hidden'); // change if necessary
  sectionObserver.observe(section); // change if necessary
});

//////////////////////////////////////////////
