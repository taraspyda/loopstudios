import './scss/style.scss';

const body = document.body;
const header = body.querySelector('.header');
const burger = header.querySelector('.burger');
const burgerLine = burger.querySelector('.burger__line');
const menu = body.querySelector('.menu');

let menuIsOpened = false;

burger.addEventListener('click', () => {
  if (!menuIsOpened) {
    menuIsOpened = true;
    burger.classList.add('burger--active');
    burgerLine.classList.add('burger__line--active');
    menu.classList.add('menu--active');
    body.style.overflow = 'hidden';

    return;
  }

  menuIsOpened = false;
  burger.classList.remove('burger--active');
  burgerLine.classList.remove('burger__line--active');
  menu.classList.remove('menu--active');
  body.style.overflow = '';
});

window.addEventListener('scroll', () => {
  const { scrollY } = window;

  if (scrollY > 0 && !header.classList.value.includes('header--black')) {
    header.classList.add('header--black');
  }

  if (scrollY === 0 && header.classList.value.includes('header--black')) {
    header.classList.remove('header--black');
  }
});
