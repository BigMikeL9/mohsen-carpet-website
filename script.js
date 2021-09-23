'use strict';

const hamburgerMenu = document.querySelector('.nav__hamburger');
const navDrawer = document.querySelector('.nav__drawer');
const overlay = document.querySelector('.overlay');
const navItems = document.querySelectorAll('.nav__item');

// Menu Slider
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
