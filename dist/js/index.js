"use strict";

var navSlide = function navSlide() {
  var burger = document.querySelector('.burger-wrapper'),
      nav = document.querySelector('.nav');
  burger.addEventListener('click', function () {
    return nav.classList.toggle('nav-active');
  });
};

navSlide(); 
