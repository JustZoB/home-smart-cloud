const menu = document.querySelector(".header .wrap");

if (menu) {
  const body = document.querySelector("body");
  const links = document.querySelectorAll(".smooth-scroll");
  const burgerButton = menu.querySelector(".burger-button_box");

  document.querySelector(".burger").addEventListener("click", () => {
    // Do nothing
    // Fixes safari event propagation error in iOS
  });

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
}
