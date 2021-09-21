'use strict';

const responsiveMenu = document.querySelector('.responsive__menu');
const navLinks = document.querySelector('.nav__links');

// Responsive Menu
responsiveMenu.addEventListener('click', function () {
  responsiveMenu.classList.toggle('open');
});
