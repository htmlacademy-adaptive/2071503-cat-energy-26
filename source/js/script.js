const hamb = document.querySelector('.nav__toggle');
const menu = document.querySelector('.nav__list');

// убираем классы при включеном js
menu.classList.remove('nav__list--no-js');
hamb.classList.remove('nav__toggle--no-js');

hamb.addEventListener('click', function(){
    menu.classList.toggle('nav__list--active');
    hamb.classList.toggle('nav__toggle--active');
});
