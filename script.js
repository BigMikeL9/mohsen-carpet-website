'use strict';

const hamburgerMenu = document.querySelector('.nav__hamburger');
const navDrawer = document.querySelector('.nav__drawer');

// Responsive Menu
hamburgerMenu.addEventListener('click', function () {
  hamburgerMenu.classList.toggle('open');
  navDrawer.classList.toggle('active');
});

document.addEventListener('click', function (event) {
  hamburgerMenu.classList.toggle('open');
  navDrawer.classList.toggle('active');

  console.log(event.target);
});
