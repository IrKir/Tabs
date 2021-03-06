const links = document.querySelectorAll('.menu-list__link');
const btn = document.querySelector('.main__button');
const mainScroll = document.querySelector('.main__scroll');
const allLinks = [...links, btn,  mainScroll]

allLinks.forEach(link => {
  link.addEventListener('click', (evt) => {
    evt.preventDefault();

    const id = link.getAttribute('href').substring(1); //убираем 1й символ (решётку)
    const section = document.getElementById(id);
    if (section) {
      seamless.scrollIntoView(section, {
        behavior: "smooth",
        block: "center",
        inline: "center",
    }); // из библитеки seamless-scroll-polyfill для всех браузеров
      /*section.scrollIntoView({
        block: 'start',
        behavior: 'smooth' // сафари не поддерживает scrollIntoView
      })*/
    }
  });
});
