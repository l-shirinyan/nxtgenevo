var swiper = new Swiper(".industriesSwiper", {
slidesPerView: 1.2, 
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
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    400: {
      slidesPerView: 1.7,
    },
    768: { 
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 24
    },
    1200: {
      slidesPerView: 3,
      centeredSlides: false,
      spaceBetween: 24
    },
    1400: { 
      slidesPerView: 4,
      centeredSlides: false,
      spaceBetween: 24
    }
  }

});

var swiper = new Swiper(".testimonialsSwiper", {
slidesPerView: 1.2, 
  spaceBetween: 20,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    400: {
      slidesPerView: 1.7,
    },
    769: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

 var swiper = new Swiper(".toolsSwiper", {
  slidesPerView: 1.2, 
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
    500: {
      slidesPerView: 1.3,
      spaceBetween: 16
    },
    600: {
      slidesPerView: 1.5,
      spaceBetween: 16
    },
    768: { 
      slidesPerView: 2,
      centeredSlides: false,
    },
    992: { 
      slidesPerView: 2.5,
      centeredSlides: false,
    },
    1200: {
      slidesPerView: 3,
      centeredSlides: false,
      spaceBetween: 24
    },
    1600: { 
      slidesPerView: 4,
      centeredSlides: false,
      spaceBetween: 24
    }
  }
});
