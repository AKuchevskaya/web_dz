const menuActive = document.querySelector('.mobile-menu__box');
const burger = document.querySelector('.header__right_btn-menu');
const menuClose = document.querySelector('mobile-menu__close');

function toggleMenu() {
    menuActive.classList.toggle('hidden');
}

burger.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);