'use strict';

const menuBtn = document.querySelector('.menu-btn');
const hamburguer = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');
const overlay = document.querySelector('.overlay');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburguer.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach(item => item.classList.add('open'));
    document.body.classList.add('disable-scroll');
    overlay.style.display = 'block';
    showMenu = true;
  } else {
    hamburguer.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'));
    document.body.classList.remove('disable-scroll');
    overlay.style.display = 'none';
    showMenu = false;
  }
}

// SlideShow

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const slides = document.querySelectorAll('.slide-img');
  const slidesInfo = document.querySelectorAll('.slide-info');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  slides.forEach(slide => {
    slide.style.display = 'none';
  });
  slidesInfo.forEach(slide => {
    slide.style.display = 'none';
  });
  slides[slideIndex - 1].style.display = 'block';
  slidesInfo[slideIndex - 1].style.display = 'block';
}
