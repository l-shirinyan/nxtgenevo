var swiper = new Swiper(".industriesSwiper", {
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    769: {
      slidesPerView: 2,
    },
    1021: {
      slidesPerView: 3,
    },
  },
  spaceBetween: 20,
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  freeMode: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

var swiper = new Swiper(".testimonialsSwiper", {
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    769: {
      slidesPerView: 2,
    },
    1021: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".toolsSwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  freeMode: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    769: {
      slidesPerView: 2,
    },
    1021: {
      slidesPerView: 3,
    },
  },
});
