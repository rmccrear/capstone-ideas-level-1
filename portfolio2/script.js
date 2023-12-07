'use strict';

const css = document.querySelector('#css');
const navElement = document.querySelector('.nav');
const body = document.querySelector('body');
const navBar = document.querySelector('nav');
const footer = document.querySelector('footer');

navElement.addEventListener('click', () => {
  if (css.href.endsWith('light-bootstrap.min.css')) {
    body.classList.add('bg-dark', 'text-white');
    footer.classList.add('bg-dark', 'text-white');
    navBar.classList.add('bg-dark', 'navbar-dark');

    css.href = 'bootstrap.min.css';
  } else {
    css.href = 'light-bootstrap.min.css';

    body.classList.remove('bg-dark', 'text-white');
    navBar.classList.remove('bg-dark', 'navbar-dark');
    footer.classList.remove('bg-dark', 'text-white');
  }
});
