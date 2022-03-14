/* Menu Toogle */
let menu = document.querySelector('#menu');
let menu_bar = document.querySelector('#menu-bar');
let menu_hamburguer = document.querySelector('#menu-hamburguer');
let main_contain = document.querySelector('#main-contain');

menu_bar.addEventListener('click', function () {
  menu.classList.toggle('menu__toggle');
  menu_hamburguer.classList.toggle('check');
  main_contain.classList.toggle('menu-filter');
});

menu.addEventListener('click', function () {
  menu.classList.toggle('menu__toggle');
  menu_hamburguer.classList.toggle('check');
  main_contain.classList.toggle('menu-filter');
});
