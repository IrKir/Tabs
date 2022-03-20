const burger = document.querySelector('.humburger-menu');
const menu = document.querySelector('.menu');
const menuLinks = menu.querySelectorAll('.menu-list__item');

burger.addEventListener('click', () => {
  menu.classList.toggle('menu-active')
})

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('menu-active')
  })
})
  
document.addEventListener('click', (evt) => {
  if (!(evt.target.closest('.menu') || evt.target.closest('.humburger-menu'))) {
    menu.classList.remove('menu-active')
  }
})