    var swiper = new Swiper(".sellSwiper", {
      slidesPerView: 3,
      spaceBetween: 0,
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
    }
  }
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
    }
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

    if (window.innerWidth >= 1020) {
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

    setTimeout(() => {
      centerTestimonialText.parentElement.style.animation = '';
    }, window.innerWidth >= 1020 ? 600 : 400);
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
