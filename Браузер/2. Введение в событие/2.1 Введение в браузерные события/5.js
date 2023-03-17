let menu = document.getElementById('menu');
let menuName = menu.querySelector('.menu__name');

menuName.addEventListener('click', () => {
  menu.classList.toggle('open');
});