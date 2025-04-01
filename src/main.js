import './scss/style.scss';

const body = document.body;
const burger = body.querySelector('.burger');
const burgerLine = burger.querySelector('.burger__line');
const menu = body.querySelector('.menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  burgerLine.classList.toggle('burger__line--active');
  menu.classList.toggle('menu--active');
});
