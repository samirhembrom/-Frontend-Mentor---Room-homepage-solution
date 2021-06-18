# Frontend Mentor - Room homepage solution

This is a solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I learned how slideshow works. I used JS to change the slides.

```js
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
```

### Continued development

I need to work in aligning the the buttons and also need to work in laying out a proper the elements properly. I also need to work on accessibility of my webpages.

### Useful resources

- [Slideshow](https://www.w3schools.com/howto/howto_js_slideshow.asp) - This helped me for slideshow display. I really liked this pattern and will use it going forward.

## Author

- Frontend Mentor - [@samirhembrom007](https://www.frontendmentor.io/profile/samirhembrom007)
- Twitter - [@SamirHembrom11](https://twitter.com/SamirHembrom11)
