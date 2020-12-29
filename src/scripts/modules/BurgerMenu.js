const body = document.querySelector("body");
const menu = document.querySelector(".header .wrap");
const links = document.querySelectorAll(".smooth-scroll");
const burgerButton = menu.querySelector(".burger-button_box");

const langSwitch = menu.querySelector(".header .lang-switch")
const lang = langSwitch.querySelector(".header .lang-switch .current");

burgerButton.addEventListener("click", () => {
  menu.classList.toggle("active");
  body.classList.toggle("disableScroll");
});

links.forEach(link => {
  link.addEventListener("click", () => {
    const scrollTo = document.querySelector(link.getAttribute('data-href'));

    if (document.documentElement.clientWidth >= 992) {
      scroll({
        top: scrollTo.offsetTop - 125,
        behavior: 'smooth',
      });
    }

    if (document.documentElement.clientWidth < 992) {
      menu.classList.remove("active");
      body.classList.remove("disableScroll");
      setTimeout(function () {
        scroll({
          top: scrollTo.offsetTop - 125,
          behavior: 'smooth',
        });
      }, 100);
    }
  });
});

lang.addEventListener("click", () => {
  langSwitch.classList.toggle("active");
});
