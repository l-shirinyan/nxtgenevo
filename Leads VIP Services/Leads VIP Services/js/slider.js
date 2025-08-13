var swiper = new Swiper(".sellSwiper", {
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
       360:{ 
      slidesPerView: 1.1,
      centeredSlides: false,
    },  
       400:{ 
      slidesPerView: 1.2,
      centeredSlides: false,
    },  
    440:{ 
      slidesPerView: 1.3,
      centeredSlides: false,
    },
     650:{ 
      slidesPerView: 1.5,
      centeredSlides: false,
    },
         768:{ 
      slidesPerView: 1.8,
      centeredSlides: false,
    },
     950:{ 
      slidesPerView: 2.2,
      centeredSlides: false,
    },
    1200: { 
      slidesPerView: 2.5,
      centeredSlides: false,
    },
      1300: { 
      slidesPerView: 3.1,
      centeredSlides: false,
    },
    1650: { 
      slidesPerView: 4,
      centeredSlides: false,
    },
    2300:{
      slidesPerView: 5,
      centeredSlides: false,
    }
  }
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
   400: {
      slidesPerView: 1.5,
      spaceBetween: 16
    },
    550: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    768: { 
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
    var swiper = new Swiper(".pricingSwiper", {
      slidesPerView: 1.2,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
        breakpoints: {
    400: {
      slidesPerView: 1.4,
    },
    768: { 
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 16
    },
    1200: {
      slidesPerView: 3,
      centeredSlides: false,
      spaceBetween: 24
    },
  }
    });

  var swiper = new Swiper(".resultsSwiper", {
       slidesPerView: 1.2,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
        breakpoints: {
    400: {
      slidesPerView: 1.4,
    },
    768: { 
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 16
    },
    1200: {
      slidesPerView: 3,
      centeredSlides: false,
      spaceBetween: 24
    },
  }
    });
const testimonials = [
    { text: "VIP Leads helped us land our biggest contract yet. It’s like having a full-time researcher on our team. Thank You!", img: "assets/images/user.png", name: "Jane Doe", title: "Marketing Specialist", quoteColor: "#a9b9cb" },
    { text: "VIP Leads helped us land our biggest contract yet. It’s like having a full-time researcher on our team. Thank You!", img: "assets/images/user.png", name: "Byron Rolfson", title: "Regional Solutions Architect", quoteColor: "#003366" },
    { text: "Omnis velit quia. Perspiciatis et cupiditate. Voluptatum beatae asperiores dolor magnam fuga. Sed fuga est harum quo nesciunt sint. Optio veniam...", img: "assets/images/user.png", name: "John Smith", title: "Product Manager", quoteColor: "#a9b9cb" }
  ];

  let currentIndex = 0;

  const leftTestimonialText = document.querySelector(".testimonial.left p");
  const leftQuoteIcon = document.querySelector(".testimonial.left .quote");
  const centerTestimonialText = document.querySelector(".testimonial.center p");
  const centerQuoteIcon = document.querySelector(".testimonial.center .quote");
  const rightTestimonialText = document.querySelector(".testimonial.right p");
  const rightQuoteIcon = document.querySelector(".testimonial.right .quote");

  const profileImg = document.getElementById("profile-img");
  const profileName = document.querySelector(".profile-name");
  const profileTitle = document.querySelector(".profile-title");

  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const bulletsContainer = document.querySelector(".pagination-bullets");

  function getIndex(index) {
    return (index + testimonials.length) % testimonials.length;
  }

  function createBullets() {
    bulletsContainer.innerHTML = "";
    for(let i = 0; i < testimonials.length; i++) {
      const bullet = document.createElement("button");
      bullet.setAttribute("aria-label", `Show testimonial ${i + 1}`);
      bullet.addEventListener("click", () => {
        currentIndex = i;
        updateSlider(currentIndex);
      });
      bulletsContainer.appendChild(bullet);
    }
  }

  function updateBullets(index) {
    const bullets = bulletsContainer.querySelectorAll("button");
    bullets.forEach((bullet, i) => bullet.classList.toggle("active", i === index));
  }

function updateSlider(index, direction = 'next') {
  const leftIndex = getIndex(index - 1);
  const rightIndex = getIndex(index + 1);

  if (window.innerWidth > 992) {
    centerTestimonialText.parentElement.style.animation =
      direction === 'next'
        ? 'bookFlipDown 0.6s ease forwards'
        : 'bookFlipUp 0.6s ease forwards';
  } else {
    centerTestimonialText.parentElement.style.animation =
      'mobileSlideFade 0.4s ease forwards';
  }


  leftTestimonialText.textContent = testimonials[leftIndex].text;
  leftQuoteIcon.style.color = testimonials[leftIndex].quoteColor;
  centerTestimonialText.textContent = testimonials[index].text;
  centerQuoteIcon.style.color = testimonials[index].quoteColor;
  rightTestimonialText.textContent = testimonials[rightIndex].text;
  rightQuoteIcon.style.color = testimonials[rightIndex].quoteColor;

  profileImg.src = testimonials[index].img;
  profileName.textContent = testimonials[index].name;
  profileTitle.textContent = testimonials[index].title;

  updateBullets(index);

  const mobileSlides = document.querySelectorAll('.resultsSwiper .swiper-slide');
  mobileSlides.forEach((slide, i) => {
    const tIndex = getIndex(index + i);
    const t = testimonials[tIndex];

    const leftI = getIndex(tIndex - 1);
    const rightI = getIndex(tIndex + 1);

    const leftP = slide.querySelector('.testimonial.left p');
    const leftQuote = slide.querySelector('.testimonial.left .quote');
    const centerP = slide.querySelector('.testimonial.center p');
    const centerQuote = slide.querySelector('.testimonial.center .quote');
    const rightP = slide.querySelector('.testimonial.right p');
    const rightQuote = slide.querySelector('.testimonial.right .quote');

    leftP.textContent = testimonials[leftI].text;
    leftQuote.style.color = testimonials[leftI].quoteColor;

    centerP.textContent = testimonials[tIndex].text;
    centerQuote.style.color = testimonials[tIndex].quoteColor;

    rightP.textContent = testimonials[rightI].text;
    rightQuote.style.color = testimonials[rightI].quoteColor;

    const profileImgMobile = slide.querySelector('.profile-img img');
    const profileNameMobile = slide.querySelector('.profile-name');
    const profileTitleMobile = slide.querySelector('.profile-title');

    profileImgMobile.src = t.img;
    profileNameMobile.textContent = t.name;
    profileTitleMobile.textContent = t.title;
  });

  setTimeout(() => {
    centerTestimonialText.parentElement.style.animation = '';
  }, window.innerWidth > 992 ? 600 : 400);
}


  prevBtn.addEventListener("click", () => {
    currentIndex = getIndex(currentIndex - 1);
    updateSlider(currentIndex, 'prev');
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = getIndex(currentIndex + 1);
    updateSlider(currentIndex, 'next');
  });

  createBullets();
  updateSlider(currentIndex);

  const slider = document.querySelector(".testimonial-slider");
  let startX = 0;
  let endX = 0;

  slider.addEventListener("touchstart", (e) => {
    if(window.innerWidth >= 1020) return;
    startX = e.touches[0].clientX;
  });

  slider.addEventListener("touchmove", (e) => {
    if(window.innerWidth >= 1020) return;
    endX = e.touches[0].clientX;
  });

  slider.addEventListener("touchend", () => {
    if(window.innerWidth >= 1020) return;
    const diffX = endX - startX;
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        currentIndex = getIndex(currentIndex - 1);
        updateSlider(currentIndex, 'prev');
      } else {
        currentIndex = getIndex(currentIndex + 1);
        updateSlider(currentIndex, 'next');
      }
    }
    startX = 0;
    endX = 0;
  });

const mobileSlides = document.querySelectorAll('.resultsSwiper .swiper-slide');

function updateMobileSlides() {
  mobileSlides.forEach((slide, i) => {
    const t = testimonials[(currentIndex + i) % testimonials.length];
    const leftP = slide.querySelector('.testimonial.left p');
    const leftQuote = slide.querySelector('.testimonial.left .quote');
    const centerP = slide.querySelector('.testimonial.center p');
    const centerQuote = slide.querySelector('.testimonial.center .quote');
    const rightP = slide.querySelector('.testimonial.right p');
    const rightQuote = slide.querySelector('.testimonial.right .quote');

    const leftIndex = (currentIndex + i - 1 + testimonials.length) % testimonials.length;
    const centerIndex = (currentIndex + i) % testimonials.length;
    const rightIndex = (currentIndex + i + 1) % testimonials.length;

    leftP.textContent = testimonials[leftIndex].text;
    leftQuote.style.color = testimonials[leftIndex].quoteColor;

    centerP.textContent = testimonials[centerIndex].text;
    centerQuote.style.color = testimonials[centerIndex].quoteColor;

    rightP.textContent = testimonials[rightIndex].text;
    rightQuote.style.color = testimonials[rightIndex].quoteColor;

    const profileImg = slide.querySelector('.profile-img img');
    const profileName = slide.querySelector('.profile-name');
    const profileTitle = slide.querySelector('.profile-title');

    profileImg.src = t.img;
    profileName.textContent = t.name;
    profileTitle.textContent = t.title;
  });
}
