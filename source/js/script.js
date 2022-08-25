const hamb = document.querySelector('.nav__toggle');
const menu = document.querySelector('.nav__list');

hamb.addEventListener('click', function(){
    menu.classList.toggle('active');
    hamb.classList.toggle('active');
});
