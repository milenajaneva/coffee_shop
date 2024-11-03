const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navLinks = document.querySelectorAll(".nav-menu .nav-link");

menuOpenButton.addEventListener("click", () => {
  //Toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

//Close menu when nav link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => menuOpenButton.click());
});
//Instalize Swiper
const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
